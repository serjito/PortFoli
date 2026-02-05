'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  ExternalLink,
  Eye,
  Lightbulb,
  AlertCircle,
  Wrench,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { fadeIn } from '@/lib/animations';

interface Project {
  id: number;
  translationKey: string;
  image: string;
  tags: string[];
  category: string;
  demo: string;
}

const projects: Project[] = [
  {
    id: 6,
    translationKey: 'project.equipoCreativo',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdDoEoTfNvFWcqXKjJ5QkimOTuMhZYGEtsrIfp',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'N8N',
    ],
    category: 'fullstack',
    demo: '',
  },
  {
    id: 7,
    translationKey: 'project.crmInmobiliario',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdZaXC8yU9yqvG07TMm4uZdbaC5LpoQjzDAVUN',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'N8N',
      'WhatsApp AI',
    ],
    category: 'fullstack',
    demo: '',
  },
  {
    id: 8,
    translationKey: 'project.b2bAyudas',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0Hxd09S2HezuZiMBFUqRlAtm64on5TsNVWbPdfe0',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'N8N',
    ],
    category: 'fullstack',
    demo: '',
  },
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
      'Clerk',
      'N8N',
    ],
    category: 'fullstack',
    demo: 'https://youtu.be/siqCQ1CRbBQ',
  },
  {
    id: 3,
    translationKey: 'project.monalisa',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0HxdVBgi9xYl8i6G4Scq2YKNgaCTW5ObhemfLBJk',
    tags: ['Nextjs', 'TypeScript', 'Tailwind CSS'],
    category: 'frontend',
    demo: 'https://monalisaterrassa.com/',
  },
  {
    id: 5,
    translationKey: 'project.vivaconsultors',
    image:
      'https://jp0572bw16.ufs.sh/f/diTndS4h0Hxd9n0AAxprZQqHtUgMGfsEdDmSXPNycB8akw1r',
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'Neon',
      'Clerk',
      'Make',
    ],
    category: 'fullstack',
    demo: 'https://youtu.be/4BjkuormUlA',
  },
  {
    id: 4,
    translationKey: 'project.renovatWeb',
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

const MAX_VISIBLE_TAGS = 4;

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-2">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded" />
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
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-0 shadow-lg'
                  : 'hover:border-blue-400'
              }`}
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
              <Card
                className="overflow-hidden h-full flex flex-col border-muted group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image container with overlay */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={t(project.translationKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay with actions */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Button
                      size="sm"
                      className="bg-white/90 text-black hover:bg-white"
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      {t('projects.cta.details')}
                    </Button>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <Badge
                      className={`${
                        project.category === 'fullstack'
                          ? 'bg-gradient-to-r from-blue-600 to-sky-500'
                          : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                      } text-white border-0`}
                    >
                      {project.category === 'fullstack'
                        ? 'Full Stack'
                        : 'Frontend'}
                    </Badge>
                  </div>
                </div>

                <CardContent className="flex-grow flex flex-col p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t(project.translationKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow text-sm line-clamp-2">
                    {t(`${project.translationKey}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, MAX_VISIBLE_TAGS).map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > MAX_VISIBLE_TAGS && (
                      <Badge
                        variant="outline"
                        className="text-xs text-muted-foreground"
                      >
                        +{project.tags.length - MAX_VISIBLE_TAGS}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto p-0 [&>button]:hidden rounded-xl sm:rounded-2xl">
          {selectedProject && (
            <>
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Hero Image */}
              <div className="relative h-48 sm:h-64 md:h-80 w-full">
                <Image
                  src={selectedProject.image}
                  alt={t(selectedProject.translationKey)}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6">
                  <Badge
                    className={`${
                      selectedProject.category === 'fullstack'
                        ? 'bg-gradient-to-r from-blue-600 to-sky-500'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600'
                    } text-white border-0 mb-2 text-xs sm:text-sm`}
                  >
                    {selectedProject.category === 'fullstack'
                      ? 'Full Stack'
                      : 'Frontend'}
                  </Badge>
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {t(selectedProject.translationKey)}
                    </DialogTitle>
                  </DialogHeader>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Description */}
                <DialogDescription className="text-base text-foreground">
                  {t(`${selectedProject.translationKey}.fullDescription`) !==
                  `${selectedProject.translationKey}.fullDescription`
                    ? t(`${selectedProject.translationKey}.fullDescription`)
                    : t(`${selectedProject.translationKey}.description`)}
                </DialogDescription>

                {/* Problem Section */}
                {t(`${selectedProject.translationKey}.problem`) !==
                  `${selectedProject.translationKey}.problem` && (
                  <div className="glass-card rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-red-500/10">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <h4 className="font-semibold text-lg">
                        {t('projects.detail.problem')}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {t(`${selectedProject.translationKey}.problem`)}
                    </p>
                  </div>
                )}

                {/* Solution Section */}
                {t(`${selectedProject.translationKey}.solution`) !==
                  `${selectedProject.translationKey}.solution` && (
                  <div className="glass-card rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-green-500/10">
                        <Lightbulb className="w-5 h-5 text-green-500" />
                      </div>
                      <h4 className="font-semibold text-lg">
                        {t('projects.detail.solution')}
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      {t(`${selectedProject.translationKey}.solution`)}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Wrench className="w-5 h-5 text-blue-500" />
                    </div>
                    <h4 className="font-semibold text-lg">
                      {t('projects.detail.technologies')}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-sm px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {selectedProject.demo && (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                    >
                      <Link
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t('projects.cta.demo')}
                      </Link>
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    {t('projects.detail.close')}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
