import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+971564023099",
      subDetail: "24/7 Support Available"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "info@olfatshipping.com",
      subDetail: "Response within 2 hours"
    },
    {
      icon: MapPin,
      title: "Main Office",
      detail: "Street#23 Industrial Area 4 Sharjah , UAE",
      subDetail: "International Hub"
    },
    {
      icon: Clock,
      title: "Business Hours",
      detail: "Sat - Thur: 9:00 AM - 21:00 PM",
    }
  ];

  return (
    <section id="contact" className="py-14 bg-gradient-subtle" data-aos="fade-up">
      <div className="app_container">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Request Your <span className="text-primary">Free Quote</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to ship your vehicle? Get a personalized quote tailored to your specific needs.
            Our experts are here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="150">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-primary/30 hover:shadow-soft transition-smooth"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground mb-1">{info.detail}</p>
                      <p className="text-sm text-muted-foreground">{info.subDetail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card
              className="p-6 gradient-primary text-primary-foreground"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-4">Why Choose Olfat Shipping?</h4>
                <ul className="space-y-2 text-sm">
                  {["Free, no-obligation quotes", "Comprehensive insurance coverage", "Real-time tracking and updates", "Expert handling and care"].map((item, i) => (
                    <li className="flex items-center" key={i}>
                      <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Form */}
          <Card
            className="h-fit"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <CardHeader>
              <CardTitle className="text-2xl">Get Your Free Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll provide you with a detailed quote within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="name"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Your Subject"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Type *
                    </label>
                    <Input
                      id="service"
                      name="service"
                      type="text"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="e.g., Car shipping to UK"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your vehicle, pickup/delivery locations, preferred dates, etc."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gradient-primary hover:shadow-elegant transition-smooth text-lg py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

  );
};

export default Contact;
