import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const homworkSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    frequency: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
    },
    dateAssigned: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      required: false,
    },
    note: {
      type: String,
      required: false,
    },
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment" },
  },
  { timestamps: true }
);

const Homwork = models.Homwork || model("Homwork", homworkSchema);

export default Homwork;
