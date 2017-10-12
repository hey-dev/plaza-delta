const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AttendantSchema = new Schema({
	fullName: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	phone: {
		type: String,
	},
	document: {
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

mongoose.model("attendant", AttendantSchema);