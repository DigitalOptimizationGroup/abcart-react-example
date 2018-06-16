import React, { Component } from "react";
import Message from "./Message";
import { connectCreateSubscription, compose } from "abcart-react";

class SubscriptionExample extends React.Component {
    componentDidMount() {
        this.handler = window.StripeCheckout.configure({
            key: process.env.REACT_APP_STRIPE_PUBLIC_TEST_KEY,
            image:
                "https://img.abcloud.io/c_scale,h_128,fl_progressive/v1496395741/wlihzipizhn2db7ivqql.png",
            locale: "auto",
            source: token => {
                console.log({
                    source: token.id,
                    plan: process.env.REACT_APP_STRIPE_SUBSCRIPTION_PLAN
                });
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                this.props.createSubscription({
                    source: token.id,
                    items: [
                        { plan: process.env.REACT_APP_STRIPE_SUBSCRIPTION_PLAN }
                    ]
                });
            }
        });
    }

    handleStripe = e => {
        e.preventDefault();
        this.handler.open({
            name: "abcart-react-example",
            description: "Test subscription with abcart.",
            zipCode: true,
            amount: 4995,
            email: "abcart-react-example@abcart.io",
            panelLabel: "Subscribe",
            allowRememberMe: false,
            zipCode: true
        });
    };

    render() {
        const { createSubscription, status, subscriptions } = this.props;

        return (
            <div>
                <a name="create-subscription" />
                <h3>Create a Subscription</h3>
                <Message>
                    See file <b>/src/CreateSubscription.js</b>.This example uses
                    Stripe Checkout (see: /public/index.html) to generate a card
                    token. You can use any Stripe test card, such as 4242 4242
                    4242 4242. This will create a customer in your Stripe
                    account, attach the payment method, and subscribe them to
                    the given plan. You must first create a plan in your Stripe
                    account, and save the plan ID in your .env file, for this to
                    be successful.
                </Message>
                <button onClick={this.handleStripe}>
                    Sign up for subscription
                </button>
                <Message>
                    The following is the state returned by subscriptions and
                    includes all subscriptions for a given user.
                </Message>
                <pre>{JSON.stringify({ status, subscriptions }, null, 4)}</pre>
            </div>
        );
    }
}

export default connectCreateSubscription(SubscriptionExample);
