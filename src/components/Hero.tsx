import { Button } from "@/components/ui/button";
import { WashingMachine } from "lucide-react";

const Hero = () => {
  const handleBookNow = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSeePricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-b from-laundry-50 to-white pt-12 pb-20 sm:pt-16 lg:pt-20 xl:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0 lg:max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              <span className="block">Laundry Made</span>
              <span className="block text-laundry-700">Simple & Convenient</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Professional laundry and dry cleaning services with free pickup and delivery right to your doorstep. Save time and enjoy freshly cleaned clothes without the hassle.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleBookNow}
                className="bg-laundry-600 hover:bg-laundry-700 text-white px-8 py-3 text-base rounded-md button-hover"
              >
                Book Now
              </Button>
              <Button 
                onClick={handleSeePricing}
                variant="outline" 
                className="border-laundry-600 text-laundry-700 hover:bg-laundry-50 px-8 py-3 text-base rounded-md button-hover"
              >
                See Pricing
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 text-laundry-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-600">Free Pickup & Delivery</p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 text-laundry-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="ml-2 text-sm text-gray-600">24-48hr Turnaround</p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:max-w-lg">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-laundry-400 to-blue-500"></div>
              <div className="p-8 sm:p-10 lg:p-12 flex items-center justify-center">
                <WashingMachine size={200} className="text-laundry-600 animate-bounce-slow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
