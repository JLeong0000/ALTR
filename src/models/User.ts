import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	email: { type: String, required: false },
	password: { type: String, select: false },
	role: { type: String, default: "user" },
	image: { type: String },
	authProvider: { type: String, required: true },
	githubId: { type: String },
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
