import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WashingMachine, Shirt, Iron } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Wash & Fold",
      description: "Our standard wash and fold service for all your everyday laundry needs. We'll wash, dry, and neatly fold your clothes.",
      icon: <WashingMachine size={48} className="text-laundry-600" />,
    },
    {
      title: "Dry Cleaning",
      description: "Professional dry cleaning for your delicate items, suits, dresses, and other garments that require special care.",
      icon: <Shirt size={48} className="text-laundry-600" />,
    },
    {
      title: "Ironing & Pressing",
      description: "Get your clothes perfectly pressed and ready to wear with our professional ironing and pressing service.",
      icon: <Iron size={48} className="text-laundry-600" />,
    },
  ];

  return (
    <section id="services" className="py-16 bg-laundry-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            We offer a range of laundry and dry cleaning services to keep your clothes looking their best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
