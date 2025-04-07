'use client';

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      id="contact"
      className="min-h-screen bg-[#222831] text-[#EEEEEE] scroll-mt-20"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        },
      }}
    >
      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-6 text-[#00ADB5]">📩 Contact</h1>
        <p className="text-[#EEEEEE]/70 text-center mb-10">
          Have a project in mind or just want to say hi? Drop a message, and let's connect!
        </p>

        <form className="space-y-6 bg-[#393E46] p-8 rounded-2xl shadow-xl">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[#EEEEEE]/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-2 w-full rounded-xl bg-[#222831] text-[#EEEEEE] border border-[#2F343B] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#EEEEEE]/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl bg-[#222831] text-[#EEEEEE] border border-[#2F343B] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[#EEEEEE]/80">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Your message..."
              className="mt-2 w-full rounded-xl bg-[#222831] text-[#EEEEEE] border border-[#2F343B] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#00ADB5] hover:bg-[#00a1aa] px-6 py-3 rounded-xl text-white font-semibold transition duration-200 shadow-md hover:shadow-lg"
          >
            🚀 Send Message
          </button>
        </form>
      </main>
    </motion.div>
  );
}
