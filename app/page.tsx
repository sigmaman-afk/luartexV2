"use client";
import { useState } from "react";

export default function Page() {
  const [src, setSrc] = useState("");
  const [out, setOut] = useState("");

  async function obfuscate() {
    const r = await fetch("/api/obfuscate", {
      method: "POST",
      body: JSON.stringify({ source: src }),
    });
    const j = await r.json();
    setOut(j.output);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Luartex</h1>
      <textarea rows={10} style={{ width: "100%" }} onChange={e => setSrc(e.target.value)} />
      <button onClick={obfuscate}>Obfuscate</button>
      <pre>{out}</pre>
    </div>
  );
}
