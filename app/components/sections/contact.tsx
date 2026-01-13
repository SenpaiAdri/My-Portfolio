"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import Image from "next/image";
import { Download } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    if (form.current) {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
            setStatus("success");
            setIsSubmitting(false);
            if (form.current) form.current.reset();
          },
          (error) => {
            console.log(error.text);
            setStatus("error");
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div id="contact" className="relative w-full bg-gradient-to-b from-[#E8E8E8] to-white dark:from-[#0a0a0a] dark:to-black text-neutral-900 dark:text-white py-20 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          
          <h1 className="text-3xl font-bold md:text-5xl mb-6">
            Get in touch
          </h1>
          <p className="text-neutral-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            I&apos;m currently looking for internship and project collaborations. Feel
            free to contact me through the form below or via my socials.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 gap-6 md:gap-8 px-5 
        sm:px-20
        lg:grid-cols-2 lg:gap-20 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-[#C6C6C9] dark:border-[#333]"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 ">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-600 dark:text-gray-400 font-medium ml-1">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Juan Dela Cruz"
                  className="w-full p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-[#C6C6C9] dark:border-[#333] text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-neutral-600 dark:text-gray-400 font-medium ml-1">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="juan@example.com"
                  className="w-full p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-[#C6C6C9] dark:border-[#333] text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                 <label className="text-sm text-neutral-600 dark:text-gray-400 font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Hi, I'd like to discuss..."
                  className="w-full h-40 p-4 rounded-xl bg-white dark:bg-[#0a0a0a] border border-[#C6C6C9] dark:border-[#333] text-neutral-900 dark:text-white focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-white text-black font-bold py-4 px-8 rounded-xl hover:bg-gray-300 hover:scale-101 transition-all 
                active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                border-[#C6C6C9] border-1"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-center mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             viewport={{ once: true }}
             className="flex flex-col gap-8"
          >
             <div className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-neutral-700 dark:text-gray-200 text-center lg:text-left">Or connect with me</h2>
                 <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4">
                  {/* Email */}
                  <a href="mailto:adrian31dg@gmail.com" className="flex items-center gap-4 hover:text-white transition-colors p-4 rounded-xl border border-[#C6C6C9] dark:border-[#333] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a]">
                    <Image src="/contact_icons/gmail/gmail-white.png" alt="Email" width={30} height={30} className="invert dark:invert-0" />
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/eydriannn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors p-4 rounded-xl border border-[#C6C6C9] dark:border-[#333] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a]">
                    <Image src="/contact_icons/linkedin/InBug-White.png" alt="LinkedIn" width={30} height={30} className="invert dark:invert-0" />
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/SenpaiAdri" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors p-4 rounded-xl border border-[#C6C6C9] dark:border-[#333] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a]">
                     <Image src="/contact_icons/github/github-mark-white.svg" alt="GitHub" width={30} height={30} className="invert dark:invert-0" />
                  </a>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/eydriannnnnn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors p-4 rounded-xl border border-[#C6C6C9] dark:border-[#333] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a]">
                    <Image src="/contact_icons/facebook/Facebook_Logo_Secondary.png" alt="Facebook" width={30} height={30} className="invert dark:invert-0" />
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/eydriannn/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-white transition-colors p-4 rounded-xl border border-[#C6C6C9] dark:border-[#333] hover:bg-neutral-100 dark:hover:bg-[#1a1a1a]">
                    <Image src="/contact_icons/instagram/Instagram_Glyph_White.svg" alt="Instagram" width={30} height={30} className="invert dark:invert-0" />
                  </a>
                </div>

                {/* Resume Download */}
                <div className="pt-4 flex justify-center lg:justify-start">
                   <a 
                     href="/RESUME-DEGUZMAN,ADRIAN.pdf" 
                     download="RESUME-DEGUZMAN,ADRIAN.pdf"
                     className="flex items-center gap-3 px-6 py-3 bg-[#E8E8E8] dark:bg-white dark:text-black font-bold rounded-full hover:bg-gray-300 dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95
                     border-[#C6C6C9] border-1"
                   >
                     <Download />
                     Download CV
                   </a>
                </div>
             </div>
          </motion.div>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;
