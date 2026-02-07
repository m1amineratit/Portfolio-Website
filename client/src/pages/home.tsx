import { ThemeToggle } from "@/components/theme-toggle";
import { BackendProjectCard } from "@/components/backend-project-card";
import { SkillsSection } from "@/components/skills-section";
import { ServicesSection } from "@/components/services-section";
import { ProductSalesSection } from "@/components/product-sales-section";
import { HeroImage } from "@/components/hero-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award, Briefcase, Code, Calendar } from "lucide-react";
import profileImageNew from "@assets/profile_new.png";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const sectionIds = ["about", "products", "projects", "services", "skills", "experience", "contact"];
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("about");

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
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: 0.55,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="h-[100svh] w-full bg-background text-foreground selection:bg-primary/20 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold font-heading tracking-tight">byamine.dev</span>
            <div className="flex-1 hidden md:flex justify-center">
              <div className="flex items-center gap-2 rounded-full bg-card/80 border border-border/60 shadow-lg shadow-black/20 backdrop-blur-xl px-2 py-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "about"
                      ? "text-foreground bg-muted/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "products"
                      ? "text-foreground bg-muted/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "projects"
                      ? "text-foreground bg-muted/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "services"
                      ? "text-foreground bg-muted/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "skills"
                      ? "text-foreground bg-muted/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeSection === "contact"
                      ? "text-foreground bg-muted/60"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  Contact
                </button>
              </div>
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

      <div
        ref={sliderRef}
        className="h-[100svh] w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex"
      >
      {/* Hero / About Section */}
      <section id="about" className="w-full min-w-full h-[100svh] snap-start overflow-y-auto pt-32 pb-20 px-6">
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

      <ProductSalesSection />

      {/* Projects Section - Grid */}
      <section
        id="projects"
        className="w-full min-w-full h-[100svh] snap-start overflow-y-auto py-20 px-6 bg-secondary/30"
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
      <section id="experience" className="w-full min-w-full h-[100svh] snap-start overflow-y-auto py-20 px-6 bg-secondary/30">
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
      <section id="contact" className="w-full min-w-full h-[100svh] snap-start overflow-y-auto py-20 px-6 flex flex-col">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary">Contact</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Let’s build something reliable.</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Tell me about your project and I’ll respond with a clear plan, timeline, and next steps.
                This form is ready for your backend API endpoint.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Response within 24–48 hours
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  NDA-friendly and client-ready
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Clear scope and milestones
                </div>
              </div>
              <div className="mt-6 flex gap-5">
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

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-6 md:p-8 shadow-lg"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="grid gap-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="text-sm font-medium">
                    Full Name
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="mt-2 w-full rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="text-sm font-medium">
                    Email
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="mt-2 w-full rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="text-sm font-medium">
                    Company
                    <input
                      name="company"
                      type="text"
                      placeholder="Company or product"
                      className="mt-2 w-full rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                    />
                  </label>
                  <label className="text-sm font-medium">
                    Project Type
                    <select
                      name="projectType"
                      className="mt-2 w-full rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                      defaultValue="backend"
                    >
                      <option value="backend">Backend build</option>
                      <option value="api">API design</option>
                      <option value="saas">SaaS platform</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </label>
                </div>
                <label className="text-sm font-medium">
                  Project Details
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Briefly describe goals, timeline, and stack."
                    className="mt-2 w-full rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
                  />
                </label>
                <label className="flex items-start gap-2 text-xs text-muted-foreground">
                  <input type="checkbox" name="updates" className="mt-0.5" />
                  Send me occasional updates about new backend products and resources.
                </label>
                <Button size="lg" className="rounded-full">
                  Send Message
                </Button>
              </div>
            </motion.form>
          </div>
        </div>
        <footer className="mt-16 border-t border-border/40">
          <div className="container max-w-6xl mx-auto py-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-lg font-bold font-heading tracking-tight block mb-2">byamine.dev</span>
              <p className="text-sm text-muted-foreground">(c) 2024. All rights reserved.</p>
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
                onClick={() => scrollToSection("products")}
                className="hover:text-primary transition-colors"
              >
                Products
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
      </section>
      </div>
    </div>
  );
}

