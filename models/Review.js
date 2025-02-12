const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Recipe",
  },

  userId: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  comment: {
    type: String,
  },
});

module.exports = mongoose.model("Review", ReviewSchema);
