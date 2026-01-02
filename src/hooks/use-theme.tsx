import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type AccentColor = "teal" | "purple" | "pink" | "amber";
export type ThemeMode = "light" | "dark";

interface AccentDefinition {
  name: AccentColor;
  color: string;
  hsl: {
    h: number;
    s: number;
    l: number;
  };
}

export const ACCENT_COLORS: AccentDefinition[] = [
  { name: "teal", color: "hsl(160, 55%, 45%)", hsl: { h: 160, s: 55, l: 45 } },
  { name: "purple", color: "hsl(260, 60%, 55%)", hsl: { h: 260, s: 60, l: 55 } },
  { name: "pink", color: "hsl(330, 60%, 55%)", hsl: { h: 330, s: 60, l: 55 } },
  { name: "amber", color: "hsl(40, 80%, 50%)", hsl: { h: 40, s: 80, l: 50 } },
];

interface ThemeContextType {
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  getAccentDefinition: (name?: AccentColor) => AccentDefinition;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY_ACCENT = "openinsight-accent";
const STORAGE_KEY_THEME = "openinsight-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColorState] = useState<AccentColor>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY_ACCENT);
      if (stored && ACCENT_COLORS.some((a) => a.name === stored)) {
        return stored as AccentColor;
      }
    }
    return "teal";
  });

  const [themeMode, setThemeModeState] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY_THEME);
      if (stored === "light" || stored === "dark") {
        return stored;
      }
    }
    return "light";
  });

  const getAccentDefinition = (name?: AccentColor): AccentDefinition => {
    const targetName = name ?? accentColor;
    return ACCENT_COLORS.find((a) => a.name === targetName) ?? ACCENT_COLORS[0];
  };

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color);
    localStorage.setItem(STORAGE_KEY_ACCENT, color);
  };

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    localStorage.setItem(STORAGE_KEY_THEME, mode);
  };

  // Apply accent color CSS variables to :root
  useEffect(() => {
    const accent = getAccentDefinition(accentColor);
    const root = document.documentElement;

    // Set primary color based on accent
    // Adjust lightness for light/dark modes
    const lightL = accent.hsl.l - 5; // Slightly darker for light mode
    const darkL = accent.hsl.l + 5;  // Slightly brighter for dark mode

    // Update CSS custom properties
    root.style.setProperty(
      "--primary",
      `${accent.hsl.h} ${accent.hsl.s}% ${themeMode === "dark" ? darkL : lightL}%`
    );
    root.style.setProperty(
      "--primary-foreground",
      themeMode === "dark" ? "0 0% 100%" : "0 0% 100%" // Always white for these accents
    );
    root.style.setProperty(
      "--accent",
      `${(accent.hsl.h + 20) % 360} ${accent.hsl.s}% ${themeMode === "dark" ? darkL : lightL}%`
    );
    root.style.setProperty(
      "--ring",
      `${accent.hsl.h} ${accent.hsl.s}% ${themeMode === "dark" ? darkL : lightL}%`
    );
    root.style.setProperty(
      "--glow",
      `${accent.hsl.h} ${Math.min(accent.hsl.s + 10, 100)}% ${accent.hsl.l + 5}%`
    );
  }, [accentColor, themeMode]);

  // Apply theme mode (dark/light class)
  useEffect(() => {
    const root = document.documentElement;
    if (themeMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [themeMode]);

  return (
    <ThemeContext.Provider
      value={{
        accentColor,
        setAccentColor,
        themeMode,
        setThemeMode,
        getAccentDefinition,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
