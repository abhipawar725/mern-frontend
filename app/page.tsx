"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1>{msg}</h1>
    </main>
  );
}
