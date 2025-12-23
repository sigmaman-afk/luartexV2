import { NextResponse } from "next/server";
import { obfuscate } from "../../../engine/generator";

export async function POST(req: Request) {
  const { source } = await req.json();
  const output = obfuscate(source);
  return NextResponse.json({ output });
}
