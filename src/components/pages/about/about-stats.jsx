import React from 'react'

const AboutStats = () => {

    const achievements = [
        { number: "15+", label: "Years Experience" },
        { number: "50+", label: "Countries Served" },
        { number: "10K+", label: "Vehicles Shipped" },
        { number: "99.8%", label: "Success Rate" }
    ];


    return (
        <>
            <section
                className="py-14 bg-background border-b border-border/50"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="app_container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="text-center"
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                                    {achievement.number}
                                </div>
                                <div className="text-muted-foreground">
                                    {achievement.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutStats
