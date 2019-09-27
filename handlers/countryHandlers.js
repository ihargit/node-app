const { whichCountry } = require('../utils/locationFunctions');
const { countriesAndCities } = require('../const/countriesAndCities');

const handleWhichCountry = (req, res) => {
  const { city } = req.body;
  let country = whichCountry(countriesAndCities, city);
  if (country === undefined) {
    res
      .status(404)
      .send(
        'Sorry, we cannot find such country! Please, add new country. Use API /addNewCountry.'
      );
  } else {
    res.json({
      Country: country
    });
  }
};

const handleAddCountry = (req, res) => {
  if (!countriesAndCities[req.body.country]) {
    countriesAndCities[req.body.country] = [req.body.city];
  } else {
    countriesAndCities[req.body.country].push(req.body.city);
  }
  res.status(200).send('Info was added. Thank you!');
};

module.exports = {
  handleWhichCountry,
  handleAddCountry
};
