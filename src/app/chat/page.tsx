import ChatBubble from "@/components/chatBubble";
import Image from "next/image";

export default function Chat() {
	return (
		<div className="h-screen flex flex-col -mx-8">
			<div className="bg-gradient-to-b from-gray-400 to-gray-200 py-2">
				<Image
					src="/altr-logo.svg"
					width={80}
					height={0}
					alt="ALTR - AI Language Tutor Logo"
					className="mx-3"
				/>
			</div>

			<main className="flex flex-col h-[calc(100vh-60px)] p-4 pt-0 relative">
				<div className="flex gap-4 mx-4 flex-grow overflow-y-auto mb-24 pb-4 flex-col-reverse">
					<ChatBubble text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos. Hic, neque vel. Quas incidunt ex, veritatis delectus modi, magnam soluta" />
					<ChatBubble text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos. Hic, neque vel." />
					<ChatBubble
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos. Hic, neque vel. Quas incidunt ex, veritatis d"
						user
					/>
					<ChatBubble text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos. Hic, neque vel. Quas incidunt ex, veritatis delectus modi, magnam soluta" />
					<ChatBubble
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos. Hic, neque vel. Quas incidunt ex, veritatis delectus modi, magnam soluta, commodi eveniet non dolores alias ipsum aliquam natus quos."
						user
					/>
				</div>

				<div className="absolute bottom-4 left-0 w-full py-4 flex justify-center">
					<textarea
						className="w-[90%] max-w-lg rounded-lg p-3 bg-gray-300 resize-none h-20 focus:outline-gray-500"
						placeholder="Start chatting..."
						rows={3}
					/>
				</div>
			</main>
		</div>
	);
}
