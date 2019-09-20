const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Revenue = new Schema(
  {
    payerAccount: {
      type: String
    },
    recieverBic: {
      type: String
    },
    recieverName: {
      type: String
    },
    recieverAccount: {
      type: String
    },
    amount: {
      type: String
    },
    revenueDay: {
      type: Date
    },
    usage: {
      type: String
    },
    checksum: {
      type: String
    },
    recurring: {
      type: Boolean
    },
    interval: {
      type: Number
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    subCategory: {
      type: String
    },
    assigned: {
      type: Boolean
    }
  },
  {
    collection: "revenues"
  }
);

module.exports = mongoose.model("Revenue", Revenue);
