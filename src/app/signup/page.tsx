"use client";

import Image from "next/image";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { signup } from "@/app/actions/auth";

export default function Signup() {
	const [showPW, setShowPW] = React.useState(false);

	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (!user) {
		}

		console.log("User = ", user);
		console.log("Pass = ", pass);
	};

	return (
		<div>
			<div className="flex flex-col items-center mt-16">
				<Image
					src="/altr-logo.svg"
					width={100}
					height={0}
					alt="ALTR - AI Language Tutor Logo"
				/>
			</div>
			<div>
				<form
					action={signup}
					className="flex flex-col w-full gap-2 mt-52"
				>
					<h1 className="flex justify-center text-gray-600 text-xl py-2 tracking-widest">SIGN UP</h1>
					<input
						type="text"
						name="user"
						placeholder="Username *"
						className="p-3 pr-10 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
						value={user}
						required
						autoFocus
						autoComplete="off"
						onChange={e => setUser(e.target.value)}
					/>
					<div className="relative w-full">
						<input
							type={showPW ? "text" : "password"}
							name="password"
							placeholder="Password *"
							className="p-3 pr-10 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
							value={pass}
							required
							autoComplete="off"
							onChange={e => setPass(e.target.value)}
						/>
						<button
							type="button"
							onClick={() => setShowPW(!showPW)}
							className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
						>
							{showPW ? <LuEyeOff /> : <LuEye />}
						</button>
					</div>

					<button
						type="submit"
						className="p-3 rounded-md bg-blue-500 text-white tracking-wider"
					>
						REGISTER
					</button>
				</form>
			</div>
		</div>
	);
}
