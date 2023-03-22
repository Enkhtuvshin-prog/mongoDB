const express = require("express");
require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
// const multer = require("multer");
const upload = require("./middlewares/upload");
const cloudinary = require("./utils/cloudinary");
const error = require("./middlewares/error");

// const upload = multer({ dest: "uploads/" });
const PORT = process.env.PORT;

const connectDB = require("./config/mongoDb.js");
const logger = require("./Logger");
const userRoutes = require("./Routes/user");
const categoryRoutes = require("./Routes/category");
const travelRoutes = require("./Routes/travel");
//instance of express
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/uploads", express.static("uploads"));
// const DATABASE_URI = process.env.DATABASE_URI;
app.use("/users", userRoutes);
app.use("/category", categoryRoutes);
app.use("/travel", travelRoutes);
app.get("/", async (req, res) => {
  res.json({ message: "Hello Pinecone" });
});

app.post("/upload", upload.single("image"), async (req, res) => {
  console.log("REQ", req.file);
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.status(200).json({
      message: "SUCCESS",
      imgUrl: result.secure_url,
    });
  } catch (err) {
    console.log("ER--------", err);
  }
});

app.use(error);
connectDB();
app.listen(PORT, () => {
  console.log(`Server ${PORT} aslaa`.gray);
});
