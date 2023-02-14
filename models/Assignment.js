import { Schema, model, models } from "mongoose";

const assignmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: false,
    },
    file: {
      type: String,
      required: false,
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
  },
  { timestamps: true }
);

const Assignment = models.Assignment || model("Assignment", assignmentSchema);

export default Assignment;
