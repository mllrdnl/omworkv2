// import connectMongo from "../utils/connectMongo.js";
import Assignment from "../models/Assignment.js";

import sharp from "sharp";
import crypto from "crypto";

import { uploadFile, getObjectSignedUrl, deleteFile } from "./s3.js";

// connectMongo();

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

export async function getAssignments() {
  const assignments = await Assignment.findMany({
    orderBy: [{ created: "desc" }],
  });
  for (let assignment of assignments) {
    assignment.fileURL = await getObjectSignedUrl(assignment.fileName);
  }
  return assignments;
}

export async function createAssignment(title, category, desc, file) {
  const fileName = generateFileName();

  const fileBuffer = await sharp(file.buffer)
    .resize({ height: 1920, width: 1080, fit: "contain" })
    .toBuffer();

  await uploadFile(fileBuffer, fileName, file.mimetype);

  const assignment = await Assignment.create({
    data: {
      title,
      category,
      desc,
      fileName,
    },
  });

  return assignment;
}

export async function deletePost(id) {
  const assignment = await Assignment.findUnique({ where: { id } });

  await deleteFile(assignment.fileName);

  await Assignments.delete({ where: { id: assignment.id } });

  return assignment;
}
