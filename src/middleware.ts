import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

const protectedRoutes = ["/languages", "/chat"];

export default async function middleware(req: NextRequest) {
	const session = await auth();
	const isProtected = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

	if (isProtected && !session) {
		return NextResponse.redirect(new URL("/", req.url));
	}

	return NextResponse.next();
}
