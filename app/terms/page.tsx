'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export default function TermsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('legal.back')}
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-2">{t('legal.terms.title')}</h1>
          <p className="text-muted-foreground mb-8">
            {t('legal.lastUpdated')}: {t('legal.terms.date')}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.intro.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.terms.intro.content')}
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.services.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('legal.terms.services.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('legal.terms.services.item1')}</li>
                <li>{t('legal.terms.services.item2')}</li>
                <li>{t('legal.terms.services.item3')}</li>
                <li>{t('legal.terms.services.item4')}</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.intellectual.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.terms.intellectual.content')}
              </p>
            </section>

            {/* User Obligations */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.obligations.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('legal.terms.obligations.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('legal.terms.obligations.item1')}</li>
                <li>{t('legal.terms.obligations.item2')}</li>
                <li>{t('legal.terms.obligations.item3')}</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.liability.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.terms.liability.content')}
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.modifications.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.terms.modifications.content')}
              </p>
            </section>

            {/* Applicable Law */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.law.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.terms.law.content')}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.terms.contact.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.terms.contact.content')}
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> sergiomdpro@gmail.com
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
