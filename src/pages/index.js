import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Data'
import DiscoverSection from '../components/Discover'
import ServiceSection from '../components/Services'
import Facility from '../components/Facilities'
import Footer from '../components/Foooter'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <DiscoverSection {...homeObjTwo} />
            <Facility />
            <ServiceSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home
