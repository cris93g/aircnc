require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
const port = process.env.port || 3001;
const mongoose = require("mongoose");

const db = process.env.mongoURI;
mongoose
	.connect(db)
	.then(() => console.log("we found it, the rainbow connection!"))
	.catch(err => console.log(err));
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
