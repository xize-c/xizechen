"use client";
import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [ok, setOk] = useState(false);
  return (
    <p className="email">
      <a href={`mailto:${email}`}>{email}</a>
      <button
        className="copy"
        onClick={() => { navigator.clipboard.writeText(email); setOk(true); setTimeout(() => setOk(false), 1500); }}
      >
        {ok ? "Successfully Copied" : "Copy"}
      </button>
    </p>
  );
}
