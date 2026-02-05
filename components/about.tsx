'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  Server,
  Layout,
  Mail,
  CircleFadingPlus,
  MapPin,
  User,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { fadeIn } from '@/lib/animations';

const services = [
  {
    title: 'services.frontend',
    description: 'services.frontend.desc',
    icon: Layout,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'services.backend',
    description: 'services.backend.desc',
    icon: Server,
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    title: 'services.fullstack',
    description: 'services.fullstack.desc',
    icon: Code,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'services.automate',
    description: 'services.fullstack.desc',
    icon: CircleFadingPlus,
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-muted/30 px-2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <div className="relative group">
              {/* Multiple glow layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-blue-500 rounded-xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-500" />

              {/* Floating animation wrapper */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-white/50 dark:border-gray-800/50 shadow-2xl">
                  <Image
                    src="https://jp0572bw16.ufs.sh/f/diTndS4h0HxdAZVfqmt0iMVE3Lcmn4ZWGtYB1oRF2K9hjCfe"
                    alt="Sergio md"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold gradient-text">{t('about.role')}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.description2')}
            </p>

            {/* Info cards grid */}
            <div className="grid grid-cols-2 gap-4 pr-2 md:pr-0">
              <div className="glass-card rounded-xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  {t('about.name')}
                </div>
                <p className="font-medium">Sergio Matamoro Diaz</p>
              </div>
              <div className="glass-card rounded-xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  {t('about.email')}
                </div>
                <p className="font-medium text-sm">sergiomdpro@gmail.com</p>
              </div>
              <div className="glass-card rounded-xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {t('about.location')}
                </div>
                <p className="font-medium">Barcelona</p>
              </div>
              <div className="glass-card rounded-xl p-4 space-y-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {t('about.available')}
                </div>
                <p className="font-medium text-green-600 dark:text-green-400">
                  {t('about.status')}
                </p>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="#contact">
                {t('about.contact')} <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Services cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: i * 0.1 },
                },
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-500 border-muted group hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div
                    className={`rounded-xl bg-gradient-to-r ${service.gradient} p-3 w-fit mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t(service.title)}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
