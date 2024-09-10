const express = require("express")
const router = express.Router()

const pet_controller = require("../controllers/pet_controller.js")

router.post("/", pet_controller.store)
router.get("/"), pet_controller