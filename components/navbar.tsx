'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';

const navItems = [
  { href: '/', label: 'nav.home' },
  { href: '#about', label: 'nav.about' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#skills', label: 'nav.skills' },
  { href: '#contact', label: 'nav.contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('/');
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['contact', 'skills', 'projects', 'about'];
      let currentSection = '/';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = `#${section}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <nav
        className={cn(
          'max-w-5xl mx-auto flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 shadow-lg'
            : 'bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30'
        )}
      >
        {/* Logo */}
        <Link href="/" className="font-bold text-lg gradient-text">
          Sergio MD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 whitespace-nowrap"
            >
              {activeSection === item.href && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-xl -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={cn(
                  activeSection === item.href &&
                    'text-blue-600 dark:text-blue-400'
                )}
              >
                {t(item.label)}
              </span>
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col h-full">
                <div className="py-6 border-b">
                  <span className="font-bold text-2xl gradient-text">
                    Sergio MD
                  </span>
                </div>
                <nav className="flex flex-col gap-1 mt-6 flex-1">
                  {navItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={cn(
                        'text-lg font-medium px-4 py-3 rounded-xl transition-colors',
                        activeSection === item.href
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                    >
                      {t(item.label)}
                    </Link>
                  ))}
                </nav>
                <div className="py-6 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    © {new Date().getFullYear()} Sergio Matamoro
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
