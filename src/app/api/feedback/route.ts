import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { type, ...data } = body;

  if (!type) {
    return NextResponse.json({ error: "Missing type" }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  const slug = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const filename = `feedback/${type}/${slug}.json`;

  const blob = await put(filename, JSON.stringify({ ...data, timestamp }, null, 2), {
    access: "public",
    contentType: "application/json",
  });

  return NextResponse.json({ id: slug, url: blob.url });
}
