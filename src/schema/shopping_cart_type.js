module.exports = `
  type ShoppingCart {
    id: ID!
    product: Product!
    order: Order!
    quantity: Int!
    createdAt: String
    updatedAt: String
  }
  # args
  input ShoppingCartInput {
    product: String!
    order: String
    quantity: Int!
  }
`;