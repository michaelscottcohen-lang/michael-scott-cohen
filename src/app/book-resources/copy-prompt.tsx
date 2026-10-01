"use client";

import { useState } from "react";
import styles from "./resources.module.css";

export default function CopyPrompt({ text, number }: { text: string; number: number }) {
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied. Replace the brackets with your details.");
    } catch {
      const prompt = document.getElementById(`prompt-text-${number}`);
      if (prompt) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(prompt);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setStatus("Select and copy the prompt text below, or download all prompts as a text file.");
    }
  }

  return (
    <div className={styles.copyRow}>
      <button type="button" onClick={copy} aria-label={`Copy prompt ${number}`}>Copy prompt <span aria-hidden="true">↗</span></button>
      <span role="status" aria-live="polite">{status}</span>
    </div>
  );
}
