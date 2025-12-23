// app/api/obfuscate/route.ts
import { obfuscate } from "@/engine/build"

export async function POST(req: Request) {
  const { code } = await req.json()
  return Response.json({ result: obfuscate(code) })
}
