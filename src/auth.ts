// auth.ts
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";
import GitHub from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		GitHub,
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
					return null;
				}

				await connectDB();
				const user = await User.findOne({ username }).select("+password");

				if (!user || !user.password) {
					return null;
				}

				const passwordMatch = await compare(password, user.password);
				if (!passwordMatch) {
					return null;
				}

				// Return user with all the data you need in the session
				return {
					id: user._id.toString(),
					username: user.username,
				};
			},
		}),
	],
});
