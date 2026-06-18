"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { submitContactForm } from "@/app/actions";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [serverMessage, setServerMessage] = useState<{ type: "success" | "error", text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setServerMessage(null);
    
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const result = await submitContactForm(formData);
    
    if (result.success) {
      setServerMessage({ type: "success", text: result.message || "Sent successfully." });
      reset();
    } else {
      setServerMessage({ type: "error", text: result.message || "Failed to send." });
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-24">
        
        {/* Left Side: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[var(--color-gold)] tracking-widest uppercase text-sm mb-6">Inquiries</p>
          <h1 className="font-heading text-6xl md:text-8xl leading-none uppercase tracking-widest mb-12">
            Get In <br /> Touch.
          </h1>
          
          <div className="space-y-12 text-[var(--foreground)]/70">
            <div>
              <h3 className="font-heading text-xl text-[var(--foreground)] tracking-widest uppercase mb-4">Studio</h3>
              <p className="font-light tracking-wide">
                124 Fashion Avenue, Floor 4<br />
                New York, NY 10012
              </p>
            </div>
            
            <div>
              <h3 className="font-heading text-xl text-[var(--foreground)] tracking-widest uppercase mb-4">Contact</h3>
              <p className="font-light tracking-wide mb-2">studio@velour.com</p>
              <p className="font-light tracking-wide">+1 (212) 555-0199</p>
            </div>

            <div>
              <h3 className="font-heading text-xl text-[var(--foreground)] tracking-widest uppercase mb-4">Hours</h3>
              <p className="font-light tracking-wide">Monday - Friday: 10AM - 6PM EST</p>
              <p className="font-light tracking-wide">Visits by appointment only.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[var(--foreground)] text-[var(--background)] p-8 md:p-12 shadow-2xl relative"
        >
          <h2 className="font-heading text-3xl tracking-widest uppercase mb-8">Send a Message</h2>
          
          {serverMessage?.type === "success" ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="py-12 text-center border border-[var(--color-gold)] p-8"
            >
               <h3 className="font-heading text-2xl text-[var(--color-gold)] mb-4">Received</h3>
               <p className="text-[var(--background)]/70 font-light tracking-wide leading-relaxed">
                 {serverMessage.text}
               </p>
               <button 
                 onClick={() => setServerMessage(null)}
                 className="mt-8 text-sm tracking-widest uppercase hover:text-[var(--color-gold)] transition-colors border-b border-transparent hover:border-[var(--color-gold)] pb-1"
               >
                 Send Another Message
               </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {serverMessage?.type === "error" && (
                <div className="text-red-400 text-sm">{serverMessage.text}</div>
              )}

              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[var(--background)]/50 mb-2">Full Name</label>
                <input 
                  {...register("name")}
                  className="bg-transparent border-b border-[var(--background)]/30 py-2 focus:border-[var(--color-gold)] outline-none transition-colors rounded-none placeholder:text-transparent"
                  placeholder="Jane Doe"
                />
                {errors.name && <span className="text-red-400 text-xs mt-1">{errors.name.message}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[var(--background)]/50 mb-2">Email Address</label>
                <input 
                  type="email"
                  {...register("email")}
                  className="bg-transparent border-b border-[var(--background)]/30 py-2 focus:border-[var(--color-gold)] outline-none transition-colors rounded-none"
                />
                {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[var(--background)]/50 mb-2">Subject</label>
                <div className="relative">
                  <select 
                    {...register("subject")}
                    className="w-full bg-transparent border-b border-[var(--background)]/30 py-2 focus:border-[var(--color-gold)] outline-none transition-colors appearance-none rounded-none text-[var(--background)]"
                  >
                    <option value="" className="text-black">Select an option</option>
                    <option value="General" className="text-black">General Inquiry</option>
                    <option value="Press" className="text-black">Press</option>
                    <option value="Stockist" className="text-black">Stockist Inquiry</option>
                    <option value="Other" className="text-black">Other</option>
                  </select>
                </div>
                {errors.subject && <span className="text-red-400 text-xs mt-1">{errors.subject.message}</span>}
              </div>

              <div className="flex flex-col">
                <label className="text-xs tracking-widest uppercase text-[var(--background)]/50 mb-2">Message</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  className="bg-transparent border-b border-[var(--background)]/30 py-2 focus:border-[var(--color-gold)] outline-none transition-colors resize-none rounded-none"
                />
                {errors.message && <span className="text-red-400 text-xs mt-1">{errors.message.message}</span>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full border border-[var(--background)] py-4 uppercase tracking-[0.2em] text-sm hover:bg-[var(--background)] hover:text-[var(--foreground)] transition-colors cursor-none disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
