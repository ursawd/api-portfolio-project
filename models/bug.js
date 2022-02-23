const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
	summary: String,
	status: {
		submitter_name: String,
		date_reported: Date,
		open: Boolean,
	},
	where: {
		platform: String,
		o_s: String,
		browser: String,
	},
	problem: {
		expected_result: String,
		actual_result: String,
		steps_to_reproduce: String,
	},
	action: {
		severity: String,
		assigned_to: String,
		priority: String,
		actions_taken: String,
	},
});

module.exports = mongoose.model("Bug", bugSchema);
