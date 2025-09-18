import Services from "@/components/pages/landing/services";
import AboutHero from "@/components/pages/about/about-hero";
import AboutStats from "@/components/pages/about/about-stats";
import OurStory from "@/components/pages/about/our-story";
import OurMission from "@/components/pages/about/our-mission";
import HowWeWork from "@/components/pages/about/how-we-work";
import ContactSupport from "@/components/pages/about/contact";
import Seo from "@/components/seo";


const AboutPage = () => {
    return (
        <>
            <Seo
                title="About Us Page Title"
                description="A detailed description of the Home page."
                canonical="https://yourdomain.com/"
                schemaMarkup={{
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Your Site',
                    url: 'https://yourdomain.com/',
                }}
            />
            <AboutHero />
            <AboutStats />
            <OurStory />
            <OurMission />
            <Services />
            <HowWeWork />
            <ContactSupport />
        </>
    );
};

export default AboutPage;