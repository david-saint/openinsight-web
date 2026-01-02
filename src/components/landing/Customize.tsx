import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Palette, Sparkles, Sliders } from "lucide-react";
import { useTheme, ACCENT_COLORS } from "@/hooks/use-theme";

export const Customize = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { themeMode, setThemeMode, accentColor, setAccentColor } = useTheme();

  const accents = ACCENT_COLORS;

  return (
    <section
      id="customize"
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-[0.3em]">
              Customization
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Your AI,
              <br />
              your rules.
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Choose your preferred language models via OpenRouter. Pick from dozens of
              cutting-edge AI models, adjust temperature and token limits, and personalize
              the experience with themes and accent colors.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Sparkles,
                  title: "Choose Your Model",
                  desc: "Access 100+ models including GPT-4, Claude, Llama, and more",
                },
                {
                  icon: Sliders,
                  title: "Fine-Tune Responses",
                  desc: "Adjust temperature and max tokens for precise control",
                },
                {
                  icon: Palette,
                  title: "Personalize Appearance",
                  desc: "Light/dark themes with multiple accent color options",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive settings preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className={`rounded-2xl border shadow-2xl overflow-hidden transition-colors duration-300 backdrop-blur-lg ${
                themeMode === "dark"
                  ? "bg-[#1a1f2e]/80 border-[#2a3040]/60"
                  : "bg-card/80 border-border/50"
              }`}
            >
              {/* Header */}
              <div
                className={`px-6 py-4 border-b flex items-center justify-center gap-2 ${
                  themeMode === "dark" ? "border-[#2a3040]" : "border-border"
                }`}
              >
                <img src="/icons/icon-48.png" alt="OpenInsight" className="w-5 h-5" />
                <span
                  className={`font-medium font-serif ${
                    themeMode === "dark" ? "text-white" : "text-foreground"
                  }`}
                >
                  OpenInsight
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {/* Model selection mock */}
                <div className="space-y-2">
                  <label
                    className={`text-xs uppercase tracking-wide ${
                      themeMode === "dark" ? "text-gray-400" : "text-muted-foreground"
                    }`}
                  >
                    <Settings className="w-3 h-3 inline mr-1" />
                    Intelligence
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div
                      className={`rounded-lg px-4 py-3 text-sm ${
                        themeMode === "dark"
                          ? "bg-[#252a3a] text-gray-300"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      GPT-4 Turbo
                    </div>
                    <div
                      className={`rounded-lg px-4 py-3 text-sm ${
                        themeMode === "dark"
                          ? "bg-[#252a3a] text-gray-300"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      Claude 3.5 Sonnet
                    </div>
                  </div>
                </div>

                {/* Theme toggle */}
                <div className="space-y-2">
                  <label
                    className={`text-xs uppercase tracking-wide ${
                      themeMode === "dark" ? "text-gray-400" : "text-muted-foreground"
                    }`}
                  >
                    <Palette className="w-3 h-3 inline mr-1" />
                    Appearance
                  </label>
                  <div
                    className={`rounded-lg p-1 flex ${
                      themeMode === "dark" ? "bg-[#252a3a]" : "bg-muted"
                    }`}
                  >
                    {(["light", "dark"] as const).map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setThemeMode(theme)}
                        className={`flex-1 py-2 px-4 text-sm rounded-md capitalize transition-colors ${
                          themeMode === theme
                            ? themeMode === "dark"
                              ? "bg-[#1a1f2e] text-white"
                              : "bg-card text-foreground shadow-sm"
                            : themeMode === "dark"
                            ? "text-gray-400"
                            : "text-muted-foreground"
                        }`}
                      >
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent color */}
                <div className="space-y-3">
                  <label
                    className={`text-xs uppercase tracking-wide ${
                      themeMode === "dark" ? "text-gray-400" : "text-muted-foreground"
                    }`}
                  >
                    Accent Color
                  </label>
                  <div className="flex gap-3">
                    {accents.map((accent) => (
                      <button
                        key={accent.name}
                        onClick={() => setAccentColor(accent.name)}
                        className={`w-10 h-10 rounded-full transition-transform ${
                          accentColor === accent.name
                            ? "scale-110 ring-2 ring-offset-2 ring-offset-background"
                            : "hover:scale-105"
                        }`}
                        style={{
                          backgroundColor: accent.color,
                          ...(accentColor === accent.name && {
                            ringColor: accent.color,
                          }),
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none -z-10 transition-colors duration-300"
              style={{
                backgroundColor: accents.find((a) => a.name === accentColor)?.color,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
