import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChromeIcon, SparkleIcon } from "@/components/ui/Icons";

export const CTA = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[75px] md:blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8"
          >
            <img src="/icons/icon-128.png" alt="OpenInsight" className="w-8 h-8" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start understanding
            <br />
            <span className="text-gradient">today.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of readers who've upgraded their browsing experience.
            Free to use, no account required.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-[0.5rem] text-base font-medium hover:opacity-90 transition-all glow hover:scale-[1.02]"
            >
              <ChromeIcon className="w-6 h-6" />
              Add to Chrome — It's Free
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-xs text-muted-foreground"
          >
            Works on Chrome, Edge, Brave, and other Chromium browsers
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
