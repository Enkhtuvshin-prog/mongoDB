const User = require("../Model/User");
const getAllUsers = async(req, res) => {
  const result = await User.find();
 
  // console.log("object===", result);
  res.json({data: result});
};
const getUser = async(req, res) => {
  const result = await User.find({id: req.params.id}, null);
  res.json({data: result});
};

const createUser = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  res.status(201).json({ message: "SUCCESS", user });
};

const deleteUser = async(req, res) => {
  const result = await User.deleteOne({ name: `${req.body.name}` });
  res.json({data: result});
};
const updateUser = async(req, res) => {
  const result = await User.findOneAndUpdate({ name: `${req.body.name}` }, {$set: {name: `${req.body.newName}`}} );
  res.json({data: result});
}


module.exports = { createUser, getAllUsers, getUser, deleteUser, updateUser  };
