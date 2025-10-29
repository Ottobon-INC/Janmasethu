
import { useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NavItem } from "./types";

interface TabletPillsProps {
  items: NavItem[];
  onMoreClick: () => void;
  isMoreOpen: boolean;
}

export function TabletPills({ items, onMoreClick, isMoreOpen }: TabletPillsProps) {
  const [location] = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hidden md:flex lg:hidden items-center border-t border-border bg-white/95 backdrop-blur-sm">
      <div
        ref={scrollRef}
        className="flex-1 overflow-x-auto scroll-smooth hide-scrollbar"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <nav className="flex items-center space-x-2 px-4 py-2 min-w-max" role="navigation" aria-label="Tablet navigation">
          {items.map(({ key, href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                location === href
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              style={{ scrollSnapAlign: "start" }}
            >
              {label}
            </Link>
          ))}
          
          <Button
            variant={isMoreOpen ? "default" : "outline"}
            size="sm"
            onClick={onMoreClick}
            className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
            aria-expanded={isMoreOpen}
            aria-haspopup="true"
          >
            More
            <ChevronDown className={`ml-1 w-3 h-3 transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`} />
          </Button>
        </nav>
      </div>
    </div>
  );
}
