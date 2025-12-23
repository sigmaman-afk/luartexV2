"use client";
import { useState } from "react";

export default function Page() {
  const [code, setCode] = useState("");
  const [out, setOut] = useState("");

  async function run() {
    const r = await fetch("/api/obfuscate", {
      method: "POST",
      body: JSON.stringify({ source: code })
    });
    const j = await r.json();
    setOut(j.output);
  }

  return (
    <>
      <textarea onChange={e=>setCode(e.target.value)} />
      <button onClick={run}>Obfuscate</button>
      <pre>{out}</pre>
    </>
  );
}
