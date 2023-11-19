import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(process.env.DB);
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Error connecting to the database, shutting down...");
    process.exit(1);
  }
};

export default connectDB;
