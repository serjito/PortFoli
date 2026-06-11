'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { fadeIn, staggerChildren } from '@/lib/animations';

function FlowDiagram() {
  const nodeStyle = {
    light: { fill: 'hsl(0 0% 100%)', stroke: 'hsl(38 10% 82%)', strokeWidth: 1.5 },
    active: { fill: 'hsl(16 95% 60% / 0.12)', stroke: 'hsl(16 95% 60%)', strokeWidth: 1.5 },
  };

  const nodes = [
    { id: 'webhook', x: 8, y: 68, label: 'Webhook', active: true },
    { id: 'n8n', x: 122, y: 68, label: 'N8N Flow', active: true },
    { id: 'api', x: 236, y: 68, label: 'REST API', active: false },
    { id: 'db', x: 122, y: 148, label: 'Database', active: false },
    { id: 'notify', x: 236, y: 148, label: 'Notify', active: false },
  ];

  const edges = [
    { x1: 84, y1: 82, x2: 122, y2: 82, delay: 0 },
    { x1: 198, y1: 82, x2: 236, y2: 82, delay: 0.6 },
    { x1: 158, y1: 98, x2: 158, y2: 148, delay: 1.2, vertical: true },
    { x1: 198, y1: 162, x2: 236, y2: 162, delay: 1.8 },
  ];

  return (
    <div className="relative w-full max-w-[340px] mx-auto opacity-80 dark:opacity-60">
      <svg viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Edge lines */}
        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
            stroke="hsl(220 10% 60% / 0.35)"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />
        ))}

        {/* Arrow heads */}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="hsl(220 10% 60% / 0.4)" />
          </marker>
          <marker id="arrow-accent" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0 0 L6 3 L0 6 Z" fill="hsl(16 95% 60%)" />
          </marker>
        </defs>

        {/* Animated signal dots */}
        {edges.map((e, i) => (
          <motion.circle
            key={`signal-${i}`}
            r={3}
            fill="hsl(16 95% 60%)"
            initial={e.vertical ? { cx: e.x1, cy: e.y1 } : { cx: e.x1, cy: e.y1 }}
            animate={e.vertical ? { cy: [e.y1, e.y2] } : { cx: [e.x1, e.x2] }}
            transition={{
              duration: 0.7,
              delay: e.delay,
              repeat: Infinity,
              repeatDelay: 3.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x} y={n.y}
              width={76} height={28}
              rx={6}
              fill={n.active ? 'hsl(16 95% 60% / 0.08)' : 'hsl(220 12% 9%)'}
              stroke={n.active ? 'hsl(16 95% 60% / 0.7)' : 'hsl(220 10% 22%)'}
              strokeWidth={1.5}
              className="dark:[fill:hsl(220_12%_9%)]"
            />
            <rect
              x={n.x}
              y={n.y}
              width={76}
              height={28}
              rx={6}
              fill={n.active ? 'hsl(16 95% 60% / 0.08)' : 'hsl(0 0% 100%)'}
              stroke={n.active ? 'hsl(16 95% 60% / 0.7)' : 'hsl(38 10% 82%)'}
              strokeWidth={1.5}
              className="dark:hidden"
            />
            <text
              x={n.x + 38}
              y={n.y + 18}
              textAnchor="middle"
              fontSize={9.5}
              fontFamily="var(--font-inter), system-ui"
              fontWeight={n.active ? '600' : '400'}
              fill={n.active ? 'hsl(16 85% 48%)' : 'hsl(220 8% 42%)'}
              className="dark:fill-[hsl(0_0%_75%)] select-none"
            >
              {n.label}
            </text>
            {n.active && (
              <motion.circle
                cx={n.x + 8}
                cy={n.y + 14}
                r={2.5}
                fill="hsl(16 95% 60%)"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </g>
        ))}

        {/* Connecting label */}
        <text x={160} y={200} textAnchor="middle" fontSize={8} fill="hsl(220 8% 50%)" fontFamily="var(--font-inter)" className="select-none">
          automation workflow
        </text>
      </svg>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { count: '4+', label: t('hero.stats.years') },
    { count: '10+', label: t('hero.stats.projects') },
    { count: '10+', label: t('hero.stats.technologies') },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 px-4 min-h-[90vh] flex items-center">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 60%, transparent 100%)',
        }}
      />

      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">

          {/* Left: Text content */}
          <motion.div
            className="md:col-span-3 space-y-5 md:space-y-7"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            {/* Available badge */}
            <motion.div variants={fadeIn}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 text-sm text-muted-foreground backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                {t('hero.available')}
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium"
              variants={fadeIn}
            >
              {t('hero.eyebrow')}
            </motion.p>

            {/* Main headline */}
            <motion.h1
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
              variants={fadeIn}
            >
              {t('hero.greeting')}{' '}
              <span className="text-primary">Sergio</span>
            </motion.h1>

            {/* Role description */}
            <motion.p
              className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg"
              variants={fadeIn}
            >
              {t('hero.role')}
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-3" variants={fadeIn}>
              <Button size="lg" asChild className="text-white shadow-md hover:shadow-lg hover:shadow-primary/20 transition-shadow">
                <Link href="#projects">
                  {t('hero.cta.work')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="hover:border-primary/50 transition-colors">
                <Link href="#contact">
                  {t('hero.cta.contact')}
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex gap-6 sm:gap-8 pt-4 border-t border-border/50"
              variants={fadeIn}
            >
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                >
                  <p className="text-2xl md:text-3xl font-bold font-display gradient-text">
                    {item.count}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Flow Diagram */}
          <motion.div
            className="hidden md:flex md:col-span-2 items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <FlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
