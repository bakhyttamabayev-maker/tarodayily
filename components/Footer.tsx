import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="container-app space-y-4">
        <Disclaimer />
        <div className="flex gap-4 text-sm">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
