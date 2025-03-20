"use client";

import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const CredForm = ({ buttonText }: { buttonText: string }) => {
	const [showPW, setShowPW] = useState(false);

	return (
		<>
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
				className="p-3 rounded-md bg-blue-500 text-white tracking-wider uppercase"
			>
				{buttonText}
			</button>
		</>
	);
};

export default CredForm;
