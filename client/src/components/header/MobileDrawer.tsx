
import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import { X, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NavItem, NavSection } from "./types";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  quickLinks: NavItem[];
  sections: NavSection[];
  onSearchClick: () => void;
}

export function MobileDrawer({ isOpen, onClose, quickLinks, sections, onSearchClick }: MobileDrawerProps) {
  const [location] = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      
      document.addEventListener("keydown", handleEscape);
      
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 md:hidden"
        onClick={onClose}
        style={{ animation: "fadeIn 200ms ease-out" }}
      />
      
      {/* Drawer */}
      <div
        className="fixed left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl md:hidden overflow-y-auto"
        style={{
          animation: "slideInFromLeft 250ms ease-out",
          paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border px-4 py-3 flex items-center justify-between z-10">
          <h2 className="text-lg font-bold text-foreground">Menu</h2>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close menu">
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Search */}
        <div className="px-4 py-3 border-b border-border">
          <div className="relative" onClick={onSearchClick}>
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 cursor-pointer"
              readOnly
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="px-4 py-4 border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Quick Links
          </h3>
          <nav className="space-y-1">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center ${
                  location === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Sections */}
        <div className="px-4 py-4">
          {sections.map((section) => (
            <details key={section.title} className="group mb-4">
              <summary className="flex items-center justify-between cursor-pointer list-none px-3 py-2.5 rounded-lg hover:bg-muted min-h-[44px]">
                <span className="text-sm font-semibold text-foreground">{section.title}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>
              <div className="mt-2 ml-3 space-y-1">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors min-h-[44px] flex items-center ${
                      location === item.href
                        ? "text-primary font-medium"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                    }`}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
