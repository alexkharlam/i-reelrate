import { v2 as cloudinary } from "cloudinary";
import strimifier from "streamifier";

export const uploadImageBuffer = (imageBuffer, folder) =>
  new Promise((resolve, reject) => {
    const cldUploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
      },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );

    strimifier.createReadStream(imageBuffer).pipe(cldUploadStream);
  });
