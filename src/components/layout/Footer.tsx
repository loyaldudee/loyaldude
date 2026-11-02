import { ArrowUp } from "lucide-react";
import Logo from "./Logo";
import Pill from "@/components/ui/Pill";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <Logo className="h-5 w-auto" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            © {new Date().getFullYear()} {site.name}
          </span>
        </div>
        <Pill href="#home" variant="outline" className="!px-4 !py-2">
          Top <ArrowUp size={14} aria-hidden="true" />
        </Pill>
      </div>
    </footer>
  );
}
