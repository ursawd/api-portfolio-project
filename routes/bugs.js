const express = require("express");
const router = express.Router();
const Bug = require("../models/bug");

//Route endpoints for bugs

//-------------------------------
//Get all
router.get("/", async (req, res) => {
	try {
		const bugs = await Bug.find();
		res.json(bugs);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//-------------------------------
//Get one
router.get("/:id", getBug, (req, res) => {
	res.json(res.bug);
});

//-------------------------------
//Create one
router.post("/", async (req, res) => {
	const bug = new Bug({
		name: req.body.name,
		description: req.body.description,
	});
	try {
		const newBug = await bug.save();
		res.status(201).json(newBug);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//-------------------------------
//Update one w/ partial updates
// router.patch("/:id", getBug, async (req, res) => {
// 	if (req.body.name != null) {
// 		res.bug.name = req.body.name;
// 	}
// 	if (req.body.description != null) {
// 		res.bug.description = req.body.description;
// 	}
// 	try {
// 		const updated = await res.bug.save();
// 		res.json(updated);
// 	} catch (err) {
// 		res.status(400).json({ message: err.message });
// 	}
// });

//-------------------------------
//Update one by replacement
router.put("/:id", async (req, res) => {
	try {
		const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.json(updated);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
});

//-------------------------------
//Delete one
router.delete("/:id", getBug, async (req, res) => {
	try {
		await res.bug.remove();
		res.json({ message: "Deleted" });
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

//=======================Middleware===========================
async function getBug(req, res, next) {
	//middleware to add found bug to response object
	let bug;
	try {
		bug = await Bug.findById(req.params.id);
		if (bug == null) {
			return res.status(404).json({ message: "Not found" });
		}
	} catch (err) {
		return res.status(500).json({ message: err.message });
	}
	//add to response object...
	res.bug = bug;
	next();
}
//=============================================================
module.exports = router;
