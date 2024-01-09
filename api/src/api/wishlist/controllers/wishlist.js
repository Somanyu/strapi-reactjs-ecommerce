'use strict';

/**
 * wishlist controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::wishlist.wishlist', ({ strapi }) => ({
    async find(ctx) {
        const { email } = ctx.state.user;
        try {
            const data = await strapi.db.query("api::wishlist.wishlist").findMany({
                where: { email },
            });
            return { data };
        } catch (error) {
            ctx.response.status = 500;
            return error;
        }
    },
}));

      {/* <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-dynaPuff font-bold text-gray-900 sm:text-3xl">Wishlist Collection</h2>
          <p className="mt-4 font-fredoka max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            presenting cumae iure dicta incident est ipsam, officia dolor fugit
            natus?
          </p>
        </header>
      </div>
      <div className="lg:col-span-3 lg:py-8">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          Product
          {wishlist?.map((p) => (
            <>
              <p>{p.product.title}</p>
            </>
          ))}
        </ul>
      </div> */}