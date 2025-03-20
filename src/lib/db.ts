import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
	throw new Error("Missing MONGODB_URI in environment variables");
}

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI!);
		console.log("MongoDB Connected");
	} catch (error: any) {
		console.error(`Error: ${error.message}`);
		throw new Error("Database connection failed");
	}
};

export default connectDB;
