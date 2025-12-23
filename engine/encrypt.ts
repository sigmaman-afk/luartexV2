// engine/encrypt.ts
export function enc(str: string) {
  const k = Math.floor(Math.random()*255)
  const data = [...str].map(c => c.charCodeAt(0) ^ k)
  return `{k=${k},d={${data.join(",")}}}`
}
