import { NextResponse } from "next/server";

type NewsletterPayload = {
  email?: string;
  firstName?: string;
  lastName?: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as NewsletterPayload;

    if (!data.email || typeof data.email !== "string") {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Newsletter API error", error);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
