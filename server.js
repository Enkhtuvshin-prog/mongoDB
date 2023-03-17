const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
dotenv.config();
const PORT = process.env.PORT;

const connectDB = require("./config/mongoDb.js");
const logger = require("./Logger");
const userRoutes = require("./Routes/user");
const app = express();
//middlewares
app.use(express.json());
app.use(logger);
// const DATABASE_URI = process.env.DATABASE_URI;
app.use("/user", userRoutes);
app.get("/", async (req, res) => {
  res.json({ message: "Hello Pinecone" });
});
connectDB();
app.listen(PORT, () => {
  console.log(`Server ${PORT} aslaa`.gray);
});
