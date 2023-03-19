const express = require("express");
const { createUser, getAllUsers, getUser, deleteUser, updateUser } = require("../controllers/user");

const router = express.Router();

router.route("/").post(createUser).get(getAllUsers)
router.get("/:id", getUser);
router.delete("/", deleteUser );
router.put("/", updateUser );
module.exports = router;
