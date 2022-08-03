import React from 'react'
import Footer from '../Components/FooterComponents/Footer'
import Form from '../Components/FormComponents/Form'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'

const ContactPage = () => {
    return (
        <div>
            <NavBar />
            <AltHeroImage heading="Contact" text="How to Reach Out"/>
            <Form />
            <Footer />
        </div>
    )
}

export default ContactPage