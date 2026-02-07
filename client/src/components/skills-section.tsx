import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Cloud, 
  TestTube,
  Code,
  GitBranch,
  Box,
  Network,
  Bot,
  Zap,
} from "lucide-react";

interface Skill {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  category: "backend" | "database" | "devops" | "testing" | "automation";
}

const skills: Skill[] = [
  // Backend
  { name: "Django", icon: Server, category: "backend" },
  { name: "Python", icon: Code, category: "backend" },
  { name: "FastAPI", icon: Server, category: "backend" },
  { name: "REST APIs", icon: Network, category: "backend" },
  { name: "GraphQL", icon: Network, category: "backend" },
  
  // Databases
  { name: "PostgreSQL", icon: Database, category: "database" },
  { name: "MongoDB", icon: Database, category: "database" },
  { name: "Redis", icon: Database, category: "database" },
  { name: "SQLite", icon: Database, category: "database" },
  
  // DevOps
  { name: "Docker", icon: Box, category: "devops" },
  { name: "Git", icon: GitBranch, category: "devops" },
  { name: "Deployment", icon: Cloud, category: "devops" },
  
  // Testing
  { name: "Unit Testing", icon: TestTube, category: "testing" },
  { name: "Integration Testing", icon: TestTube, category: "testing" },
  
  // Automation & Scraping
  { name: "Web Scraping", icon: Bot, category: "automation" },
  { name: "Automation", icon: Zap, category: "automation" },
  { name: "Data Processing", icon: Code, category: "automation" },
];

const categoryConfig = {
  backend: {
    title: "Backend",
    icon: Server,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  database: {
    title: "Databases",
    icon: Database,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  devops: {
    title: "DevOps / Deployment",
    icon: Cloud,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  testing: {
    title: "Testing",
    icon: TestTube,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  automation: {
    title: "Automation & Scraping",
    icon: Bot,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
};

export function SkillsSection() {
  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;

  return (
    <section id="skills" className="w-full min-w-full h-[100svh] snap-start overflow-y-auto py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-heading font-bold mb-4">Skills & Tech Stack</h2>
          <p className="text-muted-foreground max-w-xl">
            A comprehensive toolkit for building robust, scalable backend systems and APIs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const config = categoryConfig[category];
            const categorySkills = skills.filter((skill) => skill.category === category);
            const Icon = config.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-2xl ${config.bgColor} flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${config.color}`} />
                      </div>
                      <CardTitle className="text-xl font-heading">{config.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <Badge
                            key={skill.name}
                            variant="secondary"
                            className="font-normal px-3 py-1.5 flex items-center gap-2"
                          >
                            {SkillIcon && <SkillIcon className="w-4 h-4" />}
                            {skill.name}
                          </Badge>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
