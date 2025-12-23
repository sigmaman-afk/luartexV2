export function vmStub(codeVar: string) {
  return `
  local f=loadstring(${codeVar})
  if f then return f() end
  `;
}
