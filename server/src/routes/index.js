const { Router } = require("express");
const createPublicationHandler = require ("../handlers/createPublicationHandler")
const getPublicationsHandler = require("../handlers/getPublicarionsHandler")
const createAdminHandler = require("../handlers/createAdminHandler")
const deletedPublicationHandler = require("../handlers/deletePublicationHandler")
const getAdminHandler = require("../handlers/getAdminHandler")
const putPublicationHandler = require("../handlers/putPublicationHandler")
const getPubliByIdHandler = require("../handlers/getPubliByIdHandler")

const router = Router();

router.post("/admin", createAdminHandler)
router.get("/allAdmin", getAdminHandler)
router.post("/publications", createPublicationHandler)
router.get("/publications", getPublicationsHandler)
router.get("/publications/:id", getPubliByIdHandler)
router.put("/update/:id", putPublicationHandler)
router.delete("/publications/:id", deletedPublicationHandler)



module.exports = router;