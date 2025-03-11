"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { login } from "@/utils/actions";
import { FaGithub } from "react-icons/fa";
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function Home() {
	const [showPW, setShowPW] = React.useState(false);

	return (
		<>
			<div className="flex flex-col items-center mt-40">
				<Image
					src="/altr-logo.svg"
					width={200}
					height={0}
					alt="ALTR - AI Language Tutor Logo"
				/>
				<h1 className="text-gray-700">Your Personal Language Tutor</h1>
			</div>

			<form className="flex flex-col w-full gap-2 mt-10">
				<input
					type="text"
					name="username"
					placeholder="Username *"
					className="p-3 pr-10 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
					required
					autoFocus
					autoComplete="off"
				/>
				<div className="relative w-full">
					<input
						type={showPW ? "text" : "password"}
						name="password"
						placeholder="Password *"
						className="p-3 pr-10 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
						required
						autoComplete="off"
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

			<div className="inline-flex items-center justify-center w-full my-1">
				<hr className="w-64 h-px my-8 bg-gray-600 border-0" />
				<span className="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-[#f7f7f7] left-1/2">or</span>
			</div>

			<div className="flex flex-col w-full gap-2">
				<button
					onClick={() => login()}
					className="flex justify-center items-center p-3 rounded-md bg-cyan-500 text-white tracking-wider"
				>
					<FaGithub
						size={25}
						className="me-4"
					/>
					Sign in with Github
				</button>
			</div>

			<div className="flex flex-col items-center mt-20 w-full">
				<p className="pb-2 text-gray-700">New here?</p>
				<Link
					href="/signup"
					className="w-full"
				>
					<button className="p-3 rounded-md border border-cyan-500 text-cyan-500 text-sm w-full hover:bg-cyan-300">SIGN UP</button>
				</Link>
			</div>
		</>
	);
}
