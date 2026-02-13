"use client";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", saved);
    setDark(saved);
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  return <button aria-label="Переключить тему" onClick={toggle} className="rounded border px-3 py-1 text-sm">{dark ? "Светлая" : "Тёмная"}</button>;
}
