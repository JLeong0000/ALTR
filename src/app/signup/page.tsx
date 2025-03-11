"use client";

import { register } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdArrowBack } from "react-icons/md";

export default function Signup() {
	const [showPW, setShowPW] = React.useState(false);

	return (
		<div>
			<div className="mt-24 bg-gray-200 w-fit p-3 rounded-xl">
				<Link href={"/"}>
					<MdArrowBack size={25} />
				</Link>
			</div>
			<div className="flex flex-col items-center mt-16">
				<Link href={"/"}>
					<Image
						src="/altr-logo.svg"
						width={200}
						height={0}
						alt="ALTR - AI Language Tutor Logo"
					/>
				</Link>
				<h1 className="text-gray-700">Your Personal Language Tutor</h1>
			</div>
			<div>
				<form
					action={register}
					className="flex flex-col w-full gap-2 mt-24"
				>
					<h1 className="flex justify-center text-gray-600 text-xl py-2 tracking-widest">SIGN UP</h1>
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
			</div>
		</div>
	);
}
