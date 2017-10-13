const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Category = new Schema({
	parent: {
		type: Schema.Types.ObjectId,
		ref: "category",
	},
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
	},
});

// add Model methods below ...
mongoose.model("category", Category);