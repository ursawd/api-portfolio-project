const express = require("express");
const router = express.Router();
const Bug = require("../models/bug");

//Search
//For nested documents, the http.get query string should use object property dot
//notation for each level of nesting...localhost:3000/search?where.platform=AMD
// "where": {
//   "platform": "AMD",
//   "o_s": "WIN10",
//   "browser": "Safari"
// },

router.get("/", async (req, res) => {
	filter = req.query;
	console.log(req.query);
	try {
		const bugs = await Bug.find(filter);
		res.json(bugs);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

module.exports = router;
