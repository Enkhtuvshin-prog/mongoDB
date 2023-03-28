const jwt = require("jsonwebtoken");

const checkRole = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).json({ message: "Token явуулаагүй байна." });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
  if (user.role !== "Admin") {
    res.status(400).json({ message: "Энэ үйлдлийг хийх эрх хүрэхгүй байна." });
  }
  next();
  console.log("admin mon");
};

const authorization = (...roles)=>{
  return (req, res, next) =>{
    if(!req.headers.authorization){
      res.status(400).json({message: "Token явуулаагүй байна"})
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "Энэ token хүчингүй байна.." });
    }
    if(!roles.includes(user.role)){
      res.status(400).json({
        message:  `${user.role} - Энэ үйлдлийг хийх эрх хүрэхгүй байна.`
      })
    }
    next();
  }
}
module.exports = {checkRole, authorization};
