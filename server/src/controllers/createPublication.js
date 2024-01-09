const { Publication, Admin } = require("../db");

const createPublication = async (adminId, name, description, image) => {
  const publication = await Publication.create({
    name,
    description,
    image,
  });

  const admin = await Admin.findByPk(adminId);
  admin.addPublication(publication);

  return "Publicación creada con éxito";
};

module.exports = createPublication;