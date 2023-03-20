const express = require("express");
const {
  createCategory,
  getAllCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/category");

const router = express.Router();
router.route("/").post(createCategory).get(getAllCategory);
router
  .route("/:id")
  .get(getCategory)
  .delete(deleteCategory)
  .put(updateCategory);
module.exports = router;
