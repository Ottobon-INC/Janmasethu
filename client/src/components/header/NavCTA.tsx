
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function NavCTA() {
  return (
    <Link href="/sakhi/try">
      <Button size="sm" className="rounded-full px-4 py-2 font-semibold whitespace-nowrap min-h-[44px] md:min-h-0">
        Book Consultation
      </Button>
    </Link>
  );
}
