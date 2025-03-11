"use server";
import { signIn, signOut } from "@/auth";

export const login = async () => {
	await signIn("github", { redirectTo: "/languages" });
};

export const logout = async () => {
	await signOut({ redirectTo: "/" });
};

export const register = async (formData: FormData) => {
	const username = formData.get("username") as string;
	const password = formData.get("password") as string;

	console.log(username, password);
};
