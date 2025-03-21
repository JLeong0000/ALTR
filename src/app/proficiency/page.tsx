import { signOut, auth } from "../../auth";
import ChatOptionButton from "@/components/chatOptionButton";
import Image from "next/image";

export default async function Proficiency() {
	const session = await auth();

	const proficiencies = ["Beginner", "Intermediate", "Fluent"];

	return (
		<div>
			<div className="flex justify-between items-center pt-5">
				{session?.user != undefined && (
					<div className="flex items-center">
						{session?.user.image && (
							<Image
								src={session.user.image}
								width={36}
								height={36}
								alt={"User Image"}
								className="rounded-full"
							/>
						)}
						<span className="ps-3 font-semibold break-words text-sm">{session.user.name}</span>
					</div>
				)}
				<form
					action={async () => {
						"use server";
						await signOut();
					}}
				>
					<button className="bg-red-200 text-sm h-9 px-7 rounded-md tracking-wider drop-shadow hover:bg-red-300 focus:bg-red-400 focus:ring-2 focus:ring-red-800">LOGOUT</button>
				</form>
			</div>

			<div className="flex flex-col items-center mt-16">
				<Image
					src="/altr-logo.svg"
					width={120}
					height={0}
					alt="ALTR - AI Language Tutor Logo"
				/>
			</div>

			<div className="flex flex-col mt-28">
				<h1 className="text-center text-2xl font-bold text-cyan-700">PROFICIENCY</h1>
				<p className="text-center pt-2">Choose your level</p>
				<div className="flex flex-col mt-14 gap-6 justify-center">
					{proficiencies.map((level, index) => (
						<ChatOptionButton
							key={index}
							text={level}
							proficiency
						/>
					))}
				</div>
			</div>
		</div>
	);
}
