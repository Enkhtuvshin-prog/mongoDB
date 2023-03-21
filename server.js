const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
// const multer = require("multer");
const upload = require("./uploads/upload");
dotenv.config();

// const upload = multer({ dest: "uploads/" });
const PORT = process.env.PORT;

const connectDB = require("./config/mongoDb.js");
const logger = require("./Logger");
const userRoutes = require("./Routes/user");
const categoryRoutes = require("./Routes/category");
//instance of express
const app = express();
//middlewares
app.use(express.json());
app.use(logger);
app.use("/uploads", express.static("uploads"));
// const DATABASE_URI = process.env.DATABASE_URI;
app.use("/users", userRoutes);
app.use("/category", categoryRoutes);
app.get("/", async (req, res) => {
  res.json({ message: "Hello Pinecone" });
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log("REQ", req.file);
  res.status(200).json({ message: "SUCCESS", 
  imgUrl: `${req.protocol}://${req.hostname}:${PORT}/${req.file.path}` });
});
connectDB();
app.listen(PORT, () => {
  console.log(`Server ${PORT} aslaa`.gray);
});
