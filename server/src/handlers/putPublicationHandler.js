const putPublication = require("../controllers/putPublication")

const putPublicationHandler = async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const { title } = req.body;
  try {
    const putPublication = await putPublication(id,description,title);
    res.status(200).json(putPublication);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putPublicationHandler;
