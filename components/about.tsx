'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Layout, Mail, CircleFadingPlus } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export function About() {
  const { t } = useLanguage();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/30 px-2">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-xl blur opacity-25"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="https://jp0572bw16.ufs.sh/f/diTndS4h0HxdAZVfqmt0iMVE3Lcmn4ZWGtYB1oRF2K9hjCfe"
                  alt="Sergio md"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeIn}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">{t('about.role')}</h3>
            <p className="text-muted-foreground">{t('about.description1')}</p>
            <p className="text-muted-foreground">{t('about.description2')}</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="font-medium">{t('about.name')}:</p>
                <p className="text-muted-foreground">Sergio Matamoro Diaz</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">{t('about.email')}:</p>
                <p className="text-muted-foreground">sergiomdpro@gmail.com</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">{t('about.location')}:</p>
                <p className="text-muted-foreground">Barcelona</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium">{t('about.available')}:</p>
                <p className="text-muted-foreground">{t('about.status')}</p>
              </div>
            </div>

            <Button asChild>
              <Link href="#contact">
                {t('about.contact')} <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            {
              title: 'services.frontend',
              description: 'services.frontend.desc',
              icon: Layout,
            },
            {
              title: 'services.backend',
              description: 'services.backend.desc',
              icon: Server,
            },
            {
              title: 'services.fullstack',
              description: 'services.fullstack.desc',
              icon: Code,
            },
            {
              title: 'services.automate',
              description: 'services.fullstack.desc',
              icon: CircleFadingPlus,
            },
          ].map((service, i) => (
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
              <Card className="h-full hover:shadow-md transition-shadow border-muted">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{t(service.title)}</h3>
                  <p className="text-muted-foreground">
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
