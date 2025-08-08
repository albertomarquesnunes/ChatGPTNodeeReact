const express = require("express");
const promptController = require("../controllers/prompt-controller");

const router = express.Router();

router.post("prompt", promptController.sendText);

module.exports = router;