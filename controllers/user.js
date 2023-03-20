const User = require("../Model/User");
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ message: "Hereglgchin medeelel oldloo", users });
  } catch (err) {
    res.status(400).json({ message: "Aldaa garlaa" });
  }
};
const getUser = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      message: `${id} herlegchin medeelel oldsongui`,
      err: err.message,
    });
  }
  try {
    const user = await User.findById(id);
    res.status(200).json({ message: "user medeelel ilgeegdlee", user });
  } catch (err) {
    res.status(400).json({
      message: `${id} herlegchin medeelel oldsongui`,
      err: err.message,
    });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ message: "Ner , email, password bhgui bna" });
  }
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({ message: "SUCCESS", user });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Ner , email, password bhgui bna", err: err.message });
  }
};

const deleteUser = async (req, res) => {
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
    res.status(400).json({
      message: `Aldaa`,
      err: err.message,
    });
  }
};
const updateUser = async (req, res) => {
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
    res.status(400).json({
      message: `Aldaa`,
      err: err.message,
    });
  }
};

module.exports = { createUser, getAllUsers, getUser, deleteUser, updateUser };
