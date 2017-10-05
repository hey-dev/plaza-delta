module.exports = `
  type Mutation {
    # User - Account
    createUser(account: AccountInput, user: UserInput): User

    # Establishment - Attendant
    createEstablishment(category: CategoryInput, attendant: AttendantInput, establishment: EstablishmentInput, workingHours: [WorkingHourInput]): Establishment

    # Feedback
    createFeedback(feedback: FeedbackInput): Feedback

    # WorkingHour
    createWorkingHour(workingHour: WorkingHourInput): WorkingHour

    # Product
    createProduct(product: ProductInput): Product

    # Category
    createCategory(category: CategoryInput): Category

    # Location
    createLocation(location: LocationInput): Location

    # Order
    createOrder(order: OrderInput, shoppingCart: [ShoppingCartInput]): Order
  }
`;