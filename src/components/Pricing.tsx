import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  
  const handleChoosePlan = (planName: string) => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    
    toast({
      title: "Plan Selected",
      description: `You've selected the ${planName} plan. Please fill out the contact form below to proceed.`,
    });
  };

  const pricingPlans = [
    {
      name: "Basic",
      price: "$1.99",
      unit: "per pound",
      description: "Our standard wash & fold service",
      features: [
        "Free pickup & delivery",
        "3-day turnaround",
        "Eco-friendly detergent",
        "Folded & packaged neatly",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "$2.99",
      unit: "per pound",
      description: "Premium service with faster turnaround",
      features: [
        "Free pickup & delivery",
        "24-hour turnaround",
        "Premium detergent options",
        "Folded & packaged neatly",
        "Special stain treatment",
      ],
      popular: true,
    },
    {
      name: "Dry Cleaning",
      price: "From $4.99",
      unit: "per item",
      description: "Professional dry cleaning service",
      features: [
        "Free pickup & delivery",
        "48-hour turnaround",
        "Eco-friendly process",
        "Proper handling of delicates",
        "Minor repairs included",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the service that fits your needs and budget. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl border ${
                plan.popular 
                  ? 'border-laundry-600 shadow-xl' 
                  : 'border-gray-200 shadow-lg'
              } p-6 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block bg-laundry-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-1 text-gray-600">{plan.unit}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
              
              <ul className="mt-6 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-laundry-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => handleChoosePlan(plan.name)}
                className={`mt-8 ${
                  plan.popular 
                    ? 'bg-laundry-600 hover:bg-laundry-700 text-white' 
                    : 'bg-white border border-laundry-600 text-laundry-700 hover:bg-laundry-50'
                } button-hover`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
