export default function LangButton({ lang }: { lang: string }) {
	return <button className="uppercase tracking-widest bg-gray-400 text-white py-5 rounded-md font-semibold hover:bg-cyan-500 focus:bg-cyan-600">{lang}</button>;
}
