const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
	summary: {
		type: String,
		required: true,
	},
	info: {
		submitter_name: String,
		date_reported: Date, //mm/dd/yyyy
		open: Boolean, //Bug report open or closed
	},
	where: {
		platform: {
			type: String,
			enum: ["Windows", "Apple", "Linix"],
		},
		o_s: String, //Operating system
		browser: {
			type: String,
			enum: ["Chrome", "Edge", "Safari", "Other"],
		},
	},
	problem: {
		expected_result: String,
		actual_result: String,
		steps_to_reproduce: String,
	},
	action: {
		severity: {
			type: String,
			enum: ["Low", "Minor", "Major", "Critical", "Blocker"],
		},
		assigned_to: String,
		priority: {
			type: String,
			enum: ["Low", "Medium", "High"],
		},
		actions_taken: String,
	},
});

module.exports = mongoose.model("Bug", bugSchema);
