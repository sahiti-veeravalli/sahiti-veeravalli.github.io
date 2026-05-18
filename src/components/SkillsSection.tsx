import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Settings,
  Wrench,
  Brain,
  Sparkles,
  Code2,
  Box,
  Database,
  TerminalSquare,
  Network,
  Languages as LanguagesIcon,
  Cloud,
} from "lucide-react";

type Skill = { name: string; level: number; logo: string };
type Category = {
  title: string;
  icon: typeof Palette;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Languages",
    icon: LanguagesIcon,
    skills: [
      { name: "Java", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "JavaScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: [
      { name: "React", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Tailwind", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "TypeScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    ],
  },
  {
    title: "Backend",
    icon: Settings,
    skills: [
      { name: "Spring Boot", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "REST APIs", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Node.js", level: 82, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "JPA/Hibernate", level: 78, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg" },
    ],
  },
  {
    title: "Databases & Cloud",
    icon: Cloud,
    skills: [
      { name: "MySQL", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "AWS", level: 72, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "PostgreSQL (learning)", level: 50, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      // { name: "", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      // { name: "Docker", level: 78, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      // { name: "Linux", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Postman", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Jenkins", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    ],
  },
];

const fundamentals = [
  { name: "DSA", icon: Code2 },
  { name: "OOP", icon: Box },
  { name: "DBMS", icon: Database },
  { name: "Operating Systems", icon: TerminalSquare },
  { name: "Computer Networks", icon: Network },
];

const aiTools = [
  // { name: "GitHub Copilot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  // { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
  // { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  // { name: "Claude", logo: "https://claude.ai/favicon.ico" },
  // { name: "Postman AI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const SkillCard = ({ category, delay }: { category: Category; delay: number }) => {
  const Icon = category.icon;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex items-center gap-3 mb-2">
              <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" loading="lazy" />
              <span className="text-sm text-foreground/90">{skill.name}</span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden ml-9">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, hsl(var(--primary)), hsl(120 70% 45%))" }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.1, delay: delay + 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const PillRow = ({
  title,
  icon: Icon,
  items,
  delay,
}: {
  title: string;
  icon: typeof Brain;
  items: { name: string; icon?: typeof Brain; logo?: string }[];
  delay: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className="rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6"
    >
      <div className="flex items-center gap-3 mb-5">
        <Icon className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => {
          const ItemIcon = item.icon;
          return (
            <div
              key={item.name}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border bg-background/40 hover:border-primary/60 hover:shadow-[0_0_20px_-8px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              {ItemIcon ? (
                <ItemIcon className="w-4 h-4 text-primary" />
              ) : item.logo ? (
                <img src={item.logo} alt={item.name} className="w-5 h-5 object-contain" loading="lazy" />
              ) : null}
              <span className="text-sm text-foreground/90">{item.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const headRef = useRef(null);
  const inView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-3">Expertise</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Skills & <span className="text-gradient-primary">Tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {categories.map((c, i) => (
            <SkillCard key={c.title} category={c} delay={i * 0.1} />
          ))}
        </div>

        <div className="space-y-5">
          <PillRow title="Core CS Fundamentals" icon={Brain} items={fundamentals} delay={0.1} />
          <PillRow title="AI-Assisted Development" icon={Sparkles} items={aiTools} delay={0.2} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
