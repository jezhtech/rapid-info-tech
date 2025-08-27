import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket,
  Sparkles,
  Clock,
  Star,
  Zap
} from "lucide-react";

const Shop = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          
          {/* Coming Soon Badge with Animation */}
          <div className="mb-8 animate-fade-in">
            <Badge className="mb-4 px-6 py-2 text-lg bg-gradient-to-r from-primary to-primary/80 text-white border-none shadow-lg">
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Coming Soon
            </Badge>
          </div>

          {/* Main Title with Gradient Text */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 animate-fade-in bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight" style={{ animationDelay: '0.2s' }}>
            SHOP
          </h1>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground/80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            LAUNCHING SOON
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Get ready for <span className="text-primary font-semibold">exclusive offers</span> on computers, security systems, 
            printers, and networking equipment. Something amazing is coming your way!
          </p>

          {/* Countdown or Progress Indicator */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-border/50 shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary mr-2" />
                <span className="text-lg font-semibold">Launch Preparation</span>
              </div>
              <div className="text-3xl font-bold text-primary mb-4">75% Complete</div>
              <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 animate-pulse"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="group cursor-pointer">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Star className="w-8 h-8 text-primary mx-auto mb-2 group-hover:animate-spin" />
                <p className="text-sm font-medium">Exclusive Deals</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Zap className="w-8 h-8 text-primary mx-auto mb-2 group-hover:animate-bounce" />
                <p className="text-sm font-medium">Fast Delivery</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-2 group-hover:animate-pulse" />
                <p className="text-sm font-medium">Premium Quality</p>
              </div>
            </div>
          </div>

          {/* Rocket Animation */}
          <div className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="relative inline-block">
              <Rocket className="w-24 h-24 text-primary mx-auto animate-bounce" style={{ animationDuration: '2s' }} />
              {/* Rocket Trail Effect */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-primary/60 to-transparent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-primary/40 to-transparent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.4s' }}>
            <Button 
              size="lg" 
              className="px-12 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Notify Me When Live
            </Button>
          </div>

          {/* Bottom Tagline */}
          <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '1.6s' }}>
            Rapid InfoTech & Security Systems • Where Technology Meets Excellence
          </p>
        </div>
      </section>
    </div>
  );
};

export default Shop;