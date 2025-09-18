import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

const ContactInfo = () => {

    return (
        <section className="py-14 bg-background">
            <div className="app_container">
                <div className="max-w-6xl mx-auto">
                    <div data-aos="fade-up" className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Information</h2>
                        <p className="text-sm md:text-lg text-muted-foreground">
                            Multiple ways to reach us for your car shipping needs
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div data-aos="fade-right" data-aos-delay="200">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                                    <CardContent>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary-gradient p-3 rounded-full">
                                                <Phone className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-primary">Call Us</h3>
                                                <p className="text-muted-foreground">Available 24/7 for quotes and support</p>
                                                <a href="tel:+971564023099" className="text-2xl italic font-bold text-primary hover:text-secondary transition-colors">
                                                    +971564023099
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div data-aos="fade-right" data-aos-delay="300">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                                    <CardContent>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary-gradient p-3 rounded-full">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-primary">Email Us</h3>
                                                <p className="text-muted-foreground">Get detailed quotes via email</p>
                                                <a href="mailto:info@olfatshipping.com" className="text-lg font-semibold text-primary hover:text-secondary transition-colors italic">
                                                   info@olfatshipping.com
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div data-aos="fade-right" data-aos-delay="400">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                                    <CardContent>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary-gradient p-3 rounded-full">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-primary">Visit Us</h3>
                                                <p className="text-muted-foreground">Main office location</p>
                                                <address className="text-lg text-primary font-semibold">
                                                   Street#23 Industrial Area 4 Sharjah , UAE
                                                </address>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div data-aos="fade-right" data-aos-delay="500">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300">
                                    <CardContent>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-primary-gradient p-3 rounded-full">
                                                <Clock className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-primary">Business Hours</h3>
                                                <div className="space-y-1 text-muted-foreground italic">
                                                    <p><strong>Sat - Thur:</strong> 9:00 AM - 21:00 PM EST</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div data-aos="fade-left" data-aos-delay="200">
                                <h3 className="text-2xl font-bold text-primary mb-6">Why Choose Olfat Shipping?</h3>
                            </div>

                            <div data-aos="fade-left" data-aos-delay="300">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                                    <CardContent>
                                        <div className="flex items-start gap-4">
                                            <Shield className="w-8 h-8 text-primary mt-1" />
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-primary mb-2">Fully Insured & Licensed</h4>
                                                <p className="text-muted-foreground">
                                                    DOT registered with comprehensive insurance coverage up to $1M for your peace of mind.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div data-aos="fade-left" data-aos-delay="400">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                                    <CardContent>
                                        <div className="flex items-start gap-4">
                                            <Award className="w-8 h-8 text-primary mt-1" />
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-primary mb-2">6+ Years Experience</h4>
                                                <p className="text-muted-foreground">
                                                    Trusted by over 50,000 customers with a 98% on-time delivery rate.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div data-aos="fade-left" data-aos-delay="500">
                                <Card className="shadow-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-8 h-8 text-primary mt-1" />
                                            <div className="flex-1">
                                                <h4 className="text-xl font-semibold text-primary mb-2">Nationwide Network</h4>
                                                <p className="text-muted-foreground">
                                                    Door-to-door service covering all 50 states with real-time tracking.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <div data-aos="fade-left" className="bg-primary-gradient p-6 rounded-lg text-white">
                                <h4 className="text-xl font-bold mb-3">Emergency Support</h4>
                                <p className="mb-4">
                                    Need urgent car shipping? We offer expedited services with 24/7 support for emergency situations.
                                </p>
                                <a href="tel:+971564023099" className="font-bold text-lg hover:underline">
                                    Call Now: +971564023099
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;