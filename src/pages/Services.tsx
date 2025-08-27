import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Shield, 
  Network, 
  Server, 
  Printer, 
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  Settings,
  Database,
  Wifi
} from "lucide-react";
import securityImage from "@/assets/security-systems.jpg";
import computerImage from "@/assets/computer-service.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Monitor,
      title: "Computer Sales & Service",
      description: "Complete computer solutions for your business and personal needs",
      image: computerImage,
      features: [
        "Desktop & Laptop Sales",
        "Hardware Repairs & Upgrades",
        "Operating System Installation",
        "Data Recovery Services",
        "Performance Optimization",
        "Virus Removal & Protection"
      ],
      pricing: "Starting from $50"
    },
    {
      icon: Shield,
      title: "CCTV & Security Systems",
      description: "Professional security solutions to protect your property and assets",
      image: securityImage,
      features: [
        "CCTV Camera Installation",
        "Security System Design",
        "Remote Monitoring Setup",
        "Access Control Systems",
        "Alarm System Integration",
        "24/7 Technical Support"
      ],
      pricing: "Starting from $200"
    },
    {
      icon: Network,
      title: "Networking Solutions",
      description: "Enterprise-grade networking for seamless connectivity",
      features: [
        "Network Design & Setup",
        "Wi-Fi Installation & Config",
        "Router & Switch Installation",
        "Network Security Setup",
        "Cable Management",
        "Network Troubleshooting"
      ],
      pricing: "Starting from $150"
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Comprehensive server solutions for your business operations",
      features: [
        "Server Installation & Setup",
        "Database Management",
        "Backup & Recovery Solutions",
        "Server Maintenance",
        "Cloud Migration Services",
        "Performance Monitoring"
      ],
      pricing: "Starting from $300"
    },
    {
      icon: Printer,
      title: "Printer Services",
      description: "Authorized Canon & HP printer sales and service center",
      features: [
        "Printer Sales (Canon & HP)",
        "Repair & Maintenance",
        "Genuine Parts & Supplies",
        "Installation & Setup",
        "Warranty Services",
        "Technical Support"
      ],
      pricing: "Starting from $75"
    },
    {
      icon: Wrench,
      title: "Parts & Equipment",
      description: "Quality computer parts and technology equipment",
      features: [
        "Computer Components",
        "Networking Equipment",
        "Security Hardware",
        "Printer Supplies",
        "Cables & Accessories",
        "Custom Configuration"
      ],
      pricing: "Competitive Pricing"
    }
  ];

  const additionalServices = [
    { icon: Settings, title: "System Maintenance", description: "Regular maintenance to keep systems running smoothly" },
    { icon: Database, title: "Data Backup", description: "Secure data backup and recovery solutions" },
    { icon: Wifi, title: "Wi-Fi Optimization", description: "Optimize your wireless network performance" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              From computer repairs to enterprise security systems, we provide complete 
              IT solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Core Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional technology services backed by years of experience and industry certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="tech-card group">
                <CardContent className="p-0">
                  {service.image && (
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="service-icon">
                          <service.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {!service.image && (
                      <div className="service-icon mb-4 group">
                        <service.icon className="h-6 w-6" />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">{service.pricing}</span>
                      <Button variant="outline" size="sm" className="group">
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Additional Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              More Ways We Can Help
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="tech-card group text-center">
                <CardContent className="p-6">
                  <div className="service-icon mx-auto mb-4 group">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent process to get your technology needs addressed quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Contact Us", description: "Reach out via phone, email, or our contact form" },
              { step: "2", title: "Assessment", description: "We evaluate your needs and provide a detailed quote" },
              { step: "3", title: "Implementation", description: "Our experts implement the solution professionally" },
              { step: "4", title: "Support", description: "Ongoing support and maintenance for your peace of mind" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional IT Services?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free consultation and quote for your technology needs. Our experts are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call: (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;