export default function ChatBubble({ text, user }: { text: string; user?: boolean | null }) {
	return (
		<p
			className={`text-gray-100 p-4 rounded-3xl w-[90%] 
            ${user ? "ms-auto bg-cyan-700 rounded-br-none" : "bg-gray-700 rounded-bl-none"}`}
		>
			{text}
		</p>
	);
}
