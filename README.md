### abcart react example

This is a developer focused example application utilizing `abcart-react` and the abcart.io service with Stripe integration. It requires an account at abcart.io.

In a production setting, when working with the `abcart-react` sdk, you will need to create a JSON web token for each of your users. This token will need to be created in a secure environment. For this example app, that is working in Stripe test mode, you can use the `create-token.js` script, as detailed below.

#### Quick Start

```
git clone https://github.com/abcloudio/abcart-react-example.git
cd abcart-react-example
npm install
```

Before using this application you will need to add a test product and test subscription to your Stripe test account.

Add a "shippable" product with the sku: `sku_abc`, any price is fine.

Add a subscription with the plan id of `plan_D2JfpA9LIpvO18`.

1.  Sign-up for an account at abcart.io. You can create a free account that will only be charged if you make actual production charges.
2.  Connect your own Stripe account, following the instructions within your dashboard at abcart.io/dashboard.
3.  Copy your api keys from your dashboard to a `.env` file in this application's root. See the example below.
4.  Create a token by running the `create-token.js` script in the root of this application: `node create-token.js`. Copy the created token into your `.env` file. Depending on what you would like to test, you can copy either the `ANONYMOUS USER` token or the `LOGGED IN USER` token.
5.  Run the application with `npm run start`. View the application on `localhost:3000`.
6.  The application will show a number of buttons to demonstrate functionality and will expose the application state directly in JSON for your inspection.

Example `.env` file

```
# abcart application id
REACT_APP_ABCART_APP_ID=your-app-id

# abcart apikey
REACT_APP_ABCART_API_KEY=your-api-key

# abcart secret, DO NOT add REACT_APP in front of this key as that will
# expose your secret. This key is an admin only secret key. Do not expose it.
# If it is accidentally exposed you should immediately regenerate it in your dashboard
ABCART_SECRET=your-secret-key

# token for a logged in user, in production app this needs to be created for each user
# and you need to manage the authentication of your users
REACT_APP_TOKEN=a-token-created-by-running-create-token.js
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
