import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Award, Users, Star } from "lucide-react";
import cashfreeLogo from "@/assets/CF_Logo_white-NoBG.png";
import logo from "@/assets/logo-bg.png";

const Footer = () => {
  return (
    <footer className="bg-security-dark text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Rapid InfoTech" className="h-12 w-auto object-contain" />
              <div>
                <span className="text-xl font-bold">Rapid InfoTech</span>
                <p className="text-sm text-gray-300">& Security Systems</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Best IT solutions and security systems provider in Kanyakumari, Tamil Nadu. 
              Your trusted partner for comprehensive technology services. Authorized Canon & HP service center.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Star className="h-4 w-4 text-warning" />
              <span>4.9/5 Rating • 10000+ Happy Clients</span>
            </div>
            <div className="mt-3">
              <img src={cashfreeLogo} alt="Cashfree Payments" className="h-12 w-auto object-contain" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary transition-colors">IT Services in Kanyakumari</Link></li>
              <li><Link to="/shop" className="text-gray-300 hover:text-primary transition-colors">Computer Parts & Equipment</Link></li>
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
              <li className="text-gray-300">Security Systems</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">98-A/1, Neela Building, Opp. NKV Furniture, WCC Road, Nagercoil -1</span>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>9514118844, 9514118855</div>
                  <div>Office: 04652 490223</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300">info@rapidinfo.tech</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon - Sat: 9.00 AM - 8.00 PM</div>
                  <div>Emergency 24/7*365</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold mb-2 text-primary">Serving Kanyakumari & Surrounding Areas</h3>
            <p className="text-gray-300 text-sm">
              Nagercoil • Marthandam • Thuckalay • Karungal • Munchirai • Agastheeswaram • 
              Rajakkamangalam • Thovalai • Kurunthencode • Thuckalay • Karungal
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Rapid InfoTech & Security Systems. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Designed and Developed by{" "}
            <a 
              href="https://www.jezx.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              JezX
            </a>{" "}
            |{" "}
            <a 
              href="https://www.enyard.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ENYARD
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;