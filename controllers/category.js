const Category = require("../Model/category.js");
const getAllCategory = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ message: "category medeelel oldloo", categories });
  } catch (err) {
    next(err);
    // res.status(400).json({ message: "Aldaa garlaa" });
  }
};
const getCategory = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({
      message: `${id} category medeelel oldsongui`,
      err: err.message,
    });
  }
  try {
    const category = await Category.findById(id);
    res.status(200).json({ message: "user medeelel ilgeegdlee", category });
  } catch (err) {
    next(err);

    // res.status(400).json({
    //   message: `${id} herlegchin medeelel oldsongui`,
    //   err: err.message,
    // });
  }
};

const createCategory = async (req, res, next) => {
  const { title, description, categoryImg } = req.body;
  if (!title || !description || !categoryImg) {
    res
      .status(400)
      .json({ message: "title, description, categoryImg bhgui bna" });
  }
  try {
    const category = await Category.create({
      title,
      description,
      categoryImg,
    });
    res.status(201).json({ message: "SUCCESS", category });
  } catch (err) {
    next(err);

    // res.status(400).json({
    //   message: "aldaa",
    //   err: err.message,
    // });
  }
};

const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} herlegchin medeelel oldsngui`,
      err: err.message,
    });
  }
  try {
    const category = await Category.findByIdAndDelete(id);
    res.status(200).json({ message: "Medeelel ustgagdlaa", category });
  } catch (err) {
    next(err);

    // res.status(400).json({
    //   message: `Aldaa`,
    //   err: err.message,
    // });
  }
};
const updateCategory = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} category medeelel shinechlgdlee`,
      err: err.message,
    });
  }
  try {
    const category = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ message: "Medeelel shinechlgdlee", category });
  } catch (err) {
    next(err);

    // res.status(400).json({
    //   message: `Aldaa`,
    //   err: err.message,
    // });
  }
};
module.exports = {
  createCategory,
  getAllCategory,
  getCategory,
  updateCategory,
  deleteCategory,
};
