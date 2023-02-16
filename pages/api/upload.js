import fs from "fs";
import S3 from "aws-sdk/clients/s3.js";
import formidable from "formidable";

const s3Client = new S3({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = formidable();
  form.parse(req, async (err, fields, files) => {
    if (!files.assignment) {
      res.status(400).send("No file uploaded");
      return;
    }

    try {
      return s3Client.putObject(
        {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: files.assignment.originalFilename,
          Body: fs.createReadStream(files.assignment.filepath),
          // keeping ACL private
        },
        async () => res.status(201).send("File uploaded")
      );
    } catch (error) {
      console.log(error);
      res.status(500).send("Error uploading file");
    }
  });
}
