const { Publication } = require("../db");

const putPublication = async (id,name,description,price) => {
  const publicationFound = await Publication.findByPk(id);
  if (publicationFound) {
    await Publication.update(
        {
            name: name,
            description: description,
            price:price
          },
      { where: { id: id } }
    );
    return "Publication updated successfully";
  } else {
    return "Not found"
  }
};

module.exports = putPublication;