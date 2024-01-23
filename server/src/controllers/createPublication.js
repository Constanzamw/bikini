const { Publication, Admin } = require("../db");

const createPublication = async (adminId, name, description, image, price, cat, size) => {
  try {
    // Verifica si el admin existe antes de proceder
    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      throw new Error("Admin not found");
    }

    const publication = await Publication.create({
      name,
      description,
      price,
      image,
      cat,
      size
    })

    // Asociar la publicación al admin
    await admin.addPublication(publication);

    return "Publicación creada con éxito";
  } catch (error) {
    throw new Error(`Error creating publication: ${error.message}`);
  }
};

module.exports = createPublication;