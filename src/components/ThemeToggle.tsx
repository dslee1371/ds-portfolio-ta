import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "theme";

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && systemDark);
  root.classList.toggle("dark", isDark);
}

export function ThemeToggle() {
  const [theme, setTheme] = React.useState<ThemeMode>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    return stored ?? "system";
  });

  React.useEffect(() => {
    // 초기 적용 + 시스템 테마 변화 감지
    applyTheme(theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const stored = (localStorage.getItem(STORAGE_KEY) as ThemeMode | null) ?? "system";
      if (stored === "system") applyTheme("system");
    };
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, [theme]);

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-xl"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title="Toggle dark mode"
        aria-label="Toggle dark mode"
      >
        {/* 아이콘은 테마에 따라 교차 표시 */}
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>

      {/* 선택 드롭다운(옵션) - system / light / dark 수동 선택 */}
      <select
        className="hidden md:block bg-transparent text-sm outline-none"
        value={theme}
        onChange={(e) => setTheme(e.target.value as ThemeMode)}
        aria-label="Theme mode"
        title="Theme mode"
      >
        <option value="system">system</option>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </div>
  );
}
