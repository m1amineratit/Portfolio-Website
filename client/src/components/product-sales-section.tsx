import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Check,
  Download,
  Package,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const products = [
  {
    title: "Backend Starter Kit",
    badge: "Coming Soon",
    price: "Launching Soon",
    description:
      "Production-ready Django + PostgreSQL setup with auth, payments, testing, CI, and deployment docs.",
    icon: Package,
    highlights: [
      "Clean architecture + repo structure",
      "JWT + sessions + refresh flow",
      "Stripe billing and webhooks",
      "Docker + production checklist",
    ],
    cta: "Notify Me",
  },
  {
    title: "Backend Systems Ebook",
    badge: "Coming Soon",
    price: "Launching Soon",
    description:
      "A practical guide to building scalable APIs, data models, and reliable systems with clear patterns.",
    icon: BookOpen,
    highlights: [
      "API design patterns",
      "Database modeling playbook",
      "Security & auth essentials",
      "Performance & observability",
    ],
    cta: "Notify Me",
  },
  {
    title: "API Mastery Course",
    badge: "Coming Soon",
    price: "Launching Soon",
    description:
      "Step-by-step course that takes you from idea to deployed API with real-world workflows.",
    icon: PlayCircle,
    highlights: [
      "Build a full API from scratch",
      "Testing, CI/CD, deployments",
      "Scaling & caching strategies",
      "Project templates included",
    ],
    cta: "Notify Me",
  },
];

const trustItems = [
  {
    title: "Early Access",
    description: "Get notified before the public launch.",
    icon: Download,
  },
  {
    title: "Launch Updates",
    description: "Progress updates and release notes.",
    icon: ShieldCheck,
  },
  {
    title: "Founders Discount",
    description: "Early pricing for first supporters.",
    icon: Zap,
  },
  {
    title: "Quality Focus",
    description: "Built from real client systems.",
    icon: Sparkles,
  },
];

const faqs = [
  {
    q: "When will the products launch?",
    a: "They are in active development. Join the waitlist to get the launch date first.",
  },
  {
    q: "What is included?",
    a: "A starter kit, an ebook, and a course focused on production-ready backend systems.",
  },
  {
    q: "How do I get early access?",
    a: "Send a message through the contact form and I will add you to the early access list.",
  },
];

export function ProductSalesSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  return (
    <section id="products" className="w-full min-w-full h-[100svh] snap-start overflow-y-auto py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm px-8 py-10 md:px-12 md:py-12">
          <div className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-primary/20 blur-[90px]" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary">Coming Soon</Badge>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold leading-tight">
                New backend products are launching soon.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                I am finishing a starter kit, an ebook, and a course focused on production-ready backend systems.
                Join the waitlist to get early access and launch updates.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button size="lg" className="rounded-full px-7" onClick={() => scrollToSection("contact")}>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7"
                  onClick={() => scrollToSection("projects")}
                >
                  See Case Studies
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Starter kit, ebook, and course
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Production-first, practical guidance
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Early access notifications
                </span>
              </div>
            </motion.div>

            <Card className="border border-primary/40 bg-card/70 shadow-xl shadow-primary/10">
              <CardHeader className="pb-2">
                <Badge className="w-fit bg-primary/15 text-primary">Launch Bundle</Badge>
                <CardTitle className="text-2xl font-heading mt-3">Complete Backend Launch Pack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Everything you need to plan, build, and launch a reliable backend - in one bundle.
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-semibold">Coming Soon</span>
                  <span className="text-sm text-muted-foreground">join the waitlist</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    Starter Kit + Ebook + Course
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    Deployment checklist + templates
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5" />
                    Private updates for new releases
                  </li>
                </ul>
                <Button
                  size="lg"
                  className="w-full rounded-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Join Waitlist
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Early access list - launch updates - future bonuses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 bg-card/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {product.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-heading mt-4">{product.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-2xl font-semibold">{product.price}</div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {product.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full rounded-full"
                      onClick={() => scrollToSection("contact")}
                    >
                      {product.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card/40 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 md:p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">Why these products exist</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                I want backend developers to skip the boilerplate and start from a clear, production-ready
                foundation that mirrors real client work.
              </p>
              <p>
                Each product includes templates, architecture notes, and practical guidance so you can launch
                faster and focus on the features that matter.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/40 p-6 md:p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">Frequently asked questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border-b border-border/50 pb-3 last:border-b-0 last:pb-0">
                  <p className="text-sm font-semibold">{faq.q}</p>
                  <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 rounded-3xl border border-primary/30 bg-primary/10 px-6 py-6">
          <div>
            <h3 className="text-xl font-heading font-semibold">Want early access?</h3>
            <p className="text-sm text-muted-foreground">
              Join the waitlist and I will notify you when the products launch.
            </p>
          </div>
          <Button size="lg" className="rounded-full px-8" onClick={() => scrollToSection("contact")}>
            Join Waitlist
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
