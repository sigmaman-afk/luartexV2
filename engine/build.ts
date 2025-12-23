// engine/build.ts
import { parseLua } from "./core"
import { compile } from "./compiler"
import { emitVM } from "./vm"
import { junkWrap } from "./junk"

export function obfuscate(src: string) {
  const ir = parseLua(src)
  const { bc, pool, map } = compile(ir)
  let out = emitVM(bc, pool, map)
  out = junkWrap(out)
  return out.replace(/\s+/g,"")
}
