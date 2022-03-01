require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT;

//DATABASE_URL in .env file from Mongodb Atlas connect string
mongoose
	.connect(process.env.DATABASE_URL)
	.then(() => console.log("Connect promise resolved"))
	.catch(err => console.error("Database Connection Error"));

const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(cors());
app.use(express.json());

const bugRouter = require("./routes/bugs");
app.use("/bugs", bugRouter);
const searchRouter = require("./routes/search");
app.use("/search", searchRouter);

app.listen(PORT, () => console.log("Server started on port 3000"));
