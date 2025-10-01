import { useLanguage } from '../i18n/LanguageProvider';
import { Button } from '@/components/ui/button';
import type { Lang } from '@/i18n/dictionary';

const FloatingLanguage = () => {
  const { lang, setLang } = useLanguage();

  const languages: Array<{ code: Lang; label: string }> = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिं' },
    { code: 'te', label: 'తె' },
  ];

  return (
    <div className="floating-lang md:hidden">
      <div className="flex flex-col space-y-2">
        {languages.map(({ code, label }) => (
          <Button
            key={code}
            variant="ghost"
            size="sm"
            onClick={() => setLang(code)}
            className={`w-12 h-12 rounded-full bg-white card-shadow flex items-center justify-center text-sm font-bold shrink-0 ${
              lang === code ? 'text-primary' : 'text-muted-foreground'
            }`}
            data-testid={`button-floating-language-${code}`}
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FloatingLanguage;
