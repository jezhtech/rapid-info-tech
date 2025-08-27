import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin, Clock, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-security-dark text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary" />
                <Zap className="absolute -bottom-1 -right-1 h-4 w-4 text-tech-blue" />
              </div>
              <div>
                <span className="text-xl font-bold">Rapid InfoTech</span>
                <p className="text-sm text-gray-300">& Security Systems</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for comprehensive IT solutions, security systems, and technology services. 
              Authorized Canon & HP service center.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-primary transition-colors">Shop</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Computer Sales & Service</li>
              <li className="text-gray-300">CCTV Installation</li>
              <li className="text-gray-300">Network Solutions</li>
              <li className="text-gray-300">Server Management</li>
              <li className="text-gray-300">Printer Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">123 Tech Street, Digital City, TC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@rapidinfotech.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Rapid InfoTech & Security Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;