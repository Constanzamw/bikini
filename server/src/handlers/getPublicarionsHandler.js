const getPublications = require("../controllers/getPublications");

const getPublicationsHandler = async (req, res) => {
  try {
    const publications = await getPublications();
    if (publications.length > 0) {
      return res.status(200).json(publications);
    } else {
      res.status(404).json({ message: "Publications not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getPublicationsHandler;