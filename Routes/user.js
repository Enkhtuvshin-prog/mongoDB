const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  login,
  register,
} = require("../controllers/user");

const checkRole = require("../utils/checkRole");
const router = express.Router();
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/").post(checkRole, createUser).get(checkRole, getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;
