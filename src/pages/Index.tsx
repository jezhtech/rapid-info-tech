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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
          </div>
          
          {/* Animated Tech Grid */}
          <div className="absolute inset-0 opacity-30">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 144 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-primary/20 relative"
                  style={{
                    animationDelay: `${Math.random() * 5}s`,
                    animation: `pulse 3s infinite ease-in-out ${Math.random() * 2}s`
                  }}
                >
                  {Math.random() > 0.95 && (
                    <div className="absolute inset-0 bg-primary/30 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Floating Tech Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container px-4 text-white">
          <div className="max-w-6xl mx-auto">
            {/* Main Hero Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block mb-6">
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/40 backdrop-blur-sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Authorized Canon & HP Service Center
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-primary bg-clip-text text-transparent">
                      Complete IT
                    </span>
                    <div className="absolute -right-4 top-0 w-8 h-8 bg-tech-blue rounded-full animate-pulse opacity-70"></div>
                  </span>
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-primary via-tech-blue to-white bg-clip-text text-transparent">
                      Solutions
                    </span>
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-primary/60 rotate-45 animate-spin"></div>
                  </span>
                  <span className="block text-2xl md:text-3xl xl:text-4xl text-gray-300 font-normal mt-2">
                    & Security Systems
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                  <span className="inline-block transform hover:scale-105 transition-transform">🔧</span> Computer Services • 
                  <span className="inline-block transform hover:scale-105 transition-transform mx-2">📹</span> CCTV Installation • 
                  <span className="inline-block transform hover:scale-105 transition-transform">🌐</span> Networking • 
                  <span className="inline-block transform hover:scale-105 transition-transform mx-2">🖨️</span> Printer Solutions
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-lg px-8 py-4 shadow-glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Phone className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Get Free Quote</span>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>500+ Happy Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-warning" />
                    <span>5-Star Service</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-tech-blue" />
                    <span>Licensed & Insured</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Interactive Tech Showcase */}
              <div className="relative lg:block hidden">
                <div className="relative w-full h-96">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-tech-blue rounded-full shadow-glow flex items-center justify-center group cursor-pointer">
                    <Shield className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
                  </div>
                  
                  {/* Orbiting Service Icons */}
                  {[
                    { icon: Monitor, position: 'top-0 left-1/2 -translate-x-1/2', delay: '0s', service: 'Computers' },
                    { icon: Network, position: 'top-1/4 right-0', delay: '1s', service: 'Networking' },
                    { icon: Printer, position: 'bottom-1/4 right-0', delay: '2s', service: 'Printers' },
                    { icon: Server, position: 'bottom-0 left-1/2 -translate-x-1/2', delay: '3s', service: 'Servers' },
                    { icon: Wrench, position: 'bottom-1/4 left-0', delay: '4s', service: 'Parts' },
                    { icon: Shield, position: 'top-1/4 left-0', delay: '5s', service: 'Security' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`absolute ${item.position} group cursor-pointer`}
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="relative">
                        <div className="w-16 h-16 bg-card/90 backdrop-blur-sm rounded-full shadow-strong flex items-center justify-center group-hover:scale-125 transition-all duration-300 border border-primary/20">
                          <item.icon className="h-8 w-8 text-primary group-hover:text-tech-blue transition-colors" />
                        </div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-white bg-black/70 px-2 py-1 rounded whitespace-nowrap">
                            {item.service}
                          </span>
                        </div>
                        {/* Connecting Lines */}
                        <div className="absolute top-8 left-8 w-px h-16 bg-gradient-to-b from-primary/60 to-transparent"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Corner Elements */}
        <div className="absolute top-10 left-10">
          <div className="w-20 h-20 border-l-2 border-t-2 border-primary/40 floating-animation"></div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="w-20 h-20 border-r-2 border-b-2 border-tech-blue/40 floating-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm">Scroll to explore</span>
            <ArrowRight className="h-4 w-4 rotate-90" />
          </div>
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