import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongo db connetct succfully");
    });
    connection.on("error", (error) => {
      console.log(
        "mongo db connection error please make sure mongodb is running ." +
          error
      );
      process.exit();
    });
  } catch (error) {
    console.log("somethinbg goes wrong !");
    console.log(error);
  }
}
