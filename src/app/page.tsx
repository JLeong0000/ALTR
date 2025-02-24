import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Image
				src="/altr-logo.svg"
				width={130}
				height={0}
				alt="ALTR - AI Language Tutor Logo"
			/>
		</div>
	);
}
