const pageNotFoundController = require("../controllers/page-not-found");
const express = require("express");

const router = express.Router();

router.use("/", pageNotFoundController.getPageNotFoundPage);

module.exports = router;
