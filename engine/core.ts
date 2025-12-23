// engine/core.ts
export type IR =
  | { op: "CALL"; fn: string; args: string[] }
  | { op: "HALT" }

export function parseLua(src: string): IR[] {
  // VERY intentional: small grammar = harder to pattern-match
  const calls = [...src.matchAll(/([a-zA-Z_]+)\((.*?)\)/g)]
  const ir: IR[] = []

  for (const c of calls) {
    const args = c[2]
      .split(",")
      .map(a => a.trim().replace(/^"(.*)"$/, "$1"))
    ir.push({ op: "CALL", fn: c[1], args })
  }

  ir.push({ op: "HALT" })
  return ir
}
