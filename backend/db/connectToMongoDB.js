import mongoose from "mongoose";

const connectToMongoDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to Mongo DB!");
  } catch (error) {
    console.log("Error occured", error);
  }
};

export default connectToMongoDB;
