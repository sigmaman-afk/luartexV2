// engine/junk.ts
export function junkWrap(code: string) {
  return `
do
 if ((${Math.floor(Math.random()*999)}*3)%3==0 then
  ${code}
 else
  local x=0 for i=1,100 do x+=i end
 end
end
`
}
