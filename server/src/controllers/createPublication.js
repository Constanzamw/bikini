// controllers/createPublication.js
const { Publication, Admin, ModelGroup } = require("../db");

const createPublication = async (adminId, name, description, image, price, cat, size) => {
  try {
    // Verifica si el admin existe antes de proceder
    const admin = await Admin.findByPk(adminId);
    if (!admin) {
      throw new Error("Admin not found");
    }

    // Verifica si el grupo del modelo existe, si no existe, créalo
    let modelGroup = await ModelGroup.findOne({ where: { name } });
    if (!modelGroup) {
      modelGroup = await ModelGroup.create({ name });
    }

    // Crea la publicación y la asocia al grupo del modelo
    const publication = await Publication.create({
      name,
      description,
      price,
      image,
      cat,
      size
    });

    await modelGroup.addPublication(publication);

    return "Publicación creada con éxito";
  } catch (error) {
    throw new Error(`Error creating publication: ${error.message}`);
  }
}

module.exports = createPublication;