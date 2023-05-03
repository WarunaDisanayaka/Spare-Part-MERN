import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.GO_URL);
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
