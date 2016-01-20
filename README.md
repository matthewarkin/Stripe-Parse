# A Stripe Library for Parse

Parse Cloud Code's Stripe Library seems to have been adandoned. It is hard coded to a 2011 version of the Stripe API and has not been updated for any new release.

This version should work on any version of the Stripe API and is based on Stripe-Node v4.2.0

Usage should be fairly simple:

````javascript
var stripe = require("cloud/stripe.js")("API Key")

Parse.Cloud.define("hello", function(request, response) {
    stripe.charges.create({
            amount: 400,
            currency: "usd",
            source: token.id, // obtained with Stripe.js
            description: "Charge for test@example.com"
        }, 
        function(error, charge){
            if(error) return response.error(error);
            response.success(JSON.stringify(charge));
        }
     );  
});

````

As this is based on Stripe-Node any of the Node API calls from the [Stripe API Docs](https://stripe.com/docs/api) should work.

## Installation
To use: Just copy `stripe.js` into the cloud folder of your Cloud Code Project. Then just `require("cloud/stripe.js")("API KEY")` as in the example above.