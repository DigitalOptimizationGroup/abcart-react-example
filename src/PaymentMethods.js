import React, { Component } from "react";
import Message from "./Message";
import {
    connectPaymentMethods,
    connectSaveStripeCard,
    compose
} from "abcart-react";

export default compose(connectPaymentMethods, connectSaveStripeCard)(
    ({ paymentMethods, status, saveCardToken }) => (
        <div>
            <h3>Payment Methods</h3>
            <Message>
                You can add new cards to a customer by passing the SDK a token
                generated from Stripe. The button below will use the Stripe test
                token for an American Express. Note the changes in status,
                below, as the card is saved. You can save the test card multiple
                times.
            </Message>
            <button onClick={() => saveCardToken("tok_amex")}>
                Save Card Token "tok_amex"
            </button>
            <Message>
                The following is the state returned by connectPaymentMethods and
                includes all cards for a given user. When using
                connectPlaceOrder you will pass in one of these saved ids or a
                new token.
            </Message>
            <pre>{JSON.stringify({ status, paymentMethods }, null, 4)}</pre>
        </div>
    )
);
