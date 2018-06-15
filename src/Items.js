import React, { Component } from "react";
import "./App.css";
import Message from "./Message";
import {
    connectUpdateCartItem,
    connectRemoveFromCart,
    connectCartSummary,
    connectCartItems,
    compose
} from "abcart-react";

const productCatalog = [
    {
        sku: "sku_abc",
        metadata: {
            name: "Awesome Product"
        }
    },
    // not in stripe
    {
        sku: "abc-item2",
        metadata: {
            name: "Fantastic Widget"
        }
    }
];

const AddToCart = connectUpdateCartItem(
    ({ updateCartItem, item, quantity, children }) => (
        <button
            style={{ margin: "10px" }}
            onClick={() =>
                updateCartItem({
                    quantity,
                    ...item
                })
            }
        >
            {children}
        </button>
    )
);

const RemoveFromCart = connectRemoveFromCart(
    ({ removeFromCart, id, children }) => (
        <button style={{ margin: "10px" }} onClick={() => removeFromCart(id)}>
            {children}
        </button>
    )
);

const ShoppingCart = compose(connectCartSummary, connectCartItems)(
    ({ cartItems = [], cartSummary }) => (
        <div>
            <pre>{JSON.stringify(cartItems, null, 4)}</pre>

            <h3>Cart Summary</h3>
            <pre>{JSON.stringify(cartSummary, null, 4)}</pre>
        </div>
    )
);

export default () => (
    <div>
        <h3>Cart Items</h3>
        <Message>
            The following examples show state changes as you add, update, and
            remove items from an account. To successfully add an item to your
            cart, you must first create it as a Product with an SKU in your
            Stripe account under TEST mode. If you only add the first product
            "sku_abc", to your Stripe account, then you can also see an error
            response when trying to add "abc-item2" into the cart. Note the
            "pending" state changes as we wait for a response from the server.
        </Message>
        {productCatalog.map(item => (
            <div key={item.sku}>
                <AddToCart item={item} quantity={1}>
                    1 - {item.sku}
                </AddToCart>
                <AddToCart item={item} quantity={4}>
                    4 - {item.sku}
                </AddToCart>
                <RemoveFromCart id={item.sku}>
                    remove - {item.sku}
                </RemoveFromCart>
            </div>
        ))}
        <ShoppingCart />
    </div>
);
