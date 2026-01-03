import { SparkleIcon, CoffeeIcon } from "@/components/ui/Icons";
import { Github, Heart, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/icons/icon-48.png" alt="OpenInsight" className="w-5 h-5" />
            <span className="font-medium font-serif">OpenInsight</span>
            <span className="text-muted-foreground text-xs">•</span>
            <span className="text-muted-foreground text-xs">Epistemic Clarity Engine</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://openinsight.dev/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://github.com/david-saint/openinsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://donate.stripe.com/6oU28sf5f8X983M6TF2wU00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-xs items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 h-[36px] rounded-lg px-8 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg"
            >
              <CoffeeIcon className="w-4 h-4" />
              Buy me a coffee
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} OpenInsight. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            for truth seekers.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/david-saint/openinsight"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground bg-muted hover:bg-accent transition-colors w-8 h-8 rounded-[0.5rem] flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/david_saint_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground bg-muted hover:bg-accent transition-colors w-8 h-8 rounded-[0.5rem] flex items-center justify-center"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
