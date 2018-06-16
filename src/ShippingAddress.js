import React, { Component } from "react";
import {
    compose,
    connectShippingMethod,
    connectShippingAddress
} from "abcart-react";
import Message from "./Message";

const address = {
    country: "US",
    city: "Anytown",
    phone: "812-2342-2343",
    name: "Jenny Rosen",
    state: "MA",
    postal_code: "123456",
    line2: "2nd Floor",
    line1: "1234 Main street"
};

const address2 = {
    country: "US",
    city: "Los Angeles",
    phone: "812-2342-2343",
    name: "John Smith",
    state: "CA",
    postal_code: "52522",
    line1: "1234 Main street"
};

const address2Updated = {
    country: "US",
    city: "San Francisco",
    phone: "812-2342-2343",
    name: "John E Smith",
    state: "CA",
    postal_code: "21542",
    line1: "43 South Bend Street"
};

const ShippingMethods = compose(connectShippingMethod)(
    ({ status, chooseShippingMethod, shippingMethod, allShippingMethods }) => {
        return (
            <div>
                <h3>Choose Shipping Method</h3>
                <Message>
                    Once you have calculated shipping methods, you will be able
                    to select the desired shipping method below. The default
                    from Stripe is free shiping, so if you have not set anything
                    else up in your Stripe account that is the only option you
                    will be given.
                </Message>
                {allShippingMethods.map(shippingMethod => {
                    return (
                        <button
                            onClick={() =>
                                chooseShippingMethod(shippingMethod.id)
                            }
                        >
                            {shippingMethod.description} |{" "}
                            {shippingMethod.amount}
                        </button>
                    );
                })}
                <pre>
                    {JSON.stringify(
                        {
                            status,
                            shippingMethod,
                            allShippingMethods
                        },
                        null,
                        4
                    )}
                </pre>
            </div>
        );
    }
);

export default compose(connectShippingAddress)(
    ({
        addresses,
        selectAddress,
        selectedAddressId,
        saveNewAddress,
        updateShippingAddress,
        calculateShippingMethods,
        status
    }) => {
        return (
            <div>
                <h3>Shipping Addresses</h3>
                <Message>
                    With the following buttons you can create two new addresses
                    in an account.
                </Message>
                <button onClick={() => saveNewAddress(address, true)}>
                    Save New Address
                </button>
                <button onClick={() => saveNewAddress(address2, true)}>
                    Save Second New Address
                </button>
                <Message>
                    With the following buttons you select either the first or
                    second address (you have to add them first, above).
                </Message>
                <button
                    disabled={!addresses[0]}
                    onClick={() =>
                        addresses[0] && selectAddress(addresses[0].id)
                    }
                >
                    Select 1st Address
                </button>
                <button
                    disabled={!addresses[1]}
                    onClick={() =>
                        addresses[1] && selectAddress(addresses[1].id)
                    }
                >
                    Select 2nd Address
                </button>
                <Message>
                    With the following buttons you can update the first address
                    (you have to add it first, above).
                </Message>
                <button
                    disabled={!addresses[0]}
                    onClick={() => {
                        addresses[0] &&
                            updateShippingAddress(addresses[0].id, address2);
                    }}
                >
                    Update 1st Address1
                </button>
                <button
                    disabled={!addresses[0]}
                    onClick={() => {
                        addresses[0] &&
                            updateShippingAddress(
                                addresses[0].id,
                                address2Updated
                            );
                    }}
                >
                    Update 1st Address2
                </button>
                <Message>
                    This button will calculate the shipping / tax for a given
                    address and create a new pending order in Stripe (not yet
                    charged). You can utilize Stripe{"'"}s integrations with
                    shipping and tax providers to get real-time shipping and tax
                    quotations through this SDK. Alternatively, you can set
                    fixed amounts (in your Stripe account) or you can provide
                    Stripe with a custom webhook. The Enterprise plan from
                    abcart.io provides assistance with these custom
                    integrations.
                </Message>
                <button
                    onClick={() => {
                        calculateShippingMethods({
                            id: selectedAddressId,
                            address: addresses.find(
                                address => address.id === selectedAddressId
                            )
                        });
                    }}
                >
                    Calculate Shipping Methods (must have items in cart)
                </button>

                <pre>
                    {JSON.stringify(
                        {
                            addresses,
                            status,
                            selectedAddressId
                        },
                        null,
                        4
                    )}
                </pre>
                <ShippingMethods />
            </div>
        );
    }
);
