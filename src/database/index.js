import mongoose from "mongoose";

 const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rhythmjain101:rhythm@cluster0.9pavmnq.mongodb.net/"
    );
    console.log("Connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB;
