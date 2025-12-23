// engine/compiler.ts
import { IR } from "./core"

export function compile(ir: IR[]) {
  const OPS = ["LOADK", "CALL", "HALT"]
  OPS.sort(() => Math.random() - 0.5)

  const map: Record<string, number> = {}
  OPS.forEach((o, i) => (map[o] = i + 1))

  const bc: number[] = []
  const pool: string[] = []

  for (const i of ir) {
    if (i.op === "CALL") {
      bc.push(map.LOADK, pool.push(i.fn) - 1)
      for (const a of i.args)
        bc.push(map.LOADK, pool.push(a) - 1)
      bc.push(map.CALL, i.args.length)
    } else {
      bc.push(map.HALT)
    }
  }

  return { bc, pool, map }
}
