import React from 'react'
import Footer from '../Components/FooterComponents/Footer'
import Form from '../Components/FormComponents/Form'
import AltHeroImage from '../Components/HeroImageComponents/AltHeroImage'
import NavBar from '../Components/NavBarComponents/NavBar'
import { useEffect } from 'react';

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <NavBar />
            <AltHeroImage heading="Contact" text="How to Reach Out" />
            <Form />
            <br></br><br></br>
            <Footer />
        </div>
    )
}

export default ContactPage