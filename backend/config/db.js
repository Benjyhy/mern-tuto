import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(
            `Mongo DB connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB;