const express = require('express');
const bodyParser = require('body-parser');
const { isOlder, wereBornIn } = require('./utils/ageFunctions');
const { countriesAndCities } = require('./const/countriesAndCities');
const { whichCountry } = require('./utils/locationFunctions');

const app = express();

const handleHello = (req, res) => {
  const { age, name, surname } = req.body;
  // console.log(`${req.method} -- ${JSON.stringify(req.body)} -- ${new Date()}`);
  console.log(`${surname} ${name}`);
  res.json({
    Message: `Hi, ${name}. Looks like you are ${
      isOlder(age, 30) ? 'older' : 'younger'
    } 30. You were born in ${wereBornIn(age)}`,
    Surname: surname
  });
};

const handleWhichCountry = (req, res) => {
  const { city } = req.body;
  let country = whichCountry(countriesAndCities, city);
  if (country === undefined) {
    res
      .status(404)
      .send(
        'Sorry, we cannot find such country! Please, add new country. Use API /addNewCountry.'
      );
  }
  res.json({
    Country: country
  });
};

const handleAddCountry = (req, res) => {
  if (!countriesAndCities[req.body.country]) {
    countriesAndCities[req.body.country] = [req.body.city];
  } else {
    countriesAndCities[req.body.country].push(req.body.city);
  }
  res.status(200).send('Info was added. Thank you!');
};

const handleWrongRoute = (req, res) => {
  res.status(400).json({ msg: `No such route: ${req.url}` });
};

app.use(bodyParser.json());

app.post('/sayHello', handleHello);
app.post('/whichCountry', handleWhichCountry);
app.post('/addNewCountry', handleAddCountry);
app.all('*', handleWrongRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (req, res) => {
  console.log('server running on port 4000');
});
