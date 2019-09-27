const whichCountry = (countriesAndCities, city) => {
  for (country in countriesAndCities) {
    if (countriesAndCities[country].includes(city)) return country;
  }
};

module.exports = {
  whichCountry
};
