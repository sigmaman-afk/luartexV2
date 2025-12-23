// engine/vm.ts
export function emitVM(bc: number[], pool: string[], map: any) {
  return `
(function()
local B=${JSON.stringify(bc)}
local P=${JSON.stringify(pool)}
local S={}
local IP=1

while true do
 local OP=B[IP];IP+=1

 if OP==${map.LOADK} then
  S[#S+1]=P[B[IP]+1];IP+=1

 elseif OP==${map.CALL} then
  local argc=B[IP];IP+=1
  local args={}
  for i=1,argc do
    args[i]=table.remove(S)
  end
  local fn=table.remove(S)
  _G[fn](table.unpack(args))

 elseif OP==${map.HALT} then
  break
 else
  -- junk opcode
  S[999]=OP*math.random()
 end
end
end)()
`.replace(/\n/g,"")
}
