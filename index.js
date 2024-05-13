const express = require('express');
const paymentRoutes = require('./routes/payments');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/payments', paymentRoutes);

app.get('/', (req, res) => {
  res.send('<h2>FakeEcommerce Stripe</h2>');
});

app.listen(PORT, () => {
  console.log('API is listening on port', PORT);
});
