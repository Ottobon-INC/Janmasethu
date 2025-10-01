import { useLanguage } from '../i18n/LanguageProvider';
import { Button } from '@/components/ui/button';
import type { Lang } from '@/i18n/dictionary';

const FloatingLanguage = () => {
  const { lang, setLang } = useLanguage();

  const languages: Array<{ code: Lang; label: string }> = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिं' },
    { code: 'te', label: 'తెలు' },
  ];

  return (
    <div className="floating-lang md:hidden">
      <div className="flex flex-col items-center space-y-3">
        {languages.map(({ code, label }) => (
          <Button
            key={code}
            variant="ghost"
            size="sm"
            onClick={() => setLang(code)}
            className={`w-14 h-14 rounded-full bg-white card-shadow flex items-center justify-center text-xs font-bold shrink-0 border border-gray-100 hover:border-primary/30 transition-all duration-200 ${
              lang === code ? 'text-primary border-primary shadow-lg' : 'text-muted-foreground'
            }`}
            data-testid={`button-floating-language-${code}`}
            style={{ 
              minWidth: '56px', 
              minHeight: '56px',
              padding: '0',
              lineHeight: '1.2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span className="text-center leading-tight">{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FloatingLanguage;
