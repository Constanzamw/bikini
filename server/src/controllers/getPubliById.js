const { Publication } = require("../db");

const getPubliById = async (id) => {
  const publication = await Publication.findByPk(id);

  return publication;
};

module.exports = getPubliById;