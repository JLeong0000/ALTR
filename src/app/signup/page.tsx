"use client";

import CredForm from "@/components/credForm";
import { register } from "@/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";

export default function Signup() {
	const [error, setError] = useState("");

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
					action={async formData => {
						const res = await register(formData);
						if (res?.error) {
							setError(res.error);
						}
					}}
					className="relative flex flex-col w-full gap-2 mt-24"
				>
					<h1 className="flex justify-center text-gray-600 text-xl py-2 tracking-widest">SIGN UP</h1>
					<CredForm buttonText="register" />

					{error && (
						<div className="absolute -bottom-1/4 left-1/2 -translate-x-1/2 mt-3">
							<p className="bg-red-200 text-red-800 p-2 rounded-md text-sm">{error}</p>
						</div>
					)}
				</form>
			</div>
		</div>
	);
}
