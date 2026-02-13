import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/subscribe";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  if (isRateLimited(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

  const body = await req.json();
  const email = String(body.email ?? "").trim();
  const topic = String(body.topic ?? "daily");
  const honeypot = String(body.company ?? "");

  if (honeypot) return NextResponse.json({ ok: true });
  if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "invalid_email" }, { status: 400 });

  const webhook = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, topic, source: "taro-daily" })
    });
  }
  return NextResponse.json({ ok: true });
}
