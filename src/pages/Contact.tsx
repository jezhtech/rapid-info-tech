import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageSquare,
  Navigation,
  Shield
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Location",
      details: [
        "Rapid InfoTech & Security Systems",
        "98-A/1, Neela Building, Opp. NKV Furniture",
        "WCC Road, Nagercoil - 1"
      ],
      action: "Open in Maps"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Mobile: 9514118844, 9514118855",
        "Office: 04652 490223"
      ],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@rapidinfo.tech"
      ],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Sat: 9.00 AM - 8.00 PM",
        "Emergency 24/7*365"
      ],
      action: "Emergency Support Available"
    }
  ];

  const services = [
    "Computer Sales & Service",
    "CCTV & Security Systems", 
    "Networking Solutions",
    "Server Management",
    "Printer Services",
    "Parts & Equipment",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Talk Technology
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Ready to solve your technology challenges? Get in touch with our expert team 
              for a free consultation and personalized solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help with all your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="tech-card group h-full">
                <CardContent className="p-6 text-center flex flex-col h-full">
                  <div className="service-icon mx-auto mb-4 group">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-6 flex-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full h-10">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge className="mb-4">Send Message</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Get Free Consultation
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a 
                personalized solution for your technology needs.
              </p>

              <Card className="tech-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Service Interest</Label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your technology needs..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Additional Info */}
            <div>
              <Badge className="mb-4">Find Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
                Visit Our Location
              </h2>
              
              {/* Google Map Embed */}
              <Card className="tech-card mb-6">
                <CardContent className="p-0">
                  <iframe
                    title="Rapid InfoTech Location Map"
                    className="w-full h-64 rounded-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=8.186806,77.424667(Rapid%20InfoTech)&z=16&output=embed`}
                  />
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <div className="space-y-4">
                <Card className="tech-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h3 className="font-semibold">Quick Response</h3>
                        <p className="text-sm text-muted-foreground">We typically respond within 2 hours during business hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="tech-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Shield className="h-8 w-8 text-tech-blue" />
                      <div className="flex-1">
                        <h3 className="font-semibold">Secure Communication</h3>
                        <p className="text-sm text-muted-foreground">Your information is protected with enterprise-grade security</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="tech-card">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-8 w-8 text-success" />
                      <div className="flex-1">
                        <h3 className="font-semibold">Emergency Support</h3>
                        <p className="text-sm text-muted-foreground">24/7 emergency support available for critical issues</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Quick Help</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { q: "What are your service rates?", a: "We offer competitive pricing with free estimates for all services." },
              { q: "Do you provide emergency support?", a: "Yes, we offer 24/7 emergency support for critical issues." },
              { q: "Are you Canon & HP authorized?", a: "Yes, we are an authorized service center for both Canon and HP." },
              { q: "Do you service businesses?", a: "Absolutely! We provide comprehensive business IT solutions." },
              { q: "What's your response time?", a: "We typically respond within 2 hours during business hours." },
              { q: "Do you offer warranties?", a: "Yes, all our services come with warranties and guarantees." }
            ].map((faq, index) => (
              <Card key={index} className="tech-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;