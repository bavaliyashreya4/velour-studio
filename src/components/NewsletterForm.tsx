"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";
import { subscribeNewsletter } from "@/app/actions";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    const formData = new FormData();
    formData.append("email", email);

    const result = await subscribeNewsletter(formData);
    
    if (result.success) {
      setStatus("success");
      setMessage(result.message || "Subscribed successfully.");
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.message || "Failed to subscribe.");
    }
  };

  return (
    <div>
      {status === "success" ? (
        <p className="text-[var(--color-gold)] text-sm tracking-widest uppercase mb-8">{message}</p>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="flex border-b border-[var(--background)]/30 pb-2 mb-2 focus-within:border-[var(--color-gold)] transition-colors">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="bg-transparent border-none outline-none flex-grow placeholder:text-[var(--background)]/40 text-[var(--background)]"
              required
            />
            <button type="submit" disabled={status === "loading"} className="ml-4 hover:text-[var(--color-gold)] transition-colors group">
              <MoveRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          {status === "error" && <p className="text-red-400 text-xs mt-2 mb-8">{message}</p>}
          {status !== "error" && <div className="mb-8"></div>}
        </>
      )}
    </div>
  );
}
