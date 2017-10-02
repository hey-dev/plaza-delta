module.exports = `
  type Mutation {
    # User - Account
    createUser(account: AccountInput, user: UserInput): User    

    # Establishment - Attendant
    createEstablishment(attendant: AttendantInput, establishment: EstablishmentInput): Establishment
    
    # Feedback
    createFeedback(feedback: FeedbackInput): Feedback

    # Product
    createProduct(product: ProductInput): Product

    # Order
    createOrder(order: OrderInput, shoppingCart: [ShoppingCartInput]): Order
  }
`;
