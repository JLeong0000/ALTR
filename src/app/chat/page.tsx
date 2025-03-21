import ChatBubble from "@/components/chatBubble";
import Image from "next/image";

export default function Chat() {
	// input append to array from user
	// append AI response to array
	// display array

	return (
		<div className="h-screen flex flex-col -mx-8">
			<div className="bg-gradient-to-b from-gray-500 to-gray-300 py-2 flex justify-between items-center">
				<Image
					src="/altr-logo.svg"
					width={80}
					height={0}
					alt="ALTR - AI Language Tutor Logo"
					className="ms-3"
				/>
				<button className="bg-red-200 text-sm h-9 px-7 me-3 rounded-md tracking-wider drop-shadow hover:bg-red-300 focus:bg-red-400 focus:ring-2 focus:ring-red-800">LOGOUT</button>
			</div>

			<main className="flex flex-col h-[calc(100vh-60px)] p-4 pt-0 relative">
				<div className="flex gap-4 flex-grow overflow-y-auto mb-24 pb-4 px-3 flex-col-reverse">
					<ChatBubble text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quos. Hic, neque vel. Quas incidunt ex, veritatis delectus modi, magnam soluta" />
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
						className="w-full mx-8 rounded-lg p-3 bg-gray-300 resize-none h-20 focus:outline-gray-500"
						placeholder="Start chatting..."
						rows={3}
					/>
				</div>
			</main>
		</div>
	);
}
