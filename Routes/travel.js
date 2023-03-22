const express = require("express");
const { createTravel, getAllTravels, getTravel, deleteTravel, updateTravel } = require("../controllers/travel");

const router = express.Router();

router.route("/").post(createTravel).get(getAllTravels);
router.route("/:id").get(getTravel).delete(deleteTravel).put(updateTravel);
module.exports = router;
