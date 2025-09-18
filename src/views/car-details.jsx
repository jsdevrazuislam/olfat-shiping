import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Share2,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Fuel,
  Settings,
  Shield
} from "lucide-react";
import CarImageGallery from "@/components/pages/car-details/car-image-gallery";
import CarSpecifications from "@/components/pages/car-details/car-specifications";
import { Gauge } from "lucide-react";
import { Users } from "lucide-react";
import { Link } from "react-router";


const similarCars = [
  {
    image:
      "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/pzW6LElvOncHxn4RuHdmCsJDleJB8THa4wii9IjQ.jpg",
    title: "1975 FORD EXPLORER",
    odo: "96378",
    sets: "6 Seater",
    drive: "Automatic",
    price: 22500,
  },
  {
    image:
      "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/vSNoWvpCwyL1UGiFVE4NiEbtOQpwPvLrdO0Xe32y.jpg",
    title: "2020 TOYOTA CAMRY",
    odo: "45000",
    sets: "5 Seater",
    drive: "Automatic",
    price: 31200,
  },
  {
    image:
      "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/y2A4fShuIfiENHv1uX7jkj1l1ZqVEHJftX646Foh.jpg",
    title: "2022 BMW X5",
    odo: "25000",
    sets: "7 Seater",
    drive: "Automatic",
    price: 45800,
  },
]


const CarDetailsPage = () => {
  return (
    <div>
      <div className="bg-primary-gradient text-white">
        <div className="app_container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">1975 Ford Explorer</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  1975
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="h-4 w-4" />
                  4 Cylinder
                </div>
                <div className="flex items-center gap-1">
                  <Fuel className="h-4 w-4" />
                  LPG Autogas
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Japan
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="app_container mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CarImageGallery />
            <CarSpecifications />
          </div>
          <div className="space-y-6">
            <Card className="px-6">
              <h3 className="font-semibold text-xl mb-4">Quick Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Condition</span>
                  <span>5/10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transmission</span>
                  <span>Automatic</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Drive Train</span>
                  <span>4WD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Doors</span>
                  <span>6 Doors</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Seating</span>
                  <span>6 Passengers</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">VIN</span>
                  <span className="text-xs">JW3GNE4K2EL863201</span>
                </div>
              </div>
            </Card>

            <Card className="px-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Contact for Price
                </div>
                <div className="text-sm text-muted-foreground">
                  96,378 km • 1975 Model
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-primary-gradient hover:bg-secondary-gradient">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Dealer
                </Button>
                <Button variant="outline" className="w-full border-automotive-blue text-automotive-blue hover:bg-automotive-blue/5">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </Card>

            <Card className="px-6 bg-automotive-gray-light border-l-4 border-l-primary">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-automotive-warning mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Safety Tips</h4>
                  <p className="text-xs text-muted-foreground">
                    Always inspect the vehicle in person and verify all documentation before purchase.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Similar <span className="text-primary">Vehicles</span></h2>
          <div className="relative">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {similarCars.map((car, index) => (
                <Link key={index} to={`/car/${car.id}`} className="group flex-none w-80 snap-start">
                  <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={car.image || "/placeholder.svg"}
                        alt={car.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{car.title}</h3>
                      <div className="text-2xl font-bold text-primary mb-4">${car.price.toLocaleString()}</div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4" />
                          <span>{car.odo} miles</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{car.sets}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings className="w-4 h-4" />
                          <span>{car.drive}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;