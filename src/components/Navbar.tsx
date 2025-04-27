import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-laundry-700">LaundryLane</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a className="text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-sm font-medium" href="#services">
              Services
            </a>
            <a className="text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-sm font-medium" href="#pricing">
              Pricing
            </a>
            <a className="text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-sm font-medium" href="#how-it-works">
              How It Works
            </a>
            <a className="text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-sm font-medium" href="#contact">
              Contact
            </a>
            <Button onClick={handleBookNow} className="ml-4 bg-laundry-600 hover:bg-laundry-700">
              Book Now
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-laundry-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a className="block text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-base font-medium" href="#services">
              Services
            </a>
            <a className="block text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-base font-medium" href="#pricing">
              Pricing
            </a>
            <a className="block text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-base font-medium" href="#how-it-works">
              How It Works
            </a>
            <a className="block text-gray-700 hover:text-laundry-600 px-3 py-2 rounded-md text-base font-medium" href="#contact">
              Contact
            </a>
            <div className="pt-2 pb-3">
              <Button onClick={handleBookNow} className="w-full bg-laundry-600 hover:bg-laundry-700">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
