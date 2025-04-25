'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

const projects = [
  {
    id: 1,
    translationKey: 'project.frontend',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdfYydc2sHj8VUtYSXGnsa7DJfreWhEQuF1o3v',
    tags: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    demo: 'https://sergiomd.es/',
  },
  {
    id: 2,
    translationKey: 'project.renovatAutomate',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdDFKF0rNvFWcqXKjJ5QkimOTuMhZYGEtsrIfp',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Neon',
      'CLerk',
      'n8n',
    ],
    category: 'fullstack',
    demo: 'https://youtu.be/siqCQ1CRbBQ',
  },
  {
    id: 3,
    translationKey: 'project.frontend',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdVBgi9xYl8i6G4Scq2YKNgaCTW5ObhemfLBJk',
    tags: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    demo: 'https://monalisaterrassa.com/',
  },
  {
    id: 5,
    translationKey: 'project.vivaconsultors',
    image: 'https://youtu.be/4BjkuormUlA',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Neon',
      'CLerk',
      'Make',
    ],
    category: 'fullstack',
    demo: 'https://vivaconsultors.vercel.app/',
  },
  {
    id: 4,
    translationKey: 'project.frontend',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdHdXyZF6m1hXYi6PKpnZS38LvF2ujeToQfOUW',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    demo: 'https://renovatreformes.com/es',
  },
];

const categories = [
  { value: 'all', label: 'projects.filter.all' },
  { value: 'frontend', label: 'projects.filter.frontend' },
  { value: 'fullstack', label: 'projects.filter.fullstack' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <Button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              variant={
                activeCategory === category.value ? 'default' : 'outline'
              }
              className="rounded-full"
            >
              {t(category.label)}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: i * 0.1 },
                },
              }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-muted hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.translationKey}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-grow flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {t(project.translationKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {t(`${project.translationKey}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <Button variant="outline" size="sm" asChild></Button>
                    {project.demo && (
                      <Button size="sm" asChild>
                        <Link
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />{' '}
                          {t('projects.cta.demo')}
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
