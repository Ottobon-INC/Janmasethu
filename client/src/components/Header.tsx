
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Search, Menu, ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import { navItems, type NavItem } from '../config/navItems';

const Header = () => {
  const { language } = useLanguage();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sort nav items by priority and split into primary (first 4) and more items
  const sortedNavItems = [...navItems].sort((a, b) => a.priority - b.priority);
  const primaryNavItems = sortedNavItems.slice(0, 4);
  const moreNavItems = sortedNavItems.slice(4);

  // More label localization
  const moreLabel = {
    en: "More",
    hi: "और",
    te: "మరిన్ని"
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };

    if (moreDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [moreDropdownOpen]);

  // Handle keyboard navigation
  const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setMoreDropdownOpen(false);
      buttonRef.current?.focus();
    }
  };

  const handleMoreButtonClick = () => {
    setMoreDropdownOpen(!moreDropdownOpen);
  };

  const handleMoreButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setMoreDropdownOpen(!moreDropdownOpen);
    }
  };

  // Convert new config to old format for mobile menu compatibility
  const mobileNavItems = sortedNavItems.map(item => ({
    key: `nav_${item.id}`,
    href: item.href,
    label: item.label[language]
  }));

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-white/95 via-white/90 to-white/95 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center" data-testid="link-home-logo">
              <img 
                src="/JanmaSethu Logo.png" 
                alt="Janma Sethu Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" role="navigation" aria-label="Main navigation">
              {/* Primary Navigation Items */}
              {primaryNavItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`font-semibold text-sm tracking-wide transition-all duration-300 px-4 py-2.5 rounded-lg relative overflow-hidden group ${
                    location === item.href 
                      ? 'text-white bg-gradient-to-r from-primary to-primary/80 shadow-md' 
                      : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-sm'
                  }`}
                  data-testid={`link-nav-${item.id}`}
                >
                  <span className="relative z-10">{item.label[language]}</span>
                  {location !== item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                  )}
                </Link>
              ))}

              {/* More Dropdown */}
              {moreNavItems.length > 0 && (
                <div className="relative" ref={dropdownRef}>
                  <button
                    ref={buttonRef}
                    onClick={handleMoreButtonClick}
                    onKeyDown={handleMoreButtonKeyDown}
                    className={`font-semibold text-sm tracking-wide transition-all duration-300 px-4 py-2.5 rounded-lg flex items-center space-x-2 group relative overflow-hidden ${
                      moreDropdownOpen 
                        ? 'text-primary bg-gradient-to-r from-primary/15 to-primary/10 shadow-md' 
                        : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-sm'
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={moreDropdownOpen}
                    data-testid="button-nav-more"
                  >
                    <span className="relative z-10">{moreLabel[language]}</span>
                    <ChevronDown className={`w-4 h-4 transition-all duration-300 relative z-10 ${moreDropdownOpen ? 'rotate-180 text-primary' : 'group-hover:text-primary'}`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                  </button>

                  {/* Dropdown Menu */}
                  {moreDropdownOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-border/30 py-3 min-w-52 z-50 animate-in slide-in-from-top-2 duration-200"
                      role="menu"
                      onKeyDown={handleDropdownKeyDown}
                      data-testid="dropdown-nav-more"
                    >
                      {moreNavItems.map((item, index) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-5 py-3 text-sm font-medium transition-all duration-300 mx-2 rounded-lg group relative overflow-hidden ${
                            location === item.href
                              ? 'text-white bg-gradient-to-r from-primary to-primary/80 shadow-md'
                              : 'text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-sm'
                          }`}
                          role="menuitem"
                          onClick={() => setMoreDropdownOpen(false)}
                          data-testid={`link-nav-more-${item.id}`}
                          tabIndex={index === 0 ? 0 : -1}
                        >
                          <span className="relative z-10">{item.label[language]}</span>
                          {location !== item.href && (
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </nav>

            {/* Search & Language & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <Input
                  type="search"
                  placeholder="Search articles, treatments..."
                  className="pl-11 pr-4 py-2.5 rounded-full border-border/30 bg-background/60 backdrop-blur-sm focus:ring-primary/20 focus:border-primary/30 w-72 transition-all duration-300 shadow-sm hover:shadow-md focus:shadow-md"
                  data-testid="input-search"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 transition-colors duration-300" />
              </div>

              {/* Language Switcher */}
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Toggle menu"
                data-testid="button-mobile-menu"
              >
                <Menu className="text-xl" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        navItems={mobileNavItems}
      />
    </>
  );
};

export default Header;
