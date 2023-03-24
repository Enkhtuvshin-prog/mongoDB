const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    const hashedPassword = bcrypt.hashSync(password, 10);
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
  // const { email, password } = req.body;
  console.log(req.body, "--");
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    console.log("user==", user);
    if (!user) {
      res.status(400).json({ message: `email, password buruu bna`, user });
    }
    const checkPass = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPass) {
      res.status(400).json({ message: `email, password buruu bna`, user });
    }
    const { _id, name, email, role } = user;
    const token = jwt.sign(
      { _id, name, email, role },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: 36000,
      }
    );
    res.status(200).json({ message: `Amjilttai newterlee `, user, token });
  } catch (err) {
    next(err);
  }
};

const register = async (req, res, next) => {
  const { name, email, password, phone } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
    });
    res.status(200).json({ message: `Amjilttai newterlee `, user });
  } catch (err) {
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
  register,
};
