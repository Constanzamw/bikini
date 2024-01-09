const createPublication = require("../controllers/createPublication");

const createPublicationHandler = async (req, res) => {
  const { adminId, name, description, image } = req.body;
  try {
    const newPublication = await createPublication(
        adminId,
        name,
      description,
      image
    );
    res.status(201).json(newPublication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createPublicationHandler;