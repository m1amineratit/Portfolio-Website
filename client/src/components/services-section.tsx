import { ServiceCard } from "./service-card";
import { motion } from "framer-motion";
import { Server, Database, Code, Globe, Zap, Layers } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Backend API Development",
            description: "Robust and scalable RESTful APIs built with Django and Django Rest Framework, ensuring secure and efficient data communication.",
            icon: Server,
        },
        {
            title: "Custom Business Systems",
            description: "Tailored CRM and management tools designed to streamline your business operations and improve productivity.",
            icon: Database,
        },
        {
            title: "Web Scraping & Automation",
            description: "Automated data extraction and process automation solutions to save time and gather valuable business intelligence.",
            icon: Globe,
        },
        {
            title: "E-commerce Backend",
            description: "Secure and scalable backend solutions for e-commerce platforms, including payment gateway integration and order management.",
            icon: Zap,
        },
        {
            title: "API Integration",
            description: "Seamless integration of third-party APIs and optimization of existing backend systems for better performance.",
            icon: Layers,
        },
        {
            title: "MVP & SaaS Development",
            description: "Rapid development of Minimum Viable Products and scalable SaaS backends to help you launch your ideas faster.",
            icon: Code,
        },
    ];

    return (
        <section id="services" className="w-full min-w-full h-[100svh] snap-start overflow-y-auto py-20 px-6">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-heading font-bold mb-4">My Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Specialized backend development services tailored to your business needs, from custom API development to complex system architecture.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
