
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavSearchButtonProps {
  onClick: () => void;
}

export function NavSearchButton({ onClick }: NavSearchButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="hidden md:flex items-center space-x-2 px-3 py-2 rounded-full border border-border hover:bg-muted transition-colors"
      aria-label="Open search"
    >
      <Search className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm text-muted-foreground">Search</span>
      <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs rounded bg-muted border border-border">/</kbd>
    </Button>
  );
}
