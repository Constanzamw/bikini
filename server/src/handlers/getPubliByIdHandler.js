const getPubliById = require("../controllers/getPubliById");

const getPubliByIdHandler = async (req, res) => {
    const { id } = req.params;
  try {
    const publi = await getPubliById(id);
    if (publi) {
      return res.status(200).json(publi);
    } else {
      res.status(404).json({ message: "Publication not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPubliByIdHandler;