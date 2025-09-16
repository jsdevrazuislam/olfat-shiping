import { useState } from "react"
import {Link} from "react-router"
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  X,
  Car,
  Gauge,
  Users,
  Settings,
  Calendar,
  MapPin,
  Palette,
  Eye,
  Home,
  DollarSign,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const carData = {
  id: 89,
  title: "2024 KIA Sportage",
  price: 28500,
  vehicle_photos: [
    {
      name: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/ewBaJ7TAh11744115236.jpg",
      thumbnail: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/thumb-ewBaJ7TAh11744115236.jpg",
    },
    {
      name: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/n79M0zLV7G1744115236.jpg",
      thumbnail: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/thumb-n79M0zLV7G1744115236.jpg",
    },
    {
      name: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/0qpJMb1WEy1744115237.jpg",
      thumbnail: "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/thumb-0qpJMb1WEy1744115237.jpg",
    },
  ],
  features: {
    engine: 4,
    year: 1975,
    kilometers: 96378,
    region: "Japan",
    doors: 6,
  },
  technicalDetails: {
    fuelType: "LPG Autogas",
    transmission: "Automatic",
    mileageType: "miles",
    driveTrain: "4WD",
    vehicleMake: "FORD",
    vehicleModel: "EXPLORER",
    numberOfCylinders: 4,
    vehicleCondition: 5,
  },
  additionalDetails: {
    bodyStyle: "SUV",
    interiorColor: "PURPLE",
    exteriorColor: "DARK BLUE",
    doors: 4,
    seatingCapacity: 7,
    year: 2024,
    odometer: 25000,
    region: "Japan",
    vin: "JW3GNE4K2EL863201",
  },
}

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

export default function CarDetailsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)
  const [showFullscreen, setShowFullscreen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === carData.vehicle_photos.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? carData.vehicle_photos.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
              Cars
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">{carData.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary flex items-center gap-1">
              <DollarSign className="w-6 h-6" />
              {carData.price.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">USD</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200">
                  <img
                    src={carData.vehicle_photos[currentImageIndex]?.name || "/placeholder.svg?height=600&width=800"}
                    alt={carData.title}
                    className={`object-cover transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
                  />

                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-white/90 hover:bg-white border"
                      onClick={() => setIsZoomed(!isZoomed)}
                    >
                      {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="bg-white/90 hover:bg-white border"
                      onClick={() => setShowFullscreen(true)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {carData.vehicle_photos.length}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="p-4 bg-white">
                  <div className="flex gap-2 overflow-x-auto">
                    {carData.vehicle_photos.map((photo, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? "border-primary" : "border-transparent hover:border-primary/50"
                        }`}
                      >
                        <img
                          src={photo.thumbnail || photo.name}
                          alt={`${carData.title} ${index + 1}`}
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg">
              <div className="p-4 sm:p-6">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h1 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{carData.title}</h1>
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {carData.features.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Gauge className="w-4 h-4" />
                          {carData.features.kilometers.toLocaleString()} km
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {carData.features.region}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 self-start">
                      <Star className="w-3 h-3 mr-1" />
                      Condition: {carData.technicalDetails.vehicleCondition}/5
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{carData.features.engine}</div>
                        <div className="text-sm text-muted-foreground">Cylinders</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{carData.features.doors}</div>
                        <div className="text-sm text-muted-foreground">Doors</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{carData.features.year}</div>
                        <div className="text-sm text-muted-foreground">Year</div>
                      </div>
                      <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-lg font-bold text-primary">{carData.features.region}</div>
                        <div className="text-sm text-muted-foreground">Origin</div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-primary" />
                      Technical Specifications
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Make & Model</span>
                          <span className="font-medium text-right">
                            {carData.technicalDetails.vehicleMake} {carData.technicalDetails.vehicleModel}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Fuel Type</span>
                          <span className="font-medium">{carData.technicalDetails.fuelType}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Transmission</span>
                          <span className="font-medium">{carData.technicalDetails.transmission}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Drive Train</span>
                          <span className="font-medium">{carData.technicalDetails.driveTrain}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Body Style</span>
                          <span className="font-medium">{carData.additionalDetails.bodyStyle}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Doors</span>
                          <span className="font-medium">{carData.additionalDetails.doors}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Seating</span>
                          <span className="font-medium flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {carData.additionalDetails.seatingCapacity} Seats
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border/50">
                          <span className="text-muted-foreground">Cylinders</span>
                          <span className="font-medium">{carData.technicalDetails.numberOfCylinders}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-primary" />
                      Colors
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Exterior Color</span>
                        <span className="font-medium">{carData.additionalDetails.exteriorColor}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-border/50">
                        <span className="text-muted-foreground">Interior Color</span>
                        <span className="font-medium">{carData.additionalDetails.interiorColor}</span>
                      </div>
                    </div>
                  </div>

                  {/* VIN */}
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <span className="text-muted-foreground">VIN Number</span>
                      <span className="font-mono text-sm bg-white px-3 py-1 rounded border break-all">
                        {carData.additionalDetails.vin}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5 text-primary" />
                  Similar Cars
                </h3>
                <div className="space-y-4">
                  {similarCars.map((car, index) => (
                    <Link key={index} href={`/car-details/${index + 1}`} className="block group">
                      <div className="flex gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all">
                        <div className="relative w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={car.image || "/placeholder.svg"}
                            alt={car.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                            {car.title}
                          </h4>
                          <div className="text-sm font-semibold text-primary mb-2">${car.price.toLocaleString()}</div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Gauge className="w-3 h-3" />
                              <span>{car.odo} miles</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span>{car.sets}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20 rounded-lg">
              <div className="p-4 sm:p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">Interested in this car?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get in touch with our team for more details and shipping quotes.
                </p>
                <Button className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setShowFullscreen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] m-4">
            <img
              src={carData.vehicle_photos[currentImageIndex]?.name || "/placeholder.svg"}
              alt={carData.title}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <Button variant="secondary" size="icon" onClick={prevImage}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="icon" onClick={nextImage}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
