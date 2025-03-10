"use client";

import Image from "next/image";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function Home() {
	const [showPW, setShowPW] = React.useState(false);

	const [user, setUser] = useState("");
	const [pass, setPass] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("User = ", user);
		console.log("Pass = ", pass);
	};

	return (
		<div>
			<div className="flex flex-col items-center mt-60">
				<Image
					src="/altr-logo.svg"
					width={200}
					height={0}
					alt="ALTR - AI Language Tutor Logo"
				/>
				<h1 className="text-gray-700">Your Personal Language Tutor</h1>
			</div>
			<div>
				<form className="flex flex-col w-full gap-2 mt-10">
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

			<div className="flex flex-col items-center mt-20 w-full">
				<p className="pb-2 text-gray-700">New here?</p>
				<Link
					href="/signup"
					className="w-full"
				>
					<button className="p-3 rounded-md border border-blue-500 text-blue-500 text-sm text-gray-700 w-full hover:bg-blue-300">SIGN UP</button>
				</Link>
			</div>
		</div>
	);
}
