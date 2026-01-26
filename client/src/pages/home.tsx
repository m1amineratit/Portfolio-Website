import { ThemeToggle } from "@/components/theme-toggle";
import { BackendProjectCard } from "@/components/backend-project-card";
import { SkillsSection } from "@/components/skills-section";
import { ServicesSection } from "@/components/services-section";
import { HeroImage } from "@/components/hero-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award, Briefcase, Code, Calendar } from "lucide-react";
import profileImageNew from "@assets/profile_new.png";

export default function Home() {
  const backendProjects = [
    {
      title: "Restaurant Management System",
      description: "A comprehensive backend system for restaurant operations with menu management, order processing, table reservations, and staff management.",
      techStack: ["Django", "PostgreSQL", "SQLite", "Python"],
      features: {
        authentication: true,
        apis: true,
        database: true,
        security: true,
      },
      links: {
        github: "https://github.com/m1amineratit/Restaurant-Management-System",
      },
    },
    {
      title: "Book Distribution Expense Tracker",
      description: "A Django-based SaaS platform for managing book distribution with advanced search, expense tracking, and inventory management.",
      techStack: ["Django", "PostgreSQL", "SQLite", "Python"],
      features: {
        authentication: true,
        apis: true,
        database: true,
        security: true,
      },
      links: {
        github: "https://github.com/m1amineratit/Expense-Tracker-App",
      },
    },
    {
      title: "Movie Reservation System",
      description: "A comprehensive backend system for movie reservation services with user authentication, movie and showtime management, and seat reservation.",
      techStack: ["Django", "PostgreSQL", "SQLite", "Python"],
      features: {
        authentication: true,
        apis: true,
        database: true,
        security: true,
      },
      links: {
        github: "https://github.com/m1amineratit/Movie-Reservation-System",
      },
    },
    {
      title: "DailyDash Dashboard",
      description: "A modern Django-based dashboard application with tech news aggregation, live cryptocurrency prices, Pomodoro timer, and task management.",
      techStack: ["Django", "SQLite", "Python", "AJAX"],
      features: {
        authentication: true,
        apis: true,
        database: true,
        security: true,
      },
      links: {
        github: "https://github.com/m1amineratit/Daily-dash",
      },
    },
    {
      title: "Workout Tracker System",
      description: "A backend system for workout tracking applications with user authentication, workout plan creation, progress tracking, and report generation.",
      techStack: ["Django", "SQLite", "Python"],
      features: {
        authentication: true,
        apis: true,
        database: true,
        security: true,
      },
      links: {
        github: "https://github.com/m1amineratit/Workout-Tracker",
      },
    },
    {
      title: "E-Commerce API Platform",
      description: "A scalable RESTful API for e-commerce applications with user authentication, product management, order processing, and payment integration.",
      techStack: ["Django", "PostgreSQL", "Redis", "JWT", "Stripe API"],
      features: {
        authentication: true,
        apis: true,
        database: true,
        security: true,
      },
      links: {
        github: "https://github.com/m1amineratit/ecommerce-api",
        api: "https://api.example.com",
        postman: "https://www.postman.com/collection/example",
      },
    },
  ];

  const experiences = [
    {
      type: "Internship",
      title: "Backend Developer Intern",
      company: "Tech Company",
      period: "Summer 2025",
      description: "Developed RESTful APIs using Django, optimized database queries, implemented authentication systems, and designed secure backend architectures.",
      icon: Briefcase,
    },
    {
      type: "Freelance",
      title: "Freelance Backend Developer",
      company: "Various Clients",
      period: "2023 - Present",
      description: "Building custom backend solutions, SaaS platforms, and APIs for clients worldwide. Specializing in Django, database design, authentication systems, and scalable architecture.",
      icon: Code,
    },
    {
      type: "Certification",
      title: "Meta Backend Professional Certificate",
      company: "Meta (Coursera)",
      period: "2023",
      description: "Professional certification in backend development, covering API design, database management, authentication, and security best practices.",
      icon: Award,
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold font-heading tracking-tight">byamine.dev</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button
                size="sm"
                className="hidden sm:inline-flex rounded-full px-6"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero / About Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                Freelance Backend Developer
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                Hi, I'm <span className="text-primary">Amine</span> <br />
                Backend Developer & API Specialist
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                I build robust backend systems, RESTful APIs, and SaaS platforms for clients worldwide.
                Specializing in Django, database design, authentication systems, and scalable architecture.
                Available for custom projects and backend development consulting.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 text-base"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-muted"
                    asChild
                  >
                    <a href="https://github.com/m1amineratit" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-muted"
                    asChild
                  >
                    <a href="https://linkedin.com/in/m1amineratit" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-muted"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <HeroImage
                image={profileImageNew}
                alt="Profile"
                className="relative z-10"
              />

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 right-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
              <div className="absolute -z-10 bottom-10 left-10 w-56 h-56 bg-accent/20 rounded-full blur-[80px]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Grid */}
      <section
        id="projects"
        className="py-20 px-6 bg-secondary/30"
      >
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Backend Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A selection of SaaS platforms and custom backend projects showcasing API development, database design, authentication systems, and scalable architecture.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendProjects.map((project, index) => (
              <BackendProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience / Achievements Section */}
      <section id="experience" className="py-20 px-6 bg-secondary/30">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">Experience & Achievements</h2>
            <p className="text-muted-foreground max-w-xl">
              My professional journey as a freelance backend developer, including internships, client projects, and professional certifications.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {exp.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {exp.period}
                            </span>
                          </div>
                          <h3 className="text-lg font-heading font-semibold mb-1">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                          <p className="text-sm text-foreground leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm available for freelance backend development projects, SaaS platform development, API design, and custom backend solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="rounded-full px-8 h-12 text-base w-full sm:w-auto"
                asChild
              >
                <a href="mailto:contact@byamine.dev">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              <Button
                size="lg"
                variant="default"
                className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="mailto:contact@byamine.dev?subject=Project%20Inquiry">
                  Start a Project
                </a>
              </Button>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/m1amineratit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/m1amineratit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@byamine.dev"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/40">
        <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold font-heading tracking-tight block mb-2">byamine.dev</span>
            <p className="text-sm text-muted-foreground">© 2024. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
