// @ts-nocheck

'use strict';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::order.order', ({ strapi }) => ({

    async create(ctx) {
        const { products, email, total_price, userId } = ctx.request.body;

        try {
            const lineItems = await Promise.all(
                products.map(async (product) => {
                    const item = await strapi
                        .service("api::product.product")
                        .findOne(product.id);

                    return {
                        price_data: {
                            currency: "inr",
                            product_data: {
                                name: item.title,
                            },
                            unit_amount: Math.round(item.price * 100),
                        },
                        quantity: product.quantity,
                    };
                })
            );

            const session = await stripe.checkout.sessions.create({
                shipping_address_collection: { allowed_countries: ['IN'] },
                payment_method_types: ["card"],
                mode: "payment",
                invoice_creation: {
                    enabled: true,
                },
                billing_address_collection: "required",
                phone_number_collection: {
                    enabled: true,
                },
                invoice_creation: {
                    enabled: true,
                },
                success_url: process.env.CLIENT_URL + "/success?session_id={CHECKOUT_SESSION_ID}",
                cancel_url: process.env.CLIENT_URL + "?success=false",
                line_items: lineItems,
                customer_email: email,
            });
            // console.log("🚀 ~ file: order.js:52 ~ create ~ session:", session)

            await strapi
                .service("api::order.order")
                .create({ data: { products, order_metadata: products, stripe_checkout_session: session.id, total: total_price, user: userId, email: email } });

            return { stripeSession: session };
        } catch (error) {
            ctx.response.status = 500;
            return { error };
        }
    },


    async confirm(ctx) {
        const { stripe_checkout_session } = ctx.request.body;
        console.log("checkout_session", stripe_checkout_session)

        const session = await stripe.checkout.sessions.retrieve(stripe_checkout_session)
        // console.log("🚀 ~ file: order.js:67 ~ confirm ~ session:", session)

        const invoice = await stripe.invoices.retrieve(session.invoice);
        // console.log("🚀 ~ file: order.js:77 ~ confirm ~ invoice:", invoice)

        if (session.payment_status === "paid") {
            const newOrder = await strapi.db.query('api::order.order').update({
                where: { stripe_checkout_session },
                data: { hosted_invoice_url: invoice.hosted_invoice_url, invoice_pdf: invoice.invoice_pdf, status: 'Paid', shipping_address: session.shipping_details, phone_number: session.customer_details.phone },
            })

            const populatedOrder = await strapi.db.query('api::order.order').findOne({
                where: { id: newOrder.id },
                populate: {
                    products: {
                        populate: ['image', 'image2']
                    }
                },
            })

            return populatedOrder;
        } else {
            ctx.response.status = 500;
            return { error: "Payment not verified" };
        }
    },

    async find(ctx) {
        const { email } = ctx.state.user;
        try {
            const data = await strapi.db.query("api::order.order").findMany({
                where: { email },
            });
            return { data };
        } catch (error) {
            ctx.response.status = 500;
            return error;
        }
    },

}));
