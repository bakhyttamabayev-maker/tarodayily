import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800">
      <div className="container-app flex items-center justify-between py-3">
        <Link href="/" className="font-semibold">Taro Daily</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/readings">Расклады</Link>
          <Link href="/cards">Карты</Link>
          <Link href="/blog">Блог</Link>
          <Link href="/subscribe">Подписка</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
