"use client";

import { FormEvent, useState } from "react";

type SignupFormProps = {
  id: string;
  label?: string;
  variant?: "inline" | "button";
};

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm({ id, label = "Subscribe free", variant = "inline" }: SignupFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Please try again.");

      form.reset();
      setStatus("success");
      setMessage(result.message || "You’re subscribed. Check your inbox to confirm.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  const messageId = `${id}-status`;

  if (variant === "button") {
    return (
      <form className="button-signup" onSubmit={submit} aria-describedby={message ? messageId : undefined}>
        <label className="sr-only" htmlFor={id}>Email address</label>
        <input id={id} name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" required disabled={status === "submitting"} />
        <button className="button" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Subscribing…" : label} <span aria-hidden="true">→</span></button>
        {message && <small id={messageId} className={`signup-status ${status}`} role="status">{message}</small>}
      </form>
    );
  }

  return (
    <form className="inline-signup" onSubmit={submit} aria-describedby={message ? messageId : undefined}>
      <label className="sr-only" htmlFor={id}>Email address</label>
      <input id={id} name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@example.com" required disabled={status === "submitting"} />
      <button type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Subscribing…" : label}</button>
      {message && <span id={messageId} className={`signup-status ${status}`} role="status">{message}</span>}
    </form>
  );
}
