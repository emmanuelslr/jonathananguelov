import { NextResponse } from "next/server";
import {
  getAllowedOrigins,
  issueNewsletterToken,
  isOriginAllowed,
} from "@/lib/newsletterSecurity";

function buildForbiddenResponse() {
  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const allowlist = getAllowedOrigins();

  if (allowlist.length > 0 && !isOriginAllowed(origin) && !isOriginAllowed(referer)) {
    return buildForbiddenResponse();
  }

  const token = issueNewsletterToken();
  if (!token) {
    return NextResponse.json({ error: "Token service not configured" }, { status: 500 });
  }

  return NextResponse.json(token, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
