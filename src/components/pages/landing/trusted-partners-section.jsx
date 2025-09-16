
const partners = [
  { id: 1, name: "Partner 1", logo: "https://olfatshipping.com/storage/web/trusted/1.png" },
  { id: 2, name: "Partner 2", logo: "https://olfatshipping.com/storage/web/trusted/2.jpg" },
  { id: 3, name: "Partner 3", logo: "https://olfatshipping.com/storage/web/trusted/3.png" },
  { id: 4, name: "Partner 4", logo: "https://olfatshipping.com/storage/web/trusted/4.png" },
  { id: 5, name: "Partner 5", logo: "https://olfatshipping.com/storage/web/trusted/5.jpg" },
  { id: 6, name: "Partner 6", logo: "https://olfatshipping.com/storage/web/trusted/6.png" },
  { id: 7, name: "Partner 7", logo: "https://olfatshipping.com/storage/web/trusted/7.png" },
  { id: 8, name: "Partner 8", logo: "https://olfatshipping.com/storage/web/trusted/8.png" },
  { id: 9, name: "Partner 9", logo: "https://olfatshipping.com/storage/web/trusted/9.png" },
  { id: 10, name: "Partner 10", logo: "https://olfatshipping.com/storage/web/trusted/10.png" },
  { id: 11, name: "Partner 11", logo: "https://olfatshipping.com/storage/web/trusted/11.png" },
]

export default function TrustedPartnersSection() {
  return (
    <section className="py-14" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Trusted Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We work with leading automotive brands and logistics companies worldwide to provide you with the best
            shipping experience.
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center p-4 lg:p-6 bg-card border border-border rounded-lg hover:border-primary/20 transition-all duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={index * 100 + 300}
            >
              <div className="relative w-full h-16 lg:h-20">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12 lg:mt-16"
          data-aos="fade-up"
          data-aos-delay="partners.length * 100 + 500"
        >
          <p className="text-sm text-muted-foreground">
            Trusted by over 50,000+ customers worldwide for reliable car shipping services
          </p>
        </div>
      </div>
    </section>

  )
}
