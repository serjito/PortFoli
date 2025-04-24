'use client';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-12 bg-muted/30 p-6">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <h3 className="font-bold text-xl bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Sergio Matamoro
          </h3>
          <p className="text-muted-foreground max-w-xs">
            {t('footer.description')}
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">{t('footer.links')}</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.projects')}
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.skills')}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">{t('footer.connect')}</h4>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/serjito"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sergiomatamorodiaz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="sergiomdpro@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-4">{t('footer.legal')}</h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Sergio Matamoro Diaz {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
