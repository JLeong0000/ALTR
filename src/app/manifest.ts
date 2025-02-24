import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "AI Language Tutor",
		short_name: "ALTr",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#000000",
		icons: [
			{
				src: "/src/app/favicon.ico",
				type: "image/ico",
			},
		],
	};
}
