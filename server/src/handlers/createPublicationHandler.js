const createPublication = require("../controllers/createPublication");

const createPublicationHandler = async (req, res) => {
  const { adminId, name, description, image, price, cat, size } = req.body;
  try {
    await createPublication(adminId, name, description, image, price, cat, size);
    res.status(201).json({ message: "Publicación creada con éxito" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createPublicationHandler;