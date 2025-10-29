import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Search, Menu, ChevronDown } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { PrimaryNav } from "./header/PrimaryNav";
import { MegaMenu } from "./header/MegaMenu";
import { TabletPills } from "./header/TabletPills";
import { MobileDrawer } from "./header/MobileDrawer";
import { SearchPanel } from "./header/SearchPanel";
import { NavSearchButton } from "./header/NavSearchButton";
import { NavCTA } from "./header/NavCTA";
import { useDisclosure } from "./header/useDisclosure";
import { useStickyHeader } from "./header/useStickyHeader";
import type { NavItem, NavSection } from "./header/types";

const Header = () => {
  const { t } = useLanguage();
  const [location] = useLocation();
  const { isScrolled } = useStickyHeader();
  const megaMenu = useDisclosure();
  const mobileDrawer = useDisclosure();
  const searchPanel = useDisclosure();

  // Mobile menu gets all items
  const allNavItems = [
    { key: "nav_home", href: "/", label: t("nav_home") },
    { key: "nav_knowledge", href: "/knowledge", label: t("nav_knowledge") },
    { key: "nav_treatments", href: "/treatments", label: t("nav_treatments") },
    { key: "nav_sakhi", href: "/sakhi", label: t("nav_sakhi") },
    { key: "nav_life", href: "/life-stages", label: t("nav_life") },
    { key: "nav_success", href: "/success-stories", label: t("nav_success") },
    { key: "nav_blog", href: "/blog", label: t("nav_blog") },
    { key: "nav_experts", href: "/experts", label: t("nav_experts") },
    { key: "nav_investors", href: "/investors", label: t("nav_investors") },
  ];

  // Primary navigation items (shown in all layouts)
  const primaryNavItems: NavItem[] = [
    { key: "nav_home", href: "/", label: t("nav_home") },
    { key: "nav_knowledge", href: "/knowledge", label: t("nav_knowledge") },
    { key: "nav_treatments", href: "/treatments", label: t("nav_treatments") },
    { key: "nav_sakhi", href: "/sakhi", label: t("nav_sakhi") },
  ];

  // Mega menu sections (desktop) and drawer sections (mobile)
  const megaMenuSections: NavSection[] = [
    {
      title: "Explore",
      items: [
        { key: "nav_life", href: "/life-stages", label: t("nav_life") },
        { key: "nav_success", href: "/success-stories", label: t("nav_success") },
      ],
    },
    {
      title: "Resources",
      description: "Latest insights and stories",
      items: [
        { key: "nav_blog", href: "/blog", label: t("nav_blog") },
        { key: "nav_experts", href: "/experts", label: t("nav_experts") },
      ],
    },
    {
      title: "Company",
      items: [
        { key: "nav_investors", href: "/investors", label: t("nav_investors") },
      ],
    },
  ];

  // Quick links for mobile drawer
  const mobileQuickLinks: NavItem[] = [
    ...primaryNavItems,
    { key: "cta", href: "/sakhi/try", label: "Book Consultation" },
  ];

  // Global "/" shortcut to open search
  useEffect(() => {
    const handleSlashKey = (e: KeyboardEvent) => {
      if (e.key === "/" && e.target === document.body && !searchPanel.isOpen) {
        e.preventDefault();
        searchPanel.open();
      }
    };

    window.addEventListener("keydown", handleSlashKey);
    return () => window.removeEventListener("keydown", handleSlashKey);
  }, [searchPanel]);

  // Handle ESC key to collapse mega menu
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && megaMenu.isOpen) {
        megaMenu.close();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [megaMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white/95 border-b border-border transition-all duration-300 ${
          isScrolled ? "shadow-md backdrop-blur-sm" : ""
        }`}
      >
        <div className="container mx-auto px-3 md:px-4">
          {/* Main Row */}
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start gap-0 flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src="/JanmaSethu Logo.png"
                  alt="JanmaSethu Logo"
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? "w-8 h-8 sm:w-10 sm:h-10" : "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
                  }`}
                />
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-black font-bold font-serif transition-all duration-300 ${
                      isScrolled ? "text-base sm:text-lg" : "text-base sm:text-lg md:text-xl"
                    }`}
                  >
                    Janma
                  </span>
                  <span
                    className={`font-bold font-serif transition-all duration-300 ${
                      isScrolled ? "text-base sm:text-lg" : "text-base sm:text-lg md:text-xl"
                    }`}
                    style={{ color: "#60c4b8" }}
                  >
                    Sethu
                  </span>
                </div>
              </div>
              {!isScrolled && (
                <p className="text-[0.6rem] sm:text-[0.65rem] md:text-xs text-muted-foreground font-small text-left w-full pl-0 sm:pl-2 -mt-2 sm:-mt-3 transition-opacity duration-300">
                  Connecting Care & Parenthood
                </p>
              )}
            </Link>

            {/* Desktop Primary Navigation */}
            <PrimaryNav
              items={primaryNavItems}
              onMoreClick={megaMenu.toggle}
              isMoreOpen={megaMenu.isOpen}
            />

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
              {/* Search Button - Desktop/Tablet */}
              <div className="hidden md:block">
                <NavSearchButton onClick={searchPanel.open} />
              </div>

              {/* Search Icon - Mobile */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={searchPanel.open}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>

              {/* CTA */}
              <div className="hidden sm:block">
                <NavCTA />
              </div>

              {/* Language Switcher - Only on Sakhi Try page */}
              {typeof window !== "undefined" && window.location.pathname === "/sakhi/try" && (
                <LanguageSwitcher />
              )}

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={mobileDrawer.open}
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Tablet Pills Row */}
          <TabletPills
            items={primaryNavItems}
            onMoreClick={megaMenu.toggle}
            isMoreOpen={megaMenu.isOpen}
          />
        </div>

        {/* Desktop Mega Menu */}
        <MegaMenu
          isOpen={megaMenu.isOpen}
          onClose={megaMenu.close}
          sections={megaMenuSections}
        />
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawer.isOpen}
        onClose={mobileDrawer.close}
        quickLinks={mobileQuickLinks}
        sections={megaMenuSections}
        onSearchClick={() => {
          mobileDrawer.close();
          searchPanel.open();
        }}
      />

      {/* Search Panel */}
      <SearchPanel isOpen={searchPanel.isOpen} onClose={searchPanel.close} />
    </>
  );
};

export default Header;