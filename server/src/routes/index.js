const { Router } = require("express");
const createPublicationHandler = require ("../handlers/createPublicationHandler")
const getPublicationsHandler = require("../handlers/getPublicarionsHandler")
const createAdminHandler = require("../handlers/createAdminHandler")
const deletedPublicationHandler = require("../handlers/deletePublicationHandler")
const getAdminHandler = require("../handlers/getAdminHandler")
const putPublicationHandler = require("../handlers/putPublicationHandler")
const getPubliByIdHandler = require("../handlers/getPubliByIdHandler");
const getCustomersHandler = require("../handlers/CustomerHandlers/getCustomersHandler");
const getCustomerById = require("../controllers/customerControllers/getCustomerById");
const createCustomerHandler = require("../handlers/CustomerHandlers/createCustomerHandler");
const putCustomerHandler = require("../handlers/CustomerHandlers/updateCustomerHandler");
const deleteCustomerHandler = require("../handlers/CustomerHandlers/deleteCustomerHandler");
const loginHandler = require("../handlers/loginHandler/loginHandler");


const router = Router();

router.post("/admin", createAdminHandler)
router.get("/admins", getAdminHandler)

router.post("/auth", loginHandler)

router.post("/publications", createPublicationHandler)
router.get("/publications", getPublicationsHandler)
router.get("/publications/:id", getPubliByIdHandler)
router.put("/update/:id", putPublicationHandler)
router.delete("/publications/:id", deletedPublicationHandler)

router.post("/customers", createCustomerHandler)
router.get("/customers", getCustomersHandler)
router.get("customers/:id", getCustomerById)
router.put("/customers/:id", putCustomerHandler)
router.delete("/customers/:id", deleteCustomerHandler)




module.exports = router;