import { Schema, model, models } from "mongoose";

const assignmentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
    fileName: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Assignment = models.Assignment || model("Assignment", assignmentSchema);

export default Assignment;
