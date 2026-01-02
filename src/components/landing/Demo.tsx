import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquare, Search, Check, ExternalLink } from "lucide-react";

export const Demo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<"explain" | "factcheck">("explain");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="features" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-[0.3em]">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Select. Understand. Verify.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Three simple steps to clarity. No setup required—just highlight and go.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          {/* Mock browser window */}
          <div className="bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-3 py-1.5 text-sm text-muted-foreground">
                  en.wikipedia.org/wiki/Article
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="p-8 md:p-12 relative">
              <p className="text-foreground leading-relaxed text-lg">
                <span className="bg-primary/20 px-1 py-0.5 rounded border-l-2 border-primary">
                  Ann Cook (fl. c. 1725 – c. 1760) was an English cookery book writer and innkeeper.
                </span>{" "}
                In 1754 she published{" "}
                <span className="italic">Professed Cookery (pictured)</span>, which went on
                to become one of the most influential culinary texts of its era.
              </p>

              {/* Popup overlay */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute left-8 md:left-20 top-24 bg-card/80 backdrop-blur-lg rounded-xl border border-border/50 shadow-xl w-80 overflow-hidden"
              >
                {/* Tabs */}
                <div className="flex border-b border-border">
                  <button
                    onClick={() => setActiveTab("explain")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "explain"
                        ? "text-foreground bg-secondary/50"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Explain
                  </button>
                  <button
                    onClick={() => setActiveTab("factcheck")}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                      activeTab === "factcheck"
                        ? "text-foreground bg-secondary/50"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Search className="w-4 h-4" />
                    Fact Check
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  {activeTab === "explain" ? (
                    <div className="space-y-3">
                      <p className="text-sm font-medium">
                        Ann Cook was an English writer and innkeeper who wrote cookbooks.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        She lived in England and worked as both a writer of cookbooks and an
                        innkeeper, with her activities recorded between approximately 1725 and 1760.
                      </p>
                      <div className="bg-muted/50 rounded-lg p-3 border-l-2 border-primary/50">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                          Example
                        </p>
                        <p className="text-sm italic text-muted-foreground">
                          She might have managed an inn where she served dishes from her own recipes.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-primary text-sm font-medium">
                          <Check className="w-4 h-4" />
                          True
                        </span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                          High confidence
                        </span>
                      </div>
                      <p className="text-sm font-medium">
                        Ann Cook was an English cookery book writer and innkeeper.
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Ann Cook is indeed recognized as an English cookery book writer and innkeeper,
                        with her period of activity documented as roughly between 1725 and 1760.
                      </p>
                      <div className="border-t border-border pt-3">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                          Sources
                        </p>
                        <a
                          href="#"
                          className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <span>oxfordreference.com</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
