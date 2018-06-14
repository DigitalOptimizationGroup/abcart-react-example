import React, { Component } from "react";
import "./App.css";
import {
    connectDeleteStripeCard,
    connectPaymentMethods,
    connectPlaceOrder,
    AbcartProvider,
    connectSaveStripeCard,
    connectOrders,
    connectSaveForm,
    compose
} from "abcart-react";
import Message from "./Message";
import ShippingAddress from "./ShippingAddress";
import Items from "./Items";
import Orders from "./Orders";
import CreateSubscription from "./CreateSubscription";
import PaymentMethods from "./PaymentMethods";

class App extends Component {
    render() {
        return (
            <AbcartProvider
                appId={process.env.REACT_APP_ABCART_APP_ID}
                apikey={process.env.REACT_APP_ABCART_API_KEY}
                token={process.env.REACT_APP_TOKEN}
            >
                <div className="App">
                    <h1>abcart-react example application</h1>
                    <Message>
                        <b>See the README.md for full instructions.</b>
                        This example is useful to quickly start testing out this
                        library{"'"}s Higher Order Components and to allow for a
                        view into the state returned by the application as it
                        progresses with use. You will also immediately begin
                        working with your own Stripe account.
                        <br />
                        <br />
                        To use this application you must first create an account
                        at <a href="https://www.abcart.io">abcart.io</a>. This
                        application requires your apikeys. It also requires you
                        to connect a Stripe account to abcart. All orders will
                        be created in the TEST versions of your connected Stripe
                        account.
                        <br />
                        <br />
                        You can find an example of subscriptions at the bottom
                        of this page.
                    </Message>
                    <Items />
                    <ShippingAddress />
                    <PaymentMethods />
                    <Orders />
                    <CreateSubscription />
                </div>
            </AbcartProvider>
        );
    }
}

export default App;
