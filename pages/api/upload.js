import fs from "fs";
import S3 from "aws-sdk/clients/s3.js";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false,
  },
};

const s3 = new S3({
  region: process.env.AWS_BUCKET_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  signatureVersion: "v4",
});

export default async function handler(req, res) {
  const { method } = req;

  // if (method !== "POST") {
  //   return res.status(405).json({ message: "Method not allowed" });
  // }

  try {
    const { name, type } = req.body;

    const fileParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: name,
      ContentType: type,
      ACL: "public-read",
    };

    const url = await s3.getSignedUrl("putObject", fileParams);

    res.status(200).json({
      url,
      key: Key,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
}

// export default async function handler(req, res) {
//   const { method } = req;

//   if (method === "POST") {
//     const form = formidable();
//     form.parse(req, async (err, fields, files) => {
//       if (!files.file) {
//         res.status(400).send("No file uploaded");
//         return;
//       }

//       try {
//         return s3Client.putObject(
//           {
//             Bucket: process.env.AWS_BUCKET_NAME,
//             Key: files.file.originalFilename,
//             Body: fs.createReadStream(files.file.filepath),
//             ACL: "public-read",
//           },
//           async () => res.status(201).send("File uploaded"),
//           console.log(files)
//         );
//       } catch (error) {
//         console.log(error);
//         res.status(500).send("Error uploading file");
//       }
//     });
//   }
// }
