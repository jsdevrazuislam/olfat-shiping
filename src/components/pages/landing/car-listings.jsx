import { Link } from "react-router"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Calendar, MapPin, Fuel, Settings, Eye } from "lucide-react"
import { useNavigate } from "react-router"

const carListings = [
    {
        id: 89,
        title: "2024 KIA Sportage",
        price: 28500,
        vehicle_photos: [
            {
                name: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/ewBaJ7TAh11744115236.jpg",
                thumbnail:
                    "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/thumb-ewBaJ7TAh11744115236.jpg",
            },
            {
                name: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/n79M0zLV7G1744115236.jpg",
                thumbnail:
                    "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/thumb-n79M0zLV7G1744115236.jpg",
            },
            {
                name: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/0qpJMb1WEy1744115237.jpg",
                thumbnail:
                    "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/thumb-0qpJMb1WEy1744115237.jpg",
            },
        ],
        features: {
            engine: 4,
            year: 2024,
            kilometers: 25000,
            region: "Japan",
            doors: 4,
        },
        technicalDetails: {
            fuelType: "LPG Autogas",
            transmission: "Automatic",
            mileageType: "miles",
            driveTrain: "4WD",
            vehicleMake: "KIA",
            vehicleModel: "SPORTAGE",
            numberOfCylinders: 4,
            vehicleCondition: 5,
        },
        additionalDetails: {
            bodyStyle: "SUV",
            interiorColor: "BLACK",
            exteriorColor: "WHITE",
            doors: 4,
            seatingCapacity: 5,
            year: 2024,
            odometer: 25000,
            region: "Japan",
            vin: "JW3GNE4K2EL863201",
        },
    },
    {
        id: 90,
        title: "2023 Toyota Camry",
        price: 32000,
        vehicle_photos: [
            {
                name: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/2023-toyota-camry-sedan-TmO8Xxu8zRtBnP5M4Tn7zwtJJ7kgtb.jpg",
                thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/2023-toyota-camry-sedan-TmO8Xxu8zRtBnP5M4Tn7zwtJJ7kgtb.jpg",
            },
        ],
        features: {
            engine: 4,
            year: 2023,
            kilometers: 15000,
            region: "USA",
            doors: 4,
        },
        technicalDetails: {
            fuelType: "Gasoline",
            transmission: "Automatic",
            mileageType: "miles",
            driveTrain: "FWD",
            vehicleMake: "TOYOTA",
            vehicleModel: "CAMRY",
            numberOfCylinders: 4,
            vehicleCondition: 5,
        },
        additionalDetails: {
            bodyStyle: "Sedan",
            interiorColor: "BEIGE",
            exteriorColor: "SILVER",
            doors: 4,
            seatingCapacity: 5,
            year: 2023,
            odometer: 15000,
            region: "USA",
            vin: "4T1C11AK5NU123456",
        },
    },
    {
        id: 91,
        title: "2022 Honda CR-V",
        price: 29500,
        vehicle_photos: [
            {
                name: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/2022-honda-cr-v-suv-8EZK1WL0CBNlt9CVelWy5CFFGPfQzZ.jpg",
                thumbnail: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/2022-honda-cr-v-suv-8EZK1WL0CBNlt9CVelWy5CFFGPfQzZ.jpg",
            },
        ],
        features: {
            engine: 4,
            year: 2022,
            kilometers: 35000,
            region: "Canada",
            doors: 4,
        },
        technicalDetails: {
            fuelType: "Gasoline",
            transmission: "CVT",
            mileageType: "miles",
            driveTrain: "AWD",
            vehicleMake: "HONDA",
            vehicleModel: "CR-V",
            numberOfCylinders: 4,
            vehicleCondition: 4,
        },
        additionalDetails: {
            bodyStyle: "SUV",
            interiorColor: "BLACK",
            exteriorColor: "BLUE",
            doors: 4,
            seatingCapacity: 5,
            year: 2022,
            odometer: 35000,
            region: "Canada",
            vin: "2HKRW2H85NH123456",
        },
    },
]

export default function CarListingsSection() {

    const navigate = useNavigate()

    return (
        <>
            <section
                className="py-14 bg-gradient-to-b from-background to-muted/20"
                data-aos="fade-up"
            >
                <div className="app_container">
                    <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="50">
                        <Badge variant="outline" className="border-primary/20 text-primary">
                            Featured Vehicles
                        </Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Premium <span className="text-primary">Car Collection</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Discover our handpicked selection of quality vehicles from trusted
                            dealers worldwide
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {carListings.map((car, index) => (
                            <Link
                                key={car.id}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                                className="group relative bg-background border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30"
                                to={`/car/${car.id}`}
                            >
                                <div className="relative h-48 lg:h-56 overflow-hidden">
                                    <img
                                        src={car.vehicle_photos[0]?.name}
                                        alt={car.title}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
                                    />

                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-primary group-hover:bg-secondary text-primary-foreground font-semibold px-3 py-1">
                                            ${car.price.toLocaleString()}
                                        </Badge>
                                    </div>

                                    <div
                                        className={`absolute top-4 right-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-2 `}
                                    >
                                        <Button size="sm" className="bg-secondary backdrop-blur-sm">
                                            <Eye className="w-4 h-4 mr-1" />
                                        </Button>
                                    </div>

                                    <div className="absolute bottom-4 right-4">
                                        <Badge variant="secondary" className="bg-green-500 backdrop-blur-sm">
                                            Condition: {car.technicalDetails.vehicleCondition}/5
                                        </Badge>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {car.title}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4 mr-2 text-primary" />
                                            {car.features.year}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                                            {car.features.region}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Fuel className="w-4 h-4 mr-2 text-primary" />
                                            {car.technicalDetails.fuelType}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Settings className="w-4 h-4 mr-2 text-primary" />
                                            {car.technicalDetails.transmission}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm text-muted-foreground">Mileage:</span>
                                        <span className="font-medium text-foreground">
                                            {car.features.kilometers.toLocaleString()}{" "}
                                            {car.technicalDetails.mileageType}
                                        </span>
                                    </div>

                                    <Button className="w-full gradient-primary">
                                        View Details
                                        <Car className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="100">
                        <Button
                            size="lg"
                            className="border-primary/30 gradient-primary hover:text-primary-foreground"
                            onClick={() => navigate("/cars")}
                        >
                            View All Vehicles
                            <Car className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>
        </>

    )
}
