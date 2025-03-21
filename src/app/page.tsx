"use client";
import { githubLogin, login } from "@/utils/actions";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CredForm from "@/components/credForm";

export default function Login() {
	const [error, setError] = useState("");

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

			<form
				action={async formData => {
					const res = await login(formData);
					if (res?.error) {
						setError(res.error);
					}
				}}
				className="relative flex flex-col w-full gap-2 mt-10"
			>
				<CredForm buttonText="login" />

				{error && (
					<div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 mt-3">
						<p className="bg-red-200 text-red-800 p-2 rounded-md text-sm">{error}</p>
					</div>
				)}
			</form>

			<div className="inline-flex items-center justify-center w-full my-1">
				<hr className="w-64 h-px my-8 bg-gray-600 border-0" />
				<span className="absolute px-3 font-medium text-gray-600 -translate-x-1/2 bg-[#f7f7f7] left-1/2">or</span>
			</div>

			<div className="flex flex-col w-full gap-2">
				<button
					onClick={() => githubLogin()}
					className="flex justify-center items-center p-3 rounded-md bg-indigo-600 text-white tracking-wider"
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
