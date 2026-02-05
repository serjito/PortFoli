'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/lib/language-context';
import { fadeIn, staggerChildren } from '@/lib/animations';

export function Hero() {
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-2 min-h-[90vh] flex items-center">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-orb-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full blur-3xl animate-orb-float"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-orb-float"
          style={{ animationDelay: '-2s' }}
        />
      </div>

      {/* Dot pattern background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#2a2a2a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:20px_20px]" />

      <motion.div
        className="container max-w-5xl"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <div className="text-center space-y-8">
          {/* Availability badge */}
          <motion.div variants={fadeIn}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              {t('hero.available') || 'Disponible para proyectos'}
            </span>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
              <span className="block">{t('hero.greeting')} </span>
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                  Sergio
                </span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
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
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#projects">
                {t('hero.cta.work')} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group hover:border-primary/50 transition-all duration-300"
            >
              <Link href="#contact">
                <Sparkles className="mr-2 h-4 w-4 group-hover:text-cyan-500 transition-colors" />
                {t('hero.cta.contact') || 'Contactar'}
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div className="mt-16 flex justify-center" variants={fadeIn}>
          <div className="relative group">
            {/* Glow effect */}
            <div
              className={`absolute -inset-1 rounded-2xl blur-xl transition-opacity duration-500 bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500 ${
                theme === 'dark'
                  ? 'opacity-40 group-hover:opacity-60'
                  : 'opacity-20 group-hover:opacity-40'
              }`}
            />
            {/* Stats card */}
            <div className="relative glass-card rounded-2xl overflow-hidden px-4 sm:px-8 py-6 sm:py-8 w-full max-w-3xl">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-16">
                {[
                  { count: '2+', label: t('hero.stats.years') },
                  { count: '10+', label: t('hero.stats.projects') },
                  { count: '10+', label: t('hero.stats.technologies') },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                      {item.count}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
