import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, Target, Clock, Shield } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import canonCertificate from "@/assets/Canon_page-0001.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every service we provide, ensuring quality and reliability."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are at the heart of everything we do. We listen, understand, and deliver."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "You can count on us to deliver on time, every time, with consistent quality service."
    }
  ];

  const certifications = [
    "Canon Authorized Service Center",
    "HP Authorized Service Partner",
    "Microsoft Certified Technicians",
    "CompTIA Certified Professionals",
    "Cisco Network Specialists",
    "Security System Certified Installers"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              About Rapid InfoTech
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Technology Partner
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              With over 5 years of experience, we've been providing comprehensive IT solutions 
              and security systems to businesses and individuals across the region.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Building Trust Through Technology
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded with a vision to bridge the technology gap for businesses and individuals, 
                  Rapid InfoTech & Security Systems has grown from a small local service provider 
                  to a trusted technology partner in the region.
                </p>
                <p>
                  Our journey began with a simple mission: to provide reliable, affordable, and 
                  comprehensive technology solutions. Today, we're proud to be an authorized 
                  service center for Canon and HP, serving hundreds of satisfied customers.
                </p>
                <p>
                  From computer repairs to enterprise security systems, we've expanded our services 
                  while maintaining our commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Our professional team"
                className="rounded-lg shadow-strong w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-strong">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="tech-card">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide innovative, reliable, and cost-effective technology solutions that 
                  empower businesses and individuals to achieve their goals while ensuring their 
                  security and productivity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="tech-card">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-tech-blue mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading technology service provider in our region, known for excellence, 
                  innovation, and customer satisfaction, while continuously evolving with the 
                  latest technological advancements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="tech-card group text-center">
                <CardContent className="p-6">
                  <div className="service-icon mx-auto mb-4 group">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-tech">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Certifications & Partnerships</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              Authorized & Certified
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team holds industry certifications and partnerships with leading technology brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card p-4 rounded-lg shadow-soft">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Canon Authorization Certificate */}
      <section className="py-8">
        <div className="container px-4">
          <div className="text-center mb-4">
            <Badge className="mb-4">Canon Authorization</Badge>
            <h3 className="text-2xl md:text-3xl font-bold mb-2 hero-text">
              Authorized Service Centre Certificate
            </h3>
            <p className="text-muted-foreground">
              This certificate validates our status as an authorised Canon service centre.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={canonCertificate}
              alt="Canon Authorized Service Centre Certificate"
              className="rounded-lg shadow-strong max-w-3xl w-full -rotate-90"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of satisfied customers who trust us with their technology needs.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;