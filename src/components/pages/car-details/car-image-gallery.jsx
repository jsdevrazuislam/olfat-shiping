import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";



const mainImage = 'https://fls-9fd3ec99-d165-4543-bba8-eceff183d0c9.laravel.cloud/uploads/vehicles/photos/19/tmpznggcLomjk1758095157.jpg'
const interiorImage = 'https://fls-9fd3ec99-d165-4543-bba8-eceff183d0c9.laravel.cloud/uploads/vehicles/photos/19/tmpuBMn0PaduI1758095154.jpg';
const sideImage = "https://fls-9fd3ec99-d165-4543-bba8-eceff183d0c9.laravel.cloud/uploads/vehicles/photos/19/tmpPOJj82Sc3c1758095154.jpg";
const engineImage = "https://fls-9fd3ec99-d165-4543-bba8-eceff183d0c9.laravel.cloud/uploads/vehicles/photos/19/tmpjAUlSFK41w1758095157.jpg"

const CarImageGallery = () => {
  const images = [
    { id: 1, src: mainImage, alt: "Ford Explorer Main View" },
    { id: 2, src: interiorImage, alt: "Ford Explorer Interior" },
    { id: 3, src: sideImage, alt: "Ford Explorer Side View" },
    { id: 4, src: engineImage, alt: "Ford Explorer Engine" },
    { id: 5, src: mainImage, alt: "Ford Explorer Front View" },
    { id: 6, src: sideImage, alt: "Ford Explorer Rear View" },
    { id: 7, src: interiorImage, alt: "Ford Explorer Dashboard" },
    { id: 8, src: engineImage, alt: "Ford Explorer Engine Detail" },
    { id: 9, src: mainImage, alt: "Ford Explorer Front Angle" },
    { id: 10, src: sideImage, alt: "Ford Explorer Rear Angle" },
    { id: 11, src: interiorImage, alt: "Ford Explorer Front Seats" },
    { id: 12, src: engineImage, alt: "Ford Explorer Under Hood" },
    { id: 13, src: mainImage, alt: "Ford Explorer Driver Side" },
    { id: 14, src: sideImage, alt: "Ford Explorer Passenger Side" },
    { id: 15, src: interiorImage, alt: "Ford Explorer Rear Seats" },
    { id: 16, src: engineImage, alt: "Ford Explorer Transmission" },
    { id: 17, src: mainImage, alt: "Ford Explorer Exterior Detail" },
    { id: 18, src: sideImage, alt: "Ford Explorer Wheel Detail" },
    { id: 19, src: interiorImage, alt: "Ford Explorer Interior Detail" },
    { id: 20, src: engineImage, alt: "Ford Explorer Engine Bay" },
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomMode, setZoomMode] = useState(false);
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });


  const handleZoomToggle = () => {
    setZoomMode((prev) => !prev);
  };

  const handleMouseMove = (e) => {
    if (!zoomMode) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x: `${x}%`, y: `${y}%` });
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className='py-0 border-none'>
      <div className="space-y-4">
        <div className="relative group">
          <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden" onClick={handleZoomToggle} onMouseMove={handleMouseMove}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className={`w-full h-full object-cover transition-transform duration-300 ${zoomMode ? "scale-210 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                }`}
              style={{
                transformOrigin: `${mousePos.x} ${mousePos.y}`,
              }}
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute opacity-0 group-hover:opacity-100 left-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full border-none text-white hover:bg-primary hover:text-white  transition-all duration-300 ease-in-out"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute opacity-0 group-hover:opacity-100 right-4 top-1/2 -translate-y-1/2 bg-transparent rounded-full border-none text-white hover:bg-primary hover:text-white  transition-all duration-300 ease-in-out"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {selectedImage + 1} / {images.length}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-muted-foreground/20 scrollbar-track-transparent">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={`aspect-square w-20 flex-shrink-0 bg-muted rounded-md overflow-hidden border-2 transition-all ${selectedImage === index
                  ? "border-automotive-blue ring-2 ring-automotive-blue/20"
                  : "border-transparent hover:border-automotive-blue/50"
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CarImageGallery;