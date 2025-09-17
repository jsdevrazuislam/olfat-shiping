import { Skeleton } from "@/components/ui/skeleton";

const CarListingSkeleton = () => {
    return (
        <div className="min-h-screen bg-gradient-subtle">
            <div className="pt-20 pb-16">
                <div className="app_container">
                    <div className="text-center mb-12">
                        <Skeleton className="h-12 w-64 mx-auto mb-4" />
                        <Skeleton className="h-6 w-96 mx-auto" />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="lg:w-80 space-y-6">
                            <div className="bg-card rounded-lg border shadow-card p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <Skeleton className="h-6 w-20" />
                                    <Skeleton className="h-8 w-16" />
                                </div>

                                <div className="space-y-6">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <div key={i} className="space-y-3">
                                            <Skeleton className="h-5 w-24" />
                                            <div className="space-y-2">
                                                {Array.from({ length: 4 }, (_, j) => (
                                                    <div key={j} className="flex items-center space-x-3">
                                                        <Skeleton className="h-4 w-4" />
                                                        <Skeleton className="h-4 w-20" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <Skeleton className="h-5 w-48" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                                {Array.from({ length: 6 }, (_, i) => (
                                    <div key={i} className="bg-card rounded-lg border p-6 space-y-4">
                                        <Skeleton className="aspect-video w-full rounded-lg" />
                                        <Skeleton className="h-6 w-3/4" />

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center space-x-2">
                                                <Skeleton className="h-4 w-4" />
                                                <Skeleton className="h-4 w-16" />
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Skeleton className="h-4 w-4" />
                                                <Skeleton className="h-4 w-16" />
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Skeleton className="h-4 w-4" />
                                            <Skeleton className="h-4 w-20" />
                                        </div>

                                        <div className="flex gap-2">
                                            <Skeleton className="h-6 w-16" />
                                            <Skeleton className="h-6 w-20" />
                                        </div>

                                        <Skeleton className="h-10 w-full" />
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center">
                                <div className="flex items-center space-x-2">
                                    <Skeleton className="h-10 w-20" />
                                    {Array.from({ length: 3 }, (_, i) => (
                                        <Skeleton key={i} className="h-10 w-10" />
                                    ))}
                                    <Skeleton className="h-10 w-16" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarListingSkeleton;