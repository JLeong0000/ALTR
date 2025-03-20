"use server";
import { signIn, signOut } from "@/auth";
import connectDB from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

export const githubLogin = async () => {
	await signIn("github", { redirectTo: "/languages" });
};

export const login = async (formData: FormData) => {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	try {
		await signIn("credentials", {
			redirect: false,
			username,
			password,
		});
	} catch (error) {
		console.error("Login error:", error);
		return { error: "Invalid login credentials" };
	}

	redirect("/languages");
};

export const logout = async () => {
	await signOut({ redirectTo: "/" });
};

export const register = async (formData: FormData) => {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	console.log(username, password);

	if (!username || !password) {
		return { error: "Please fill in all fields" };
	}

	await connectDB();

	const existingUser = await User.findOne({ username });

	if (existingUser) {
		console.log("Register Error: User already exists");
		return { error: "Username unavailable" };
	}

	const saltRounds = 12;
	const hashedPassword = await hash(password, saltRounds);

	const newUser = new User({
		username,
		password: hashedPassword,
		authProvider: "credentials",
	});

	newUser.authProviderId = newUser._id.toString();
	await newUser.save();

	console.log("User created:", newUser);
	redirect("/");
};
