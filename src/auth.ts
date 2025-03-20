import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize: async credentials => {
				const username = credentials.username as string | undefined;
				const password = credentials.password as string | undefined;
				if (!username || !password) {
					console.error("Missing credentials");
					return null;
				}
				await connectDB();
				const user = await User.findOne({ username }).select("+password"); // Ensure password is included
				if (!user || !user.password) {
					console.error("Invalid login credentials");
					return null;
				}
				const passwordMatch = await compare(password, user.password);
				if (!passwordMatch) {
					console.error("Invalid login credentials");
					return null;
				}
				return { id: user._id, username: user.username };
			},
		}),
	],
	pages: {
		signIn: "/",
	},
});
