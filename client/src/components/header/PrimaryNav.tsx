
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "./types";

interface PrimaryNavProps {
  items: NavItem[];
  onMoreClick: () => void;
  isMoreOpen: boolean;
}

export function PrimaryNav({ items, onMoreClick, isMoreOpen }: PrimaryNavProps) {
  const [location] = useLocation();

  return (
    <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8" role="navigation" aria-label="Primary navigation">
      {items.map(({ key, href, label }) => (
        <Link
          key={href}
          href={href}
          className={`font-semibold text-sm tracking-wide transition-all duration-200 px-3 py-2 rounded-md relative ${
            location === href
              ? "text-primary bg-primary/10"
              : "text-foreground hover:text-primary hover:bg-primary/5"
          }`}
        >
          {label}
        </Link>
      ))}
      
      <Button
        variant="ghost"
        size="sm"
        onClick={onMoreClick}
        className={`px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:bg-primary/5 ${
          isMoreOpen ? "bg-primary/10 text-primary" : "hover:text-primary"
        }`}
        aria-expanded={isMoreOpen}
        aria-haspopup="true"
        aria-controls="mega-menu"
      >
        <span className="mr-1">More</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`} />
      </Button>
    </nav>
  );
}
