const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	establishment: {
		type: Schema.Types.ObjectId,
		ref: "establishment",
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: "category",
	},
	name: {
		type: String,
	},
	price: {
		type: Number,
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
ProductSchema.statics.findEstablishment = function findEstablishment(id) {
	return this.findById(id)
		.populate("establishment")
		.then(product => product.establishment);
};
// add Model methods below ...
mongoose.model("product", ProductSchema);