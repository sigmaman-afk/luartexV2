export function xor(data: number[], key: number) {
  return data.map(b => b ^ key);
}
