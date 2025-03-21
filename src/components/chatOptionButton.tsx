"use client";
import Link from "next/link";
import React, { FC } from "react";

interface ChatOptionButtonProps {
	text: string;
	language?: boolean;
	proficiency?: boolean;
}

const ChatOptionButton: FC<ChatOptionButtonProps> = ({ text, language, proficiency }) => {
	const handleClick = async () => {
		if (language) {
			try {
				await fetch("/api/auth/session", {
					method: "POST",
					body: JSON.stringify({ language: text }),
					headers: { "Content-Type": "application/json" },
				});
			} catch (error) {
				console.log("error:", error);
				throw new Error("Failed to set language");
			}
		} else if (proficiency) {
			console.log("proficiency option");
		}
	};

	return (
		<button
			onClick={handleClick}
			className="uppercase tracking-widest bg-gray-400 text-white py-5 rounded-md font-semibold hover:bg-cyan-500 focus:bg-cyan-600"
		>
			<Link href={language ? "/proficiency" : proficiency ? "/chat" : "#"}>{text}</Link>
		</button>
	);
};

export default ChatOptionButton;
