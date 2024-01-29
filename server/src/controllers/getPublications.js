const { Publication, ModelGroup, sequelize } = require("../db");


const getPublications = async () => {
  try {
    const groupedPublications = await ModelGroup.findAll({
      attributes: ['name'],
      include: [
        {
          model: Publication,
          attributes: ['id', 'name', 'description', 'price', 'image', 'cat', 'size', 'disabled', 'AdminId'],
        },
      ],
    })

    const formattedData = groupedPublications.map((group) => {
      const publications = group.Publications.map((pub) => {
        return {
          id: pub.id,
          name: pub.name,
          description: pub.description,
          price: pub.price,
          image: pub.image,
          cat: pub.cat,
          size: pub.size,
          disabled: pub.disabled,
          AdminId: pub.AdminId,
        };
      });

      const sizes = Array.from(new Set(publications.map((pub) => pub.size)));

      return {
        name: group.name,
        publications,
        sizes,
      };
    });

    return formattedData;
  } catch (error) {
    console.error("Error getting grouped publications:", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = getPublications;
