import { NextResponse, type NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const locale =
    pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
};

export default middleware;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
