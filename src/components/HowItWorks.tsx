
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Schedule a Pickup",
      description: "Book a convenient pickup time through our website or app. We offer flexible scheduling to fit your busy life."
    },
    {
      number: "02",
      title: "We Collect Your Laundry",
      description: "Our friendly driver will pick up your laundry from your doorstep. No need to wait at home - just leave it at your designated spot."
    },
    {
      number: "03",
      title: "Professional Cleaning",
      description: "Our experts clean your clothes using premium detergents and state-of-the-art equipment to ensure the best results."
    },
    {
      number: "04",
      title: "Delivery To Your Door",
      description: "We'll deliver your clean, neatly folded clothes back to your doorstep at your chosen time. It's that simple!"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-laundry-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Simple, convenient laundry service in just a few steps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
                <div className="font-bold text-4xl text-laundry-600 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-laundry-400">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-laundry-600 hover:bg-laundry-700 text-white px-8 py-3 text-base rounded-md button-hover">
            Schedule a Pickup
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
