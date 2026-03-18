"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const labelClass =
  "mb-1 block text-[0.75rem] font-medium text-[#fee2b2]";

const inputClass =
  "w-full border border-[#fee2b2] bg-transparent px-4 py-3 text-white outline-none placeholder:text-white/40 focus:border-[#cc9933]";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const trimmedFilled =
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    message.trim().length > 0;
  const submitDisabled = !trimmedFilled || formState === "loading";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitDisabled) return;
    setFormState("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFormState("error");
        setErrorMessage(
          typeof data.error === "string"
            ? data.error
            : "Something went wrong. Please try again."
        );
        return;
      }
      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFormState("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  function handleSendAnother() {
    setFormState("idle");
    setErrorMessage("");
  }

  const fieldStyle = {
    borderWidth: "0.0625rem",
    borderRadius: "0.375rem",
  } as const;

  return (
    <section
      id="contact"
      className="border-y px-4"
      style={{
        backgroundColor: "#fefcf7",
        borderColor: "#fee2b2",
        borderWidth: "0.0625rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="mx-auto w-full max-w-[81.25rem] px-4">
        <div
          className="grid grid-cols-1 gap-6 p-[1.1875rem] text-white md:grid-cols-2 md:gap-6 md:p-[3.125rem] lg:gap-x-[10rem] lg:p-[5.625rem]"
          style={{
            backgroundColor: "#141414",
            borderRadius: "0.75rem",
          }}
        >
          <div className="flex flex-col justify-center py-2 md:py-0">
            <h2 className="section-title gradient-text text-left">
              Contact the Market Watch team
            </h2>
            <p
              className="mt-4 max-w-md"
              style={{ opacity: 0.8, fontSize: "1.0625rem", lineHeight: 1.5 }}
            >
              For event details, media requests, or general questions, reach out
              using the form. We&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="flex min-h-0 flex-col justify-center">
            {formState === "success" ? (
              <div
                className="flex flex-col items-start gap-4 border border-[#98652b] bg-transparent p-6"
                style={{ borderWidth: "1px", borderRadius: "0.375rem" }}
              >
                <p className="text-[#fee2b2]">
                  Thank you! Your submission has been received!
                </p>
                <button
                  type="button"
                  className="btn-alt cursor-pointer"
                  onClick={handleSendAnother}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`${inputClass} min-h-[6.25rem] resize-y`}
                    style={fieldStyle}
                  />
                </div>

                {formState === "error" && errorMessage && (
                  <p className="text-sm" style={{ color: "#f87171" }}>
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitDisabled}
                  className="btn-gold cursor-pointer self-start border-0 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {formState === "loading" ? "Sending..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
