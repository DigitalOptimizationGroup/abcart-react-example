const jwttoken = require("jsonwebtoken");

require("dotenv").config();

const token = jwttoken.sign(
    {
        appId: process.env.REACT_APP_ABCART_APP_ID,
        // an anonymous user id
        userId: "user_id_001",
        // your authenticated user's id
        loggedInUserId: "logged_in_user_id_001",
        email: "example_user_001@example.com",

        // this assures that test mode is used for Stripe
        test: true
    },
    process.env.ABCART_SECRET,
    { issuer: process.env.REACT_APP_ABCART_APP_ID }
);

const token1 = jwttoken.sign(
    {
        appId: process.env.REACT_APP_ABCART_APP_ID,
        userId: "user_id_001",

        // this assures that test mode is used for Stripe
        test: true
    },
    process.env.ABCART_SECRET,
    { issuer: process.env.REACT_APP_ABCART_APP_ID }
);

console.log("------------ ANONYMOUS USER -------------");
console.log(token1);

console.log("------------ LOGGED IN USER -------------");
console.log(token);
