import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SparkleIcon, ChromeIcon } from "@/components/ui/Icons";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/40 backdrop-blur-lg border-b border-border/40 shadow-sm"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/icons/icon-32.png" alt="OpenInsight" className="w-6 h-6" />
          <span className="font-medium font-serif text-lg tracking-tight">OpenInsight</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Security
          </a>
          <a href="#customize" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Customize
          </a>
        </nav>

        <a
          href="https://chrome.google.com/webstore"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
        >
          <ChromeIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Add to Chrome</span>
          <span className="sm:hidden">Install</span>
        </a>
      </div>
    </motion.header>
  );
};
