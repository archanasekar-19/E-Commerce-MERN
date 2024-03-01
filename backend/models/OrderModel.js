const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  shippingInfo: {
    address: {
      type: String,
      // required: true,
    },
    city: {
      type: String,
      // required: true,
    },
    state: {
      type: String,
      // required: true,
    },
    country: {
      type: String,
      // required: true,
    },
    pinCode: {
      type: Number,
      // required: true,
    },
    phoneNo: {
      type: Number,
      // required: true,
    },
  },
  orderItems: [
    {
      name: {
        type: String,
        required: true,
        // ref: "Cart",
      },
      price: {
        type: Number,
        required: true,
        // ref: "Cart",
      },
      quantity: {
        type: Number,
        required: true,
        // ref: "Cart",
      },
      image: {
        type: String,
        // default:""
        required: true,
        // ref: "Cart",
      },
      productId: {
        type: mongoose.Schema.ObjectId,
        // ref: "Product",
        // required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  paymentInfo: {
    id: {
      type: String,
      // required: true,
      default:""
    },
    status: {
      type: String,
      // required: true,
      default:""
    },
  },
  paidAt: {
    type: Date,
    required: true,
    default:""
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
    
  },
  taxPrice: {
    type: Number,
    default: 0,
    default:""
  },
  shippingPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);