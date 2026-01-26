import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Shield, Server, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

interface ProjectFeatures {
  authentication?: boolean;
  apis?: boolean;
  database?: boolean;
  security?: boolean;
}

interface ProjectLinks {
  github?: string;
  api?: string;
  postman?: string;
}

interface BackendProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  features: ProjectFeatures;
  links: ProjectLinks;
  index: number;
}

export function BackendProjectCard({ title, description, techStack, features, links, index }: BackendProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border border-border/50 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card text-card-foreground overflow-hidden group hover:border-primary/50 relative">

        {/* Modern Gradient Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <CardContent className="p-8 flex-grow flex flex-col relative z-10">
          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 font-heading">
            {title}
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
            {description}
          </p>

          <div className="mb-6">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              Key Features
              <div className="h-px bg-border flex-grow" />
            </h4>
            <div className="flex flex-wrap gap-2">
              {features.authentication && (
                <Badge variant="outline" className="px-3 py-1 font-medium bg-background/50 backdrop-blur-sm">
                  <Shield className="w-3 h-3 mr-1.5 text-primary" />
                  Authentication
                </Badge>
              )}
              {features.apis && (
                <Badge variant="outline" className="px-3 py-1 font-medium bg-background/50 backdrop-blur-sm">
                  <Code className="w-3 h-3 mr-1.5 text-primary" />
                  REST/GraphQL APIs
                </Badge>
              )}
              {features.database && (
                <Badge variant="outline" className="px-3 py-1 font-medium bg-background/50 backdrop-blur-sm">
                  <Database className="w-3 h-3 mr-1.5 text-primary" />
                  Database Design
                </Badge>
              )}
              {features.security && (
                <Badge variant="outline" className="px-3 py-1 font-medium bg-background/50 backdrop-blur-sm">
                  <Shield className="w-3 h-3 mr-1.5 text-primary" />
                  Security
                </Badge>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              Tech Stack
              <div className="h-px bg-border flex-grow" />
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium hover:bg-secondary/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-8 pt-0 mt-auto relative z-10">
          {links.github && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 transition-all duration-300 hover:border-primary hover:text-primary animate-in fade-in"
              asChild
            >
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
