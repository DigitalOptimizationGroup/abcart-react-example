import React, { Component } from "react";
import Message from "./Message";
import { connectCreateSubscription, compose } from "abcart-react";

export default compose(connectCreateSubscription)(
    ({ createSubscription, status, subscriptions }) => (
        <div>
            <h3>Create a Subscription</h3>
            <Message>
                Creating a subscription can be done in one click, provided that
                you have a card token. This example uses the Stripe test cart
                "tok_visa". This will create a customer in your Stripe account,
                attach the payment method, and subscribe them to the give plan.
                You must first create a plan with id "plan_D2JfpA9LIpvO18" in
                your Stripe account for this to be successful.
            </Message>
            <button
                onClick={() =>
                    createSubscription({
                        source: "tok_visa",
                        items: [
                            {
                                plan: "plan_D2JfpA9LIpvO18"
                            }
                        ]
                    })
                }
            >
                Sign up for subscription
            </button>
            <Message>
                The following is the state returned by subscriptions and
                includes all subscriptions for a given user.
            </Message>
            <pre>{JSON.stringify({ status, subscriptions }, null, 4)}</pre>
        </div>
    )
);
