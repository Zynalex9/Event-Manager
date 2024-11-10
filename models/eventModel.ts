import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
    minLenght: [6, "Title too short"],
  },
  shortDescription: {
    type: String,
    required: [true, "Please enter short description for event"],
    minLenght: [16, "short description too short"],
  },
  longDescription: {
    type: String,
    required: [true, "Please enter  description for event"],
    minLenght: [26, "Description too short"],
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  host: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  attendees: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  public_id: {
    type: String,
    required: true,
    unique: true,
  },
});
const eventModel =
  mongoose.models.Event || mongoose.model("Event", eventSchema);
export default eventModel;
