import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  summary: { type: String, required: true, trim: true },
  genres: [{ type: String, require: true, trim: true }]

  year: { type: Date, required: true, default: Date.getFullYear },
  rating: { type: Number, required: true,trim: true },

});

const movieModel = mongoose.model("Movie", movieSchema);

export default movieModel;
