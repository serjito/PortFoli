'use client';

import { motion } from 'framer-motion';
import {
  Braces,
  Code2,
  Database,
  FileJson,
  Globe,
  Layout,
  Laptop,
  Library,
  Server,
  Settings,
  Terminal,
  TestTube,
  GitBranch,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/lib/language-context';

const skillCategories = [
  {
    title: 'skills.category.frontend',
    skills: [
      { name: 'HTML/CSS', icon: Layout },
      { name: 'JavaScript', icon: FileJson },
      { name: 'TypeScript', icon: Code2 },
      { name: 'React.js', icon: Globe },
      { name: 'Next.js', icon: Library },
      { name: 'Tailwind CSS', icon: Laptop },
    ],
  },
  {
    title: 'skills.category.backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Settings },
      { name: 'MongoDB', icon: Database },
      { name: 'PostgreSQL', icon: Database },
      { name: 'Docker', icon: Terminal },
    ],
  },
  {
    title: 'skills.category.tools',
    skills: [
      { name: 'Git', icon: Braces },
      { name: 'Make.com', icon: Settings },
      { name: 'N8N', icon: GitBranch },
      { name: 'VS Code', icon: Code2 },
      { name: 'Postman', icon: Globe },
    ],
  },
];

export function Skills() {
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
    <section id="skills" className="py-20 bg-muted/30 px-2">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: categoryIndex * 0.2 },
                },
              }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">{t(category.title)}</h3>
                <div className="grid grid-cols-2 gap-6">
                  <TooltipProvider>
                    {category.skills.map((skill, index) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className="flex flex-col items-center gap-2 cursor-pointer group"
                            whileHover={{ scale: 1.05 }}
                            transition={{
                              type: 'spring',
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <div className="p-4 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                              <skill.icon className="w-8 h-8 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {t('skills.expert')} {skill.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
