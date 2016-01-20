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
