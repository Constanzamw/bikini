const { Admin } = require("../db");

async function getAllAdmins() {
  try {
    const admins = await Admin.findAll({
      where: { disabled: false },
      attributes: ["id", "fullName", "email", "userType"], // Agrega las columnas que deseas seleccionar
    });

    return admins;
  } catch (error) {
    throw new Error(`Error getting admins: ${error.message}`);
  }
}

module.exports = getAllAdmins;