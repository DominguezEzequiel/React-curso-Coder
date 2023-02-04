import React from "react";
import './styles.css'



const CartWidget = () => {
    return (
        <>
            <div className="cartContainer">
                <div className="cartWidget">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <div className="cartCount">
                        <p>3</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CartWidget;