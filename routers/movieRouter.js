// Framework Express
const express = require("express");

// Controller 
const controller = require("../controllers/controller.js");

// Server
const router = express.Router();

// Index
router.get("/", controller.index)

// Show
router.get("/:id", controller.show)

// Store
router.post("/:id/review", controller.store)

// Esportare il modulo
module.exports = router;