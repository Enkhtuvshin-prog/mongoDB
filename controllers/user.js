const User = require("../Model/User");
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.status(200).json({ message: "Hereglgchin medeelel oldsngui", users });
    }
    res.status(200).json({ message: "Hereglgchin medeelel oldloo", users });
  } catch (err) {
    next(err);
    // res.status(400).json({ message: "Aldaa garlaa" });
  }
};
const getUser = async (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json({
      message: `${id} herlegchin medeelel oldsongui`,
      err: err.message,
    });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: "user medeelel oldsngui", user });
    }
    res.status(200).json({ message: "user medeelel ilgeegdlee", user });
  } catch (err) {
    next(err);
    // res.status(400).json({
    //   message: `${id} herlegchin medeelel oldsongui`,
    //   err: err.message,
    // });
  }
};

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      res.status(400).json({ message: "Ner , email, password bhgui bna" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({ message: "SUCCESS", user });
  } catch (err) {
    next(err);
    // res
    //   .status(400)
    //   .json({ message: "Ner , email, password bhgui bna", err: err.message });
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} herlegchin medeelel oldsngui`,
      err: err.message,
    });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Medeelel ustgagdlaa", user });
  } catch (err) {
    next(err);
    // res.status(400).json({
    //   message: `Aldaa`,
    //   err: err.message,
    // });
  }
};
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} herlegchin medeelel shinechlgdlee`,
      err: err.message,
    });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "Medeelel shinechlgdlee", user });
  } catch (err) {
    next(err);
    // res.status(400).json({
    //   message: `Aldaa`,
    //   err: err.message,
    // });
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.find({ email, password });
  try {
    if (!user.length) {
      res.status(400).json({ message: `email, password buruu bna`, user });
      return;
    }
    res.status(200).json({ message: `Amjilttai newterlee `, user });
  } catch {
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  login,
};
