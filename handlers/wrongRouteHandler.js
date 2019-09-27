const handleWrongRoute = (req, res) => {
  res.status(400).json({ msg: `No such route: ${req.url}` });
};

module.exports = {
  handleWrongRoute
};
