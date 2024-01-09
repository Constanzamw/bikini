const { Router } = require("express");
const createPublicationHandler = require ("../handlers/createPublicationHandler")
const getPublicationsHandler = require("../handlers/getPublicarionsHandler")
const createAdminHandler = require("../handlers/createAdminHandler")

const router = Router();
router.post("/admin", createAdminHandler)
router.post("/create", createPublicationHandler)
router.get("/publications", getPublicationsHandler)




module.exports = router;