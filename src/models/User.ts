import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	password: { type: String, select: false },
	role: { type: String, default: "user" },
	image: { type: String },
	authProvider: { type: String, required: true },
	authProviderId: { type: String, required: true },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
