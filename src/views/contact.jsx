import ContactForm from '@/components/pages/contact/contact-form'
import ContactHero from '@/components/pages/contact/contact-hero'
import ContactInfo from '@/components/pages/contact/contact-info'
import Seo from '@/components/seo'
import React from 'react'

const ContactPage = () => {
    return (
        <>
            <Seo
                title="Contact Page Title"
                description="A detailed description of the Home page."
                canonical="https://yourdomain.com/"
                schemaMarkup={{
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Your Site',
                    url: 'https://yourdomain.com/',
                }}
            />
            <ContactHero />
            <ContactForm />
            <ContactInfo />
        </>
    )
}

export default ContactPage
