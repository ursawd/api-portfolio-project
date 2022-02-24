const express = require("express");
const router = express.Router();
const Bug = require("../models/bug");

//Get all
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
