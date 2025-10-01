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
      <div className="flex flex-col items-center space-y-3">
        {languages.map(({ code, label }) => (
          <Button
            key={code}
            variant="ghost"
            size="sm"
            onClick={() => setLang(code)}
            className={`w-16 h-16 rounded-full bg-white card-shadow flex items-center justify-center text-sm font-bold shrink-0 border border-gray-100 hover:border-primary/30 transition-all duration-200 ${
              lang === code ? 'text-primary border-primary shadow-lg' : 'text-muted-foreground'
            }`}
            data-testid={`button-floating-language-${code}`}
            style={{ 
              minWidth: '64px', 
              minHeight: '64px',
              padding: '4px',
              lineHeight: code === 'te' ? '1.4' : '1.2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: code === 'te' ? '14px' : '12px'
            }}
          >
            <span 
              className="text-center block"
              style={{
                lineHeight: code === 'te' ? '1.4' : '1.2',
                letterSpacing: code === 'te' ? '0.5px' : 'normal',
                fontWeight: '600'
              }}
            >
              {label}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FloatingLanguage;
