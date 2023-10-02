import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  console.log(
    "Running middleware for:",
    request.method,
    " - ",
    request.nextUrl.href
  );
  return NextResponse.next();
}

export const config = {
  matchers: "",
};
