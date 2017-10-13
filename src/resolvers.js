const mongoose = require("mongoose");

const Account = mongoose.model("account");
const Attendant = mongoose.model("attendant");
const Establishment = mongoose.model("establishment");
const Feedback = mongoose.model("feedback");
const Order = mongoose.model("order");
const Product = mongoose.model("product");
const ShoppingCart = mongoose.model("shoppingCart");
const User = mongoose.model("user");
const Location = mongoose.model("location");
const WorkingHour = mongoose.model("workingHour");
const Category = mongoose.model("category");

const resolvers = {
	Query: {
		user: (parentValue, {
			id
		}) => User.findById(id),
		users: () => User.find({}),
		workingHour: (parentValue, {
			id
		}) => WorkingHour.findById(id),
		workingHours: () => WorkingHour.find({}),
		location: (parentValue, {
			id
		}) => Location.findById(id),
		locations: () => Location.find({}),
		order: (parentValue, {
			id
		}) => Order.findById(id),
		orders: () => Order.find({}),
		category: (parentValue, {
			id
		}) => Category.findById(id),
		categories: () => Category.find({}),
		products: () => Product.find({}),
		product: (parentValue, {
			id
		}) => Product.findById(id),
		establishment: (parentValue, {
			id
		}) => Establishment.findById(id),
		establishments: () => Establishment.find({}),
		feedback: (parentValue, {
			id
		}) => Feedback.findById(id),
	},
	User: {
		account(user) {
			return User.findAccount(user._id); 
		},
		orders(user) {
			return Order.find({
				user: user.id,
			}, {
				name: 1,
				description: 1,
				total: 1,
				createdAt: 1,
			}).sort({
				createdAt: -1
			}).limit(5); 
		},
	},
	Category: {
		products(category) {
			return Product.find({
				category: category.id,
			}); 
		},
	},
	Establishment: {
		attendant(establishment) {
			return Establishment.findAttendant(establishment.id);
		},
		products(establishment) {
			return Product.find({
				establishment: establishment.id,
			});
		},
		category(establishment) {
			return Category.findById(establishment.category);
		},
		categoriesByProduct(establishment) {
			// se listan los productos de un establecimiento
			return Product.find({
				establishment: establishment.id,
				// se busca la categoria de cada uno de los productos
			}).then(productsFound => productsFound.map(product => {
				return Category.findById(product.category);
			})).then(resolveCategoies => Promise.all(resolveCategoies))
			// se filtran los registro que no son vacios
				.then(categories => categories.filter(dataCategory => dataCategory !== null))
				.then(categiesNotNull=>
					// se realiza un distinct respecto al nombre de las categorias
					categiesNotNull.reduce((acc,data)=>{
						if(!acc.some(a=> a.name === data.name)) acc.push(data);
						return acc;
					},[])
				);
		},
		workingHours(establishment) {
			return WorkingHour.find({
				establishment: establishment.id,
			});
		},
	},
	Product: {
		establishment(product) {
			return Establishment.findById(product.establishment);
		},
		category(product) {
			return Category.findById(product.category);
		},
	},
	Order: {
		products(order) {
			return ShoppingCart.find({
				order: order.id
			})
				.then(cart => cart.map(c =>
					Product.findById(mongoose.Types.ObjectId(c.product)))
					.catch(err => console.log(err))
				); 
		},
	},
	Mutation: {
		createUser: (_, {
			account,
			user
		}) =>
			Account.create(account).then((accountCreated) => {
				user.account = accountCreated.id; 
				return User.create(user);
			}).catch(err => console.log(err)),
		createWorkingHour: (_, {
			workingHour
		}) => WorkingHour.create(workingHour).catch(err => console.log(err)),

		createEstablishment: (_, {
			category,
			attendant,
			establishment,
			workingHours
		}) =>
		// se crean el que atiende
			Attendant.create(attendant)
				.then((attendantCreated) => {
					establishment.attendant = attendantCreated.id; 
					return establishment;
					// se crea la categoria si existe o sino se deja la existente
				}).then(establishmentWithAttendant => Category.findOneAndUpdate({
					"name": category.name
				}, category, {
					upsert: true,
					new: true
				}).then((categoryCreated) => {
					establishmentWithAttendant.category = categoryCreated.id; 
					return establishmentWithAttendant;
					// se crea el establecimiento
				}).then(establishmentWithCategory => Establishment.create(establishmentWithCategory)
					.then((establishmentCreated) => {
						// se crean los horarios de atencion
						workingHours.forEach((workingHour) => {
							workingHour.establishment = establishmentCreated.id; 
							// se crea el horario de atencion si ya existe utiliza el que ya estaba creado
							WorkingHour.findOneAndUpdate({
								"timeStart": workingHour.timeStart,
								"timeEnd": workingHour.timeEnd
							}, workingHour, {
								upsert: true,
								new: true
							}).then(wh => console.log(wh));
						});
						return establishmentCreated;
					}))
					.catch(err => console.log(err))).catch(err => console.log(err)),

		createFeedback: (_, {
			feedback
		}) => Feedback.create(feedback),
		createProduct: (_, {
			product,
			category
		}) =>
			Category.findOneAndUpdate({
				"name": category.name
			}, category, {
				upsert: true,
				new: true
			}).then((categoryCreated) => {
				product.category = categoryCreated.id;
				return Product.findOneAndUpdate({
					"name": product.name,
					"establishment": product.establishment
				}, product, {
					upsert: true,
					new: true
				});
			}),

		createCategory: (_, {
			category
		}) => Category.create(category),
		createLocation: (_, {
			location
		}) => Location.create(location),

		createOrder: (_, {
			order,
			shoppingCart
		}) =>
			Order.create(order).then((orderCreated) => {
				shoppingCart.forEach((cart) => {
					cart.order = orderCreated.id;
					ShoppingCart.create(cart);
				});
				return orderCreated;
			}).catch(err => console.log(err)),
	},
};

module.exports = resolvers;