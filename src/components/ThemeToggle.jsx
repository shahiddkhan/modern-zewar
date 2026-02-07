import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        border: `1px solid ${theme.gold}`,
        background: "transparent",
        color: theme.gold,
        padding: "6px 14px",
        borderRadius: "20px",
        cursor: "pointer",
        fontSize: "12px",
      }}
    >
      {isDark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}
