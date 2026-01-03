import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Lock, Shield, Eye, Server } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "Web Crypto API Encryption",
    description:
      "Your API key is encrypted using the browser's native Web Crypto API before being stored locally. Military-grade encryption, right in your browser.",
  },
  {
    icon: Server,
    title: "Process Isolation",
    description:
      "All AI requests run through sandboxed background service workers, completely isolated from webpage scripts. Malicious sites can't access your data.",
  },
  {
    icon: Eye,
    title: "Zero Data Collection",
    description:
      "Your key never leaves your browser except to communicate with OpenRouter. No analytics, no tracking, no server-side storage.",
  },
  {
    icon: Shield,
    title: "Local-First Architecture",
    description:
      "Everything happens on your machine. Your browsing history, selections, and explanations stay private by design.",
  },
];

export const Security = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [0, -100]);

  return (
    <section
      id="security"
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-[0.3em]">
            Security & Privacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Built for trust.
            <br />
            <span className="text-muted-foreground">By design.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy isn't an afterthought—it's the foundation. OpenInsight uses
            cutting-edge security practices to keep your data yours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="relative group p-6 rounded-2xl bg-card border border-border transition-all duration-300"
            >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex items-start gap-4 z-10">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 shadow-sm">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              Open source & auditable on{" "}
              <a href="https://github.com/david-saint/openinsight" className="text-foreground underline underline-offset-2 hover:text-primary transition-colors">
                GitHub
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
