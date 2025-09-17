import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Car, MapPin, Calendar, Filter, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router";
import FilterSection from "@/components/pages/car-listings/filters";
import CarListingSkeleton from "@/components/loading/car-listing-skeleton";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Seo from "@/components/seo";

const CarListingsPage = () => {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [filters, setFilters] = useState({
        make: [],
        model: [],
        bodyStyle: [],
        interiorColor: [],
        exteriorColor: []
    });

    const allCarListings = [
        {
            "id": 1,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/pzW6LElvOncHxn4RuHdmCsJDleJB8THa4wii9IjQ.jpg",
            "title": "1975 FORD EXPLORER",
            "odo": "96378",
            "sets": "6 Seater",
            "drive": "Automatic",
            "make": "FORD",
            "model": "EXPLORER",
            "bodyStyle": "None",
            "interiorColor": "BLACK",
            "exteriorColor": "BLUE - GRAY"
        },
        {
            "id": 2,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/vSNoWvpCwyL1UGiFVE4NiEbtOQpwPvLrdO0Xe32y.jpg",
            "title": "2020 TOYOTA CAMRY",
            "odo": "45000",
            "sets": "5 Seater",
            "drive": "Automatic",
            "make": "Toyota",
            "model": "Altima",
            "bodyStyle": "Coupe",
            "interiorColor": "BLACK & WHITE",
            "exteriorColor": "BLACK"
        },
        {
            "id": 3,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/y2A4fShuIfiENHv1uX7jkj1l1ZqVEHJftX646Foh.jpg",
            "title": "2022 BMW X5",
            "odo": "25000",
            "sets": "7 Seater",
            "drive": "Automatic",
            "make": "Mercedes",
            "model": "S Class",
            "bodyStyle": "Convertible",
            "interiorColor": "BROWN",
            "exteriorColor": "BLACK & WHITE"
        },
        {
            "id": 4,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/b1bJLbqo7F4jvbg74E89pIYm5Vp02GYKxzrwHK5x.jpg",
            "title": "2021 MERCEDES C-CLASS",
            "odo": "35000",
            "sets": "5 Seater",
            "drive": "Automatic",
            "make": "Mercedes",
            "model": "S Class",
            "bodyStyle": "Hatchback",
            "interiorColor": "BURGUNDY",
            "exteriorColor": "BROWN"
        },
        {
            "id": 5,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/pjP3sUR9wtC5X6Su2P67a5SVUS2BucRc4Z9Qpr3X.jpg",
            "title": "2023 HONDA CR-V",
            "odo": "15000",
            "sets": "5 Seater",
            "drive": "Automatic",
            "make": "Chevrolet",
            "model": "Blazer",
            "bodyStyle": "Minivan",
            "interiorColor": "BLACK",
            "exteriorColor": "BURGUNDY"
        },
        {
            "id": 6,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/tmU9zBlmSSVJ4LQfQViZIp35grQ9geUlbNA4hzSL.jpg",
            "title": "2022 AUDI A4",
            "odo": "28000",
            "sets": "5 Seater",
            "drive": "Automatic",
            "make": "Nissan",
            "model": "Armada",
            "bodyStyle": "Coupe",
            "interiorColor": "BLUE - GRAY",
            "exteriorColor": "BLACK"
        },
        {
            "id": 7,
            "image": "https://olfat.ams3.cdn.digitaloceanspaces.com/uploads/vehicle_images/tmU9zBlmSSVJ4LQfQViZIp35grQ9geUlbNA4hzSL.jpg",
            "title": "2022 AUDI A4",
            "odo": "28000",
            "sets": "5 Seater",
            "drive": "Automatic",
            "make": "Nissan",
            "model": "Armada",
            "bodyStyle": "Coupe",
            "interiorColor": "BLUE - GRAY",
            "exteriorColor": "BLACK"
        }
    ];

    const itemsPerPage = 6;

    const filterOptions = {
        make: ["Mercedes", "Chevrolet", "Toyota", "Nissan", "FORD"],
        model: ["Altima", "Armada", "Blazer", "EQUINOX", "S Class"],
        bodyStyle: ["None", "Convertible", "Coupe", "Hatchback", "Minivan"],
        interiorColor: ["BLACK", "BLACK & WHITE", "BLUE - GRAY", "BROWN", "BURGUNDY"],
        exteriorColor: ["BLACK", "BLACK & WHITE", "BLUE - GRAY", "BROWN", "BURGUNDY"]
    };

    const filteredCars = allCarListings.filter(car => {
        return (
            (filters.make.length === 0 || filters.make.includes(car.make)) &&
            (filters.model.length === 0 || filters.model.includes(car.model)) &&
            (filters.bodyStyle.length === 0 || filters.bodyStyle.includes(car.bodyStyle)) &&
            (filters.interiorColor.length === 0 || filters.interiorColor.includes(car.interiorColor)) &&
            (filters.exteriorColor.length === 0 || filters.exteriorColor.includes(car.exteriorColor))
        );
    });

    const totalPages = Math.ceil(filteredCars.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCars = filteredCars.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (filterType, value, checked) => {
        setFilters(prev => ({
            ...prev,
            [filterType]: checked
                ? [...prev[filterType], value]
                : prev[filterType].filter(item => item !== value)
        }));
        setCurrentPage(1);
    };

    const clearAllFilters = () => {
        setFilters({
            make: [],
            model: [],
            bodyStyle: [],
            interiorColor: [],
            exteriorColor: []
        });
        setCurrentPage(1);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <CarListingSkeleton />;
    }

    const FilterComponents = () => (
        <div className="space-y-1">
            <FilterSection
                title="Make"
                options={filterOptions.make}
                selectedOptions={filters.make}
                onFilterChange={(value, checked) => handleFilterChange('make', value, checked)}
            />

            <FilterSection
                title="Model"
                options={filterOptions.model}
                selectedOptions={filters.model}
                onFilterChange={(value, checked) => handleFilterChange('model', value, checked)}
            />

            <FilterSection
                title="Body Style"
                options={filterOptions.bodyStyle}
                selectedOptions={filters.bodyStyle}
                onFilterChange={(value, checked) => handleFilterChange('bodyStyle', value, checked)}
            />

            <FilterSection
                title="Interior Color"
                options={filterOptions.interiorColor}
                selectedOptions={filters.interiorColor}
                onFilterChange={(value, checked) => handleFilterChange('interiorColor', value, checked)}
            />

            <FilterSection
                title="Exterior Color"
                options={filterOptions.exteriorColor}
                selectedOptions={filters.exteriorColor}
                onFilterChange={(value, checked) => handleFilterChange('exteriorColor', value, checked)}
            />
        </div>
    );

    return (
        <section className="py-14" data-aos="fade-up">
            <Seo
                title="Car Listing Page Title"
                description="A detailed description of the Home page."
                canonical="https://yourdomain.com/"
                schemaMarkup={{
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Your Site',
                    url: 'https://yourdomain.com/',
                }}
            />
            <div className="app_container">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Car <span className="text-primary">Listings</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Browse our extensive collection of premium vehicles ready for worldwide shipping
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="hidden lg:block lg:w-80" data-aos="fade-right">
                        <div className="sticky top-24 bg-card rounded-lg border shadow-card p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-foreground flex items-center">
                                    <Filter className="w-5 h-5 mr-2 text-primary" />
                                    Filters
                                </h2>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={clearAllFilters}
                                    className="text-xs"
                                >
                                    Clear All
                                </Button>
                            </div>
                            <FilterComponents />
                        </div>
                    </div>

                    <div className="flex-1" data-aos="fade-up">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <p className="text-muted-foreground">
                                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredCars.length)} of {filteredCars.length} results
                                </p>
                            </div>

                            <div className="lg:hidden">
                                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" className="flex items-center gap-2">
                                            <SlidersHorizontal className="w-4 h-4" />
                                            Filters
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="w-80 sm:w-96">
                                        <SheetHeader>
                                            <SheetTitle className="flex items-center">
                                                <Filter className="w-5 h-5 mr-2 text-primary" />
                                                Filters
                                            </SheetTitle>
                                            <SheetDescription>
                                                Filter cars by your preferences
                                            </SheetDescription>
                                        </SheetHeader>

                                        <div className="mt-6 space-y-4 px-6">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={clearAllFilters}
                                                className="w-full text-xs"
                                            >
                                                Clear All Filters
                                            </Button>
                                            <FilterComponents />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8" data-aos="fade-up">
                            {paginatedCars.map((car, index) => (
                                <Link key={car.id} to={`/car/${car.id}`}>
                                    <Card data-aos="zoom-in"
                                        data-aos-delay={300 + index * 100} className={`group hover:shadow-elegant py-0 transition-smooth border-primary/10 cursor-pointer h-full`}>
                                        <CardHeader className="pb-3 px-0">
                                            <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                                                <img
                                                    src={car.image}
                                                    alt={car.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://via.placeholder.com/400x200/e5e5e5/9ca3af?text=Car+Image';
                                                    }}
                                                />
                                            </div>
                                            <CardTitle className="text-lg px-4 font-semibold text-foreground">
                                                {car.title}
                                            </CardTitle>
                                        </CardHeader>

                                        <CardContent className="space-y-4 px-4 pb-4 flex-1 flex flex-col">
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="flex items-center text-muted-foreground">
                                                    <Car className="h-4 w-4 text-primary mr-2" />
                                                    {car.odo} miles
                                                </div>

                                                <div className="flex items-center text-muted-foreground">
                                                    <MapPin className="h-4 w-4 text-secondary mr-2" />
                                                    {car.sets}
                                                </div>
                                            </div>

                                            <div className="flex items-center text-muted-foreground text-sm">
                                                <Calendar className="h-4 w-4 text-success mr-2" />
                                                {car.drive}
                                            </div>

                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                                                    {car.make}
                                                </Badge>
                                                <Badge variant="outline" className="text-xs border-secondary/20 text-secondary">
                                                    {car.bodyStyle}
                                                </Badge>
                                            </div>

                                            <Button className="w-full gradient-primary hover:shadow-elegant transition-smooth mt-4" onClick={(e) => e.preventDefault()}>
                                                View Details
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {filteredCars.length === 0 && (
                            <div className="text-center py-12" data-aos="fade-up">
                                <Car className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-foreground mb-2">No cars found</h3>
                                <p className="text-muted-foreground mb-4">Try adjusting your filters to see more results</p>
                                <Button onClick={clearAllFilters} variant="outline">
                                    Clear All Filters
                                </Button>
                            </div>
                        )}

                        {totalPages > 1 && (
                            <div className="flex justify-center" data-aos="fade-up">
                                <Pagination>
                                    <PaginationContent>
                                        <PaginationItem>
                                            <PaginationPrevious
                                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                            />
                                        </PaginationItem>

                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                            <PaginationItem key={page}>
                                                <PaginationLink
                                                    onClick={() => setCurrentPage(page)}
                                                    isActive={currentPage === page}
                                                    className="cursor-pointer"
                                                >
                                                    {page}
                                                </PaginationLink>
                                            </PaginationItem>
                                        ))}

                                        <PaginationItem>
                                            <PaginationNext
                                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CarListingsPage;