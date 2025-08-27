import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ShoppingCart, 
  Clock, 
  Bell, 
  Rocket,
  Monitor,
  Printer,
  Shield,
  Network,
  Mail,
  Phone
} from "lucide-react";

const Shop = () => {
  const comingSoonFeatures = [
    {
      icon: ShoppingCart,
      title: "Online Shopping Cart",
      description: "Browse and purchase products directly from our website"
    },
    {
      icon: Monitor,
      title: "Computer & Components",
      description: "Latest computers, laptops, and hardware components"
    },
    {
      icon: Printer,
      title: "Printers & Supplies",
      description: "Canon & HP printers with genuine ink and toner supplies"
    },
    {
      icon: Shield,
      title: "Security Equipment",
      description: "CCTV cameras, security systems, and monitoring equipment"
    },
    {
      icon: Network,
      title: "Networking Gear",
      description: "Routers, switches, cables, and networking accessories"
    }
  ];

  const categories = [
    "Desktop Computers",
    "Laptops & Notebooks", 
    "Computer Components",
    "Printers & Scanners",
    "Security Cameras",
    "Networking Equipment",
    "Cables & Accessories",
    "Software Solutions"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Online Shop Launch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              We're building an amazing online shopping experience for all your technology needs. 
              Get ready to shop for computers, printers, security systems, and more!
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Development Progress</span>
                <span>75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            
            <div className="floating-animation">
              <Rocket className="h-16 w-16 mx-auto text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">What's Coming</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              Features We're Building
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our online shop will offer a comprehensive selection of technology products 
              with professional support and competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <Card key={index} className="tech-card group">
                <CardContent className="p-6 text-center">
                  <div className="service-icon mx-auto mb-4 group">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Preview */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Product Categories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              What You'll Find
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From individual components to complete systems, we'll have everything you need.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-card p-4 rounded-lg shadow-soft text-center hover:shadow-strong transition-all group cursor-pointer"
              >
                <span className="font-medium group-hover:text-primary transition-colors">
                  {category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Launch Timeline</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              Shop Opening Soon
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                { 
                  phase: "Phase 1", 
                  title: "Product Catalog Setup", 
                  status: "completed",
                  description: "Adding all products and categories to our system"
                },
                { 
                  phase: "Phase 2", 
                  title: "Payment Integration", 
                  status: "in-progress",
                  description: "Setting up secure payment processing"
                },
                { 
                  phase: "Phase 3", 
                  title: "Testing & Optimization", 
                  status: "upcoming",
                  description: "Ensuring everything works perfectly"
                },
                { 
                  phase: "Phase 4", 
                  title: "Grand Opening", 
                  status: "upcoming",
                  description: "Official launch with special offers"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    item.status === 'completed' ? 'bg-success text-white' :
                    item.status === 'in-progress' ? 'bg-primary text-white pulse-glow' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {item.status === 'completed' ? '✓' : index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold">{item.phase}: {item.title}</h3>
                      {item.status === 'in-progress' && (
                        <Badge variant="secondary">In Progress</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container px-4 text-center">
          <Bell className="h-16 w-16 mx-auto mb-6 floating-animation" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Want to be notified when our online shop launches? Contact us to join our notification list 
            and receive exclusive launch offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Email Notifications
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Current Shopping Options */}
      <section className="py-20 bg-gradient-card">
        <div className="container px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Available Now</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 hero-text">
              Shop With Us Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              While our online shop is being prepared, you can still purchase products and services 
              by visiting our store or contacting us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="tech-card text-center">
              <CardContent className="p-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Our Store</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse products in person and get expert advice
                </p>
                <p className="text-sm font-medium">Mon-Fri: 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="tech-card text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Speak with our experts about your needs
                </p>
                <p className="text-sm font-medium">(555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="tech-card text-center">
              <CardContent className="p-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Quote</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us your requirements for a detailed quote
                </p>
                <p className="text-sm font-medium">info@rapidinfotech.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;