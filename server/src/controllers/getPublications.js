const { Publication } = require("../db");

async function getPublications() {
  const publications = Publication.findAll({ where: { disabled: false } });

  return publications;
}

module.exports = getPublications;
