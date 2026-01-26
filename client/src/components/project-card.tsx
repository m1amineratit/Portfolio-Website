import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  index: number;
}

export function ProjectCard({ title, description, image, tags, link, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col bg-card/50 backdrop-blur-sm">
        <div className="relative overflow-hidden aspect-video">
          <img 
            src={image} 
            alt={title} 
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white flex items-center gap-2 bg-primary/90 px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              >
                View Project <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
