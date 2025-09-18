import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Car,
    Settings,
    Calendar,
    MapPin,
    Gauge,
    Palette,
    DoorOpen,
    Activity
} from "lucide-react";

const CarSpecifications = () => {
    const keyFeatures = [
        { label: "Engine", value: "4 Cylinder", icon: Settings },
        { label: "Year", value: "1975", icon: Calendar },
        { label: "Kilometers", value: "96,378 km", icon: Gauge },
        { label: "Region", value: "Japan", icon: MapPin },
        { label: "Doors", value: "6", icon: DoorOpen },
    ];

    const technicalSpecs = [
        { label: "Fuel Type", value: "LPG Autogas" },
        { label: "Transmission", value: "Automatic" },
        { label: "Mileage Type", value: "Miles" },
        { label: "Drive Train", value: "4WD" },
        { label: "Vehicle Make", value: "FORD" },
        { label: "Vehicle Model", value: "EXPLORER" },
        { label: "Number of Cylinders", value: "4" },
        { label: "Vehicle Condition", value: "5/10" },
    ];

    const additionalDetails = [
        { label: "Body Style", value: "None" },
        { label: "Interior Color", value: "PURPLE" },
        { label: "Exterior Color", value: "DARK BLUE" },
        { label: "Doors", value: "6" },
        { label: "Seating Capacity", value: "6" },
        { label: "Year", value: "1975" },
        { label: "Odometer", value: "96,378" },
        { label: "Region", value: "Japan" },
        { label: "VIN", value: "JW3GNE4K2EL863201" },
    ];

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Activity className="h-5 w-5 text-automotive-blue" />
                        Key Features
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {keyFeatures.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div key={feature.label} className="text-center p-3 bg-muted rounded-lg">
                                    <IconComponent className="h-6 w-6 text-automotive-blue mx-auto mb-2" />
                                    <div className="text-sm font-medium text-muted-foreground">
                                        {feature.label}
                                    </div>
                                    <div className="text-base font-semibold">
                                        {feature.value}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Car className="h-5 w-5 text-automotive-blue" />
                        Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                        This classic 1975 Ford Explorer is a rare 6-door SUV featuring a 4-cylinder engine with LPG autogas fuel system.
                        Originally from Japan, this vehicle has covered 96,378 kilometers and offers authentic vintage charm with modern
                        4WD capability. The unique 6-door configuration provides excellent seating for up to 6 passengers, making it
                        perfect for families or collectors who appreciate distinctive automotive design.
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Settings className="h-5 w-5 text-automotive-blue" />
                        Technical Specifications
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                        {technicalSpecs.map((spec) => (
                            <div key={spec.label} className="flex justify-between items-center py-2">
                                <span className="text-muted-foreground">{spec.label}:</span>
                                <span className="font-medium">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Additional Details */}
            <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Palette className="h-5 w-5 text-automotive-blue" />
                        Additional Details
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {additionalDetails.map((detail) => (
                            <div key={detail.label} className="p-3 bg-muted rounded-lg">
                                <div className="text-sm text-muted-foreground mb-1">
                                    {detail.label}
                                </div>
                                <div className="font-medium">
                                    {detail.label.includes("Color") ? (
                                        <Badge variant="secondary" className="bg-primary text-white">
                                            {detail.value}
                                        </Badge>
                                    ) : (
                                        detail.value
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CarSpecifications;