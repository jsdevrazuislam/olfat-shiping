import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Car } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));

    setFormData({
      name: "", email: "", phone: "", subject: "", message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-14 bg-muted/30">
      <div className="app_container">
        <div className="max-w-xl mx-auto">
          <div data-aos="fade-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get Your Free Quote</h2>
            <p className="text-sm md:text-lg text-muted-foreground">
              Fill out the form below and we'll provide you with a competitive quote for shipping your vehicle
            </p>
          </div>

          <Card data-aos="fade-up" data-aos-delay="200" className="shadow-card border-0">
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl text-foreground">
                <Car className="w-6 h-6 text-primary" />
                Vehicle Shipping Quote
              </CardTitle>
            </CardHeader>
            
            <CardContent className='px-0 md:px-6'>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder='Example: John Doe'
                      required
                      className="border-automotive-gray-light focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-automotive-gray-light focus:border-accent"
                      placeholder='Example: johndoe@olfatshipping.com'
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-automotive-gray-light focus:border-accent"
                      placeholder="Example: +971564023099"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Any special requirements or questions about your vehicle shipment..."
                    className="min-h-[100px] border-automotive-gray-light focus:border-accent"
                  />
                </div>

                <div className="text-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary-gradient hover:bg-secondary-gradient hover:shadow-button text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending Request..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Free Quote
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-3">
                    We'll respond within 24 hours with your personalized quote
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;