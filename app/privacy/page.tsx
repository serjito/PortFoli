'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language-context';

export default function PrivacyPage() {
  const { t, language } = useLanguage();

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

          <h1 className="text-4xl font-bold mb-2">{t('legal.privacy.title')}</h1>
          <p className="text-muted-foreground mb-8">
            {t('legal.lastUpdated')}: {t('legal.privacy.date')}
          </p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.intro.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.privacy.intro.content')}
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.collection.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('legal.privacy.collection.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('legal.privacy.collection.item1')}</li>
                <li>{t('legal.privacy.collection.item2')}</li>
                <li>{t('legal.privacy.collection.item3')}</li>
              </ul>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.usage.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('legal.privacy.usage.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('legal.privacy.usage.item1')}</li>
                <li>{t('legal.privacy.usage.item2')}</li>
                <li>{t('legal.privacy.usage.item3')}</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.protection.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.privacy.protection.content')}
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.cookies.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.privacy.cookies.content')}
              </p>
            </section>

            {/* Third Parties */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.thirdParties.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.privacy.thirdParties.content')}
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.rights.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('legal.privacy.rights.content')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>{t('legal.privacy.rights.item1')}</li>
                <li>{t('legal.privacy.rights.item2')}</li>
                <li>{t('legal.privacy.rights.item3')}</li>
                <li>{t('legal.privacy.rights.item4')}</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t('legal.privacy.contact.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t('legal.privacy.contact.content')}
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
