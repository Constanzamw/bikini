const getAllAdmins = require("../controllers/getAdmin");

const getAdminsHandler = async (req, res) => {
  try {
    const admins = await getAllAdmins();

    if (admins.length > 0) {
      return res.status(200).json(admins);
    } else {
      res.status(404).json({ message: "No admins found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAdminsHandler;