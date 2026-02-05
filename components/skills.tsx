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
  GitBranch,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useLanguage } from '@/lib/language-context';
import { fadeIn } from '@/lib/animations';

const skillCategories = [
  {
    title: 'skills.category.frontend',
    gradient: 'from-blue-500 to-cyan-500',
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
    gradient: 'from-sky-500 to-blue-500',
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
    gradient: 'from-pink-500 to-rose-500',
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

  return (
    <section id="skills" className="py-20 bg-muted/30 px-2 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded" />
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
              <div className="glass-card rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-500 group">
                {/* Category header with gradient */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}
                  >
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{t(category.title)}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <TooltipProvider>
                    {category.skills.map((skill, index) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <motion.div
                            className="flex flex-col items-center gap-2 cursor-pointer group/skill"
                            whileHover={{
                              y: -5,
                              transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                              },
                            }}
                          >
                            <div
                              className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-5 group-hover/skill:shadow-lg transition-all duration-300 relative overflow-hidden`}
                            >
                              {/* Glow effect on hover */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                              />
                              <skill.icon
                                className={`w-7 h-7 relative z-10 text-gray-700 dark:text-gray-300 group-hover/skill:text-transparent group-hover/skill:bg-gradient-to-r group-hover/skill:${category.gradient} group-hover/skill:bg-clip-text transition-all duration-300`}
                              />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                              {skill.name}
                            </span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent
                          className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0"
                        >
                          <p>
                            {t('skills.expert')} {skill.name}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
