
const isOlder = (age, limit) => {
  if (age > limit) return true;
  return false;
}

const wereBornIn = (age) => {
  return new Date().getFullYear() - age;
}

module.exports = {
  isOlder,
  wereBornIn
};