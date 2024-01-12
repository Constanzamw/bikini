const putPublication = require("../controllers/putPublication")

const putPublicationHandler = async (req, res) => {
  const { id } = req.params;
  
  const { name } = req.body;
  const { description } = req.body;
  const { price } = req.body;

  try {
    const updatePublication = await putPublication(id, name, description, price);
    res.status(200).json(updatePublication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putPublicationHandler;
