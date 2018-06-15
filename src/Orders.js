import React, { Component } from "react";
import Message from "./Message";
import { connectOrders, compose, connectPlaceOrder } from "abcart-react";

export default compose(connectOrders, connectPlaceOrder)(
    ({ orders = [], pendingOrderId, placeOrder, status }) => (
        <div>
            <h3>Orders</h3>
            <Message>
                This uses the Stripe test token "tok_visa" to pay for an order
                in test mode. In production you would get this with something
                like Stripe Elements. In order to place an order you must first
                click the "calculateShippingMethods" button, from above, to
                create a pending order in Stripe.
            </Message>
            <button
                onClick={() =>
                    placeOrder({ source: "tok_visa", isNewCard: true })
                }
                disabled={status.status === "noPendingOrder"}
            >
                Place Order
            </button>
            <Message>
                The following is the state returned by orders and includes all
                orders for a given user, as well as the current status of any
                pending or processing orders.
            </Message>
            <pre>
                {JSON.stringify({ status, orders, pendingOrderId }, null, 4)}
            </pre>
        </div>
    )
);
