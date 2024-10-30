module.exports = {
  config: {
    "api::order.order": {
      columns: [
        "firstName",
        "lastName",
        "phoneNumber",
        "email",
        "deliveryMethod",
        "wilaya",
      ],
      // Flatten the products JSON field
      relation: {
        products: {
          column: ["id", "title", "price", "quantity"], // Extract product details
        },
      },
      locale: "false",
    },
  },
};
