import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SakhiTry = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/sakhi">
          <Button variant="ghost" className="rounded-full" data-testid="button-back-sakhi">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sakhi
          </Button>
        </Link>
      </div>

      {/* Blank Page Content */}
      <div className="text-center py-32">
        <h1 className="text-4xl font-bold text-foreground font-serif mb-4">
          Coming Soon
        </h1>
        <p className="text-muted-foreground">
          This page is currently under development.
        </p>
      </div>
    </div>
  );
};

export default SakhiTry;