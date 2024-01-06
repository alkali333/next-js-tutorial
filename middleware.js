import { NextResponse } from "next/server";

export function middleware(request) {
  // redirect to the root of the site
  // request.url is site they are trying to access
  // new / is the root of the site
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*"],
};
