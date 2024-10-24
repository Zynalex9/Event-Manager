import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
    minLength: [6, "Please enter a minimum of 6 characters"],
    unique:true
  },
  shortDescription: {
    type: String,
    required: [true, "Please enter a short description"],
    minLength: [20, "Please enter a minimum of 20 characters"],
  },
  longDescription: {
    type: String,
    required: [true, "Please enter a description"],
    minLength: [40, "Please enter a minimum of 40 characters"],
  },
  date: {
    type: Date,
    required: [true, "Please enter a date"],
  },
  location: {
    type: String,
    required: [true, "Please enter a location"],
  },
  imgUrl: {
    type: String,
  },
  host: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  attendees: [{
    type: mongoose.Types.ObjectId,
    ref: "User",
  }],
});

const eventModel = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default eventModel
