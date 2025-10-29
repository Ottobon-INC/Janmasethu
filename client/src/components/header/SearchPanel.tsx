
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchPanel({ isOpen, onClose }: SearchPanelProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Recent/suggested queries (placeholder data)
  const recentQueries = ["IVF treatment", "Fertility specialist", "Success stories"];
  const suggestedCategories = [
    { label: "Knowledge Hub", href: "/knowledge" },
    { label: "Treatments", href: "/treatments" },
    { label: "Expert Doctors", href: "/experts" },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      inputRef.current?.focus();
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      
      // Global shortcut: "/" to open search
      const handleSlash = (e: KeyboardEvent) => {
        if (e.key === "/" && !isOpen && e.target === document.body) {
          e.preventDefault();
          onClose(); // This will toggle via parent
        }
      };
      
      document.addEventListener("keydown", handleEscape);
      window.addEventListener("keydown", handleSlash);
      
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleEscape);
        window.removeEventListener("keydown", handleSlash);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/knowledge?search=${encodeURIComponent(searchQuery.trim())}`;
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={onClose}
        style={{ animation: "fadeIn 150ms ease-out" }}
      />
      
      {/* Panel */}
      <div
        className="fixed top-[10vh] left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
        style={{ animation: "scaleIn 200ms ease-out" }}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Search Input */}
        <form onSubmit={handleSearch} className="border-b border-border">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search for treatments, articles, experts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 pl-12 pr-4 py-4 text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </form>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4">
          {!searchQuery && (
            <>
              {/* Recent Queries */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-2">
                  Recent
                </h3>
                <div className="space-y-1">
                  {recentQueries.map((query) => (
                    <button
                      key={query}
                      onClick={() => setSearchQuery(query)}
                      className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-left min-h-[44px]"
                    >
                      <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-foreground">{query}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Suggested Categories */}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 px-2">
                  Browse
                </h3>
                <div className="space-y-1">
                  {suggestedCategories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-muted transition-colors min-h-[44px]"
                    >
                      <span className="text-sm text-foreground">{category.label}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}

          {searchQuery && (
            <div className="text-center py-8 text-sm text-muted-foreground">
              {/* Placeholder: Connect real search results here */}
              Press Enter to search for "{searchQuery}"
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="border-t border-border px-4 py-2 bg-muted/30">
          <p className="text-xs text-muted-foreground text-center">
            Press <kbd className="px-1.5 py-0.5 rounded bg-background border border-border">ESC</kbd> to close
          </p>
        </div>
      </div>
    </>
  );
}
