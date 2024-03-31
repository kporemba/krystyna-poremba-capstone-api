const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT ?? 8080;
const productRouter = require("./routes/product");

//test key from stripe
const stripe = require("stripe")(
  "sk_test_51OzpmUDTuB4jIPUCOKBtbHHyTNoh1OEd7Vk6GmDVfahzgQE6c1OJsXkpQGPWNRIzNO2vTAnU20K87THBFsFyoOqi00MZJ3SZuC"
);

app.use(cors());
app.use(express.json());

app.use(express.static("public"));
app.use("/", productRouter);

//middleware
app.use((req, res, next) => {
  console.log("middleware function run");
  next();
});

//stripe payment endpoint
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(amount) * 100,
    currency: "usd",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
