import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Brain, Target, Sparkle, ShieldCheck, Cog } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Verification",
    description:
      "Verify claims and facts the moment you encounter them. No more tab-switching or context loss.",
  },
  {
    icon: Brain,
    title: "Clarity through Explanation",
    description:
      "Clear, simplified explanations of complex text to enhance comprehension and understanding.",
  },
  {
    icon: ShieldCheck,
    title: "Performance-First",
    description:
      "Built for speed and responsiveness. Information retrieval never bottlenecks your reading.",
  },
  {
    icon: Sparkle,
    title: "Smart Pop-up Interface",
    description:
      "Minimalist interface that appears on text selection with context-aware actions.",
  },
  {
    icon: Target,
    title: "Structured Insights",
    description:
      "Clear, structured explanations and fact-check verdicts with clickable sources.",
  },
  {
    icon: Cog,
    title: "Advanced Customization",
    description:
      "Tailor your experience by selecting preferred language models via OpenRouter integration.",
  },
];

export const Features = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border  transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
