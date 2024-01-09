import React from 'react';
import { BsFacebook, BsGoogle, BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";

const Contact = () => {
    return (
        <div className="contact">
            <div className="wrapper">
                <span>BE IN TOUCH WITH US:</span>
                <div className="mail">
                    <input type="text" placeholder="Enter your e-mail..." />
                    <button>JOIN US</button>
                </div>
                <div className="icons">
                    <BsFacebook />
                    <BsInstagram />
                    <BsTwitter />
                    <BsGoogle />
                    <BsPinterest />
                </div>
            </div>
        </div>
    )
}

export default Contact