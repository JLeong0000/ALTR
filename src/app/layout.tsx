import StoreProvider from "./StoreProvider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ALTr",
	description: "AI Language Tutor App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<StoreProvider>
			<html
				lang="en"
				className={openSans.className}
			>
				<body className="mx-8">{children}</body>
			</html>
		</StoreProvider>
	);
}
