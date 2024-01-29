const getPublications = require("../controllers/getPublications");

const getPublicationsHandler = async (req, res) => {
  try {
    const publications = await getPublications();
    
    if (publications.length > 0) {
      res.status(200).json(publications);
    } else {
      res.status(404).json({ message: "Publications not found" });
    }
  } catch (error) {
    console.error("Error in getPublicationsHandler:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = getPublicationsHandler;