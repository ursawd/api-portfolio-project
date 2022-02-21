const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
	name: String,
	description: String,
});

module.exports = mongoose.model("Bug", bugSchema);
