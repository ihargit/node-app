const express = require('express');
const bodyParser = require('body-parser');
const { handleHello } = require('./handlers/helloHandlers');
const {
  handleWhichCountry,
  handleAddCountry
} = require('./handlers/countryHandlers');
const { handleWrongRoute } = require('./handlers/wrongRouteHandler');

const app = express();

app.use(bodyParser.json());

app.post('/sayHello', handleHello);
app.post('/whichCountry', handleWhichCountry);
app.post('/addNewCountry', handleAddCountry);
app.all('*', handleWrongRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
  console.log('server running on port 4000');
});
