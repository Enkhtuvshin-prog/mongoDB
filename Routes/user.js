const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  login,
} = require("../controllers/user");

const router = express.Router();
router.route("/login").post(login);
router.route("/").post(createUser).get(getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
