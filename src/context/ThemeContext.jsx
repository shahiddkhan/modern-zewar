import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const lightTheme = {
  bg: "#FAF7F2",
  card: "#FFFFFF",
  text: "#1A1A1A",
  muted: "#777",
  gold: "#B5925A",
};

const darkTheme = {
  bg: "#0B0B0C",
  card: "linear-gradient(145deg, #0f0f10, #1a1a1c)",
  text: "#F5F5F5",
  muted: "#999",
  gold: "#D6B26E",
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        theme: isDark ? darkTheme : lightTheme,
      }}
    >
      <div
        style={{
          background: isDark ? darkTheme.bg : lightTheme.bg,
          minHeight: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
