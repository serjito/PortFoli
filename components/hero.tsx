'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/language-context';

export function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-2">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:20px_20px]"></div>

      <motion.div
        className="container max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="text-center space-y-8">
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="block">{t('hero.greeting')} </span>
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Sergio
              </span>
            </h1>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            variants={fadeIn}
          >
            {t('hero.role')}
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
            variants={fadeIn}
          >
            <Button size="lg" asChild>
              <Link href="#projects">
                {t('hero.cta.work')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div className="mt-16 flex justify-center" variants={fadeIn}>
          <div className="relative">
            <div
              className={`absolute -inset-0.5 rounded-xl blur-xl opacity-75 bg-gradient-to-r from-primary to-blue-500 ${
                theme === 'dark' ? 'opacity-50' : 'opacity-30'
              }`}
            ></div>
            <div className="relative flex items-center justify-center rounded-xl overflow-hidden bg-card px-8 py-8 w-full max-w-3xl">
              <div className="grid grid-cols-3 gap-8 md:gap-16">
                {[
                  { count: '2+', label: t('hero.stats.years') },
                  { count: '10+', label: t('hero.stats.projects') },
                  { count: '10+', label: t('hero.stats.technologies') },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                      {item.count}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
