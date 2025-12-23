import { xor } from "./encrypt";
import { randInt } from "./rng";
import { vmStub } from "./vm";

export function obfuscate(source: string) {
  const bytes = Array.from(Buffer.from(source));
  const key = randInt(1, 255);
  const enc = xor(bytes, key);

  return `(function()
    local k=${key}
    local d={${enc.join(",")}}
    local s=""
    for i=1,#d do
      s=s..string.char(bit32.bxor(d[i],k))
    end
    ${vmStub("s")}
  end)()`;
}
