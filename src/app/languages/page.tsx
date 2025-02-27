import LangButton from "@/components/langButton";
import Image from "next/image";

export default function Languages() {
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
			<div className="flex flex-col mt-28">
				<h1 className="text-center text-2xl font-semibold">LANGUAGES</h1>
				<p className="text-center pt-2">Choose a language to practice</p>
				<div className="flex flex-col mt-14 gap-6 justify-center">
					<LangButton lang="Japanese" />
					<LangButton lang="Chinese" />
					<LangButton lang="French" />
				</div>
			</div>
		</div>
	);
}
