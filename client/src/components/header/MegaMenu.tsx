
import { useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import type { NavSection } from "./types";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sections: NavSection[];
}

export function MegaMenu({ isOpen, onClose, sections }: MegaMenuProps) {
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mega-menu"
      ref={menuRef}
      className="hidden lg:block absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg rounded-b-xl overflow-hidden transition-all duration-200 ease-out"
      style={{
        animation: isOpen ? "slideDown 200ms ease-out" : "",
      }}
      role="dialog"
      aria-label="More navigation options"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                {section.title}
              </h3>
              {section.description && (
                <p className="text-xs text-muted-foreground mb-3">{section.description}</p>
              )}
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-sm transition-colors duration-150 py-1 ${
                        location === item.href
                          ? "text-primary font-medium"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
