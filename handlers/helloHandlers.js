const { isOlder, wereBornIn } = require('../utils/ageFunctions');

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

module.exports = {
  handleHello
};
