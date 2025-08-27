import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Monitor, 
  Server, 
  Printer, 
  Network, 
  Wrench, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import securityImage from "@/assets/security-systems.jpg";
import computerImage from "@/assets/computer-service.jpg";

const Index = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Sales & Service",
      description: "Complete computer solutions, repairs, and maintenance services for all your computing needs.",
      image: computerImage,
    },
    {
      icon: Shield,
      title: "CCTV & Security Systems",
      description: "Professional security camera installation and monitoring systems for complete protection.",
      image: securityImage,
    },
    {
      icon: Network,
      title: "Networking Solutions",
      description: "Enterprise networking setup, maintenance, and troubleshooting for seamless connectivity.",
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Comprehensive server setup, maintenance, and management for your business operations.",
    },
    {
      icon: Printer,
      title: "Printer Services",
      description: "Authorized Canon & HP printer sales, service, and repair center with genuine parts.",
    },
    {
      icon: Wrench,
      title: "Parts & Equipment",
      description: "Quality computer parts, accessories, and technology equipment for all your needs.",
    },
  ];

  const features = [
    "Authorized Canon & HP Service Center",
    "Expert Technical Team",
    "Quality Guaranteed Services",
    "Competitive Pricing",
    "24/7 Support Available",
    "Same Day Service"
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 container px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Authorized Canon & HP Service Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Complete IT Solutions & 
              <span className="block text-primary">Security Systems</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Your trusted partner for computer services, CCTV installation, networking, 
              server management, and printer solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 floating-animation opacity-30">
          <Shield className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 floating-animation opacity-30" style={{ animationDelay: '2s' }}>
          <Monitor className="h-10 w-10 text-tech-blue" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-tech">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 hero-text">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From computer repairs to security systems, we provide complete IT solutions 
              for businesses and individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="tech-card group">
                <CardContent className="p-6">
                  {service.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="service-icon mb-4 group">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Trusted Technology Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience and certified expertise, we deliver reliable 
                technology solutions that keep your business running smoothly.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="space-y-6">
              <Card className="tech-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Award className="h-12 w-12 text-primary" />
                    <div>
                      <h3 className="font-semibold">Certified Technicians</h3>
                      <p className="text-sm text-muted-foreground">Our team holds industry certifications</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Star className="h-12 w-12 text-warning" />
                    <div>
                      <h3 className="font-semibold">5-Star Service</h3>
                      <p className="text-sm text-muted-foreground">Rated excellent by our customers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-12 w-12 text-tech-blue" />
                    <div>
                      <h3 className="font-semibold">Guaranteed Work</h3>
                      <p className="text-sm text-muted-foreground">All services come with warranty</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and discover how we can help 
            with your technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (555) 123-4567
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

export default Index;