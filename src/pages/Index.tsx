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
  Award,
  MapPin,
  Clock,
  Users,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import securityImage from "@/assets/security-systems.jpg";
import computerImage from "@/assets/computer-service.jpg";
import teamImage from "@/assets/team-photo.jpg";

const Index = () => {
  const services = [
    {
      icon: Monitor,
      title: "Computer Sales & Service",
      description: "Best computer services in Kanyakumari. Complete computer solutions, repairs, maintenance, and sales. Authorized service center with genuine parts and expert technicians.",
      image: computerImage,
      features: ["Hardware Repair", "Software Installation", "Virus Removal", "Data Recovery"]
    },
    {
      icon: Shield,
      title: "CCTV & Security Systems",
      description: "Leading security systems provider in Kanyakumari. Professional CCTV installation, surveillance cameras, and security solutions for homes and businesses.",
      image: securityImage,
      features: ["HD CCTV Cameras", "Night Vision", "Remote Monitoring", "24/7 Recording"]
    },
    {
      icon: Network,
      title: "Networking Solutions",
      description: "Expert networking services in Kanyakumari. Enterprise networking setup, maintenance, troubleshooting, and wireless solutions for seamless connectivity.",
      image: computerImage,
      features: ["WiFi Installation", "Network Security", "Cable Management", "VPN Setup"]
    },
    {
      icon: Server,
      title: "Server Management",
      description: "Professional server management services in Kanyakumari. Server setup, maintenance, cloud solutions, and IT infrastructure management.",
      image: teamImage,
      features: ["Server Installation", "Cloud Migration", "Backup Solutions", "Performance Optimization"]
    },
    {
      icon: Printer,
      title: "Printer Services",
      description: "Authorized Canon & HP printer service center in Kanyakumari. Sales, repair, maintenance, and genuine parts for all printer brands.",
      image: securityImage,
      features: ["Canon Service", "HP Repair", "Genuine Parts", "Warranty Service"]
    },
    {
      icon: Wrench,
      title: "Computer Parts & Equipment",
      description: "Quality computer parts and technology equipment in Kanyakumari. Genuine components, accessories, and hardware solutions for all your needs.",
      image: computerImage,
      features: ["Genuine Parts", "Hardware Upgrades", "Accessories", "Warranty Support"]
    },
  ];

  const features = [
    "Authorized Canon & HP Service Center in Kanyakumari",
    "Expert Technical Team with 10+ Years Experience",
    "Quality Guaranteed Services with Warranty",
    "Competitive Pricing - Best Value in Kanyakumari",
    "24/7 Support Available for Emergency Services",
    "Same Day Service for Urgent Repairs",
    "Free Consultation and Quote",
    "Local Business - Serving Kanyakumari Since 2015"
  ];

  const stats = [
    { number: "10000+", label: "Happy Clients in Kanyakumari" },
    { number: "25000+", label: "Projects Completed Successfully" },
    { number: "10+", label: "Years Serving Kanyakumari" },
    { number: "24/7", label: "Emergency Support Available" },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Best IT Company in Kanyakumari",
      description: "Voted #1 IT solutions provider in Kanyakumari for 3 consecutive years"
    },
    {
      icon: Users,
      title: "Local Experts",
      description: "Our team knows Kanyakumari businesses and their unique technology needs"
    },
    {
      icon: Shield,
      title: "Certified & Insured",
      description: "Licensed technicians with proper certifications and insurance coverage"
    },
    {
      icon: Zap,
      title: "Fast Response Time",
      description: "Quick response within 2 hours for emergency services in Kanyakumari"
    }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-block mb-4 lg:mb-6">
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/40 backdrop-blur-sm text-xs lg:text-sm">
                    <Shield className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                    Premier Technology Partner in Kanyakumari
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-white via-gray-100 to-primary bg-clip-text text-transparent">
                      Enterprise-Grade IT
                    </span>
                    <div className="absolute -right-2 lg:-right-4 top-0 w-4 h-4 lg:w-6 lg:h-6 bg-tech-blue rounded-full animate-pulse opacity-70"></div>
                  </span>
                  <span className="block relative">
                    <span className="bg-gradient-to-r from-primary via-tech-blue to-white bg-clip-text text-transparent">
                      Solutions
                    </span>
                    <div className="absolute -left-1 lg:-left-2 top-2 w-3 h-3 lg:w-4 lg:h-4 bg-primary/60 rotate-45 animate-spin"></div>
                  </span>
                  <span className="block text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-normal mt-2">
                    in Kanyakumari
                  </span>
                  <span className="block text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-normal mt-2">
                    Advanced Security Systems & Digital Infrastructure
                  </span>
                </h1>
                
                <p className="text-sm md:text-base lg:text-lg mb-6 lg:mb-8 text-gray-200 leading-relaxed">
                  <span className="inline-block transform hover:scale-105 transition-transform">🖥️</span> Enterprise Computer Solutions • 
                  <span className="inline-block transform hover:scale-105 transition-transform mx-1 lg:mx-2">🔒</span> Advanced Security Systems • 
                  <span className="inline-block transform hover:scale-105 transition-transform">🌐</span> Network Infrastructure • 
                  <span className="inline-block transform hover:scale-105 transition-transform mx-1 lg:mx-2">⚡</span> Digital Transformation
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-sm lg:text-lg px-6 lg:px-8 py-3 lg:py-4 shadow-glow"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-blue opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5 relative z-10" />
                    <span className="relative z-10">Get Free Quote</span>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    className="group text-sm lg:text-lg px-6 lg:px-8 py-3 lg:py-4 bg-transparent border-2 border-white/60 text-white hover:bg-white hover:text-primary hover:border-white transition-all duration-300 backdrop-blur-sm shadow-lg"
                  >
                    <span className="font-semibold">Explore Services</span>
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 text-xs lg:text-sm text-gray-300 mb-6 lg:mb-8">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-success" />
                    <span>1000+ Enterprise Clients</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-3 w-3 lg:h-4 lg:w-4 text-warning" />
                    <span>Enterprise-Grade Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-3 w-3 lg:h-4 lg:w-4 text-tech-blue" />
                    <span>ISO Certified & Insured</span>
                  </div>
                </div>

                {/* Local Business Info */}
                <div className="p-3 lg:p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex flex-col lg:flex-row items-center lg:justify-start space-y-2 lg:space-y-0 lg:space-x-4 text-xs lg:text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                      <span>Strategic Location:<br />WCC Road, Nagercoil</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                      <span>Business Hours:<br />9AM - 8PM</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-primary" />
                      <span>24/7 Support:<br />9514118844</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Interactive Tech Showcase */}
              <div className="relative lg:block hidden">
                <div className="relative w-full h-80 lg:h-96">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary to-tech-blue rounded-full shadow-glow flex items-center justify-center group cursor-pointer">
                    <Shield className="h-10 w-10 lg:h-12 lg:w-12 text-white group-hover:scale-110 transition-transform" />
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
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-card/90 backdrop-blur-sm rounded-full shadow-strong flex items-center justify-center group-hover:scale-125 transition-all duration-300 border border-primary/20">
                          <item.icon className="h-6 w-6 lg:h-8 lg:w-8 text-primary group-hover:text-tech-blue transition-colors" />
                        </div>
                        <div className="absolute -bottom-6 lg:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-xs text-white bg-black/70 px-2 py-1 rounded whitespace-nowrap">
                            {item.service}
                          </span>
                        </div>
                        {/* Connecting Lines */}
                        <div className="absolute top-6 lg:top-8 left-6 lg:left-8 w-px h-12 lg:h-16 bg-gradient-to-b from-primary/60 to-transparent"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Corner Elements */}
        <div className="absolute top-20 lg:top-10 left-10">
          <div className="w-16 h-16 lg:w-20 lg:h-20 border-l-2 border-t-2 border-primary/40 floating-animation"></div>
        </div>
        <div className="absolute bottom-10 right-10">
          <div className="w-16 h-16 lg:w-20 lg:h-20 border-r-2 border-b-2 border-tech-blue/40 floating-animation" style={{ animationDelay: '3s' }}></div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs lg:text-sm">Scroll to explore</span>
            <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-gradient-tech">
        <div className="container px-4">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 lg:mb-4">
              Trusted by Leading Businesses in Kanyakumari
            </h2>
            <p className="text-sm lg:text-base text-muted-foreground">
              Delivering enterprise-grade solutions with proven track record of success
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 lg:mb-2">{stat.number}</div>
                <div className="text-xs lg:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Enterprise Technology Solutions</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 hero-text">
              Comprehensive Digital Infrastructure & Security Systems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premier technology solutions provider in Kanyakumari. From enterprise IT infrastructure to 
              advanced security systems, we deliver cutting-edge solutions for modern businesses.
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
                  
                  {/* Service Features */}
                  <div className="mb-4">
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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
              <Badge className="mb-4">Why Choose Rapid InfoTech</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Premier Technology Solutions Provider in Kanyakumari
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over 10 years of enterprise technology expertise serving Kanyakumari, we deliver 
                innovative solutions that drive business growth and operational excellence. Our strategic 
                approach and cutting-edge technology make us the trusted partner for forward-thinking businesses.
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
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="tech-card">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <item.icon className="h-12 w-12 text-primary" />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
            Ready to Transform Your Business with Advanced Technology?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Kanyakumari's leading technology solutions provider for enterprise-grade 
            IT infrastructure, security systems, and digital transformation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-sm lg:text-lg px-4 lg:px-8 py-3">
              <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" className="text-sm lg:text-lg px-4 lg:px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold transition-all duration-300 shadow-lg bg-transparent">
              <Phone className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
              Request Enterprise Quote
            </Button>
          </div>
          
          {/* Local Business CTA */}
          <div className="mt-6 lg:mt-8 p-3 lg:p-4 bg-white/10 rounded-lg border border-white/20">
            <p className="text-xs lg:text-sm opacity-90">
              <strong>Strategic Coverage:</strong> Serving Kanyakumari, Nagercoil, Marthandam, 
              Thuckalay, and surrounding business districts in Tamil Nadu. Enterprise consultation and strategic planning available.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;