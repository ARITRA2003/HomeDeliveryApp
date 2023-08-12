import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-3" style={{fontSize: "20px",}}>
                <h2 className='md-2 '> About us</h2>
                Since its initiation in 2011, Organization Name has turned into US driving inventory network administrators organization. Our vision is to wind up the working framework for business in the US, through a blend of world-class foundation, coordinations activities of the most noteworthy quality, and front-line designing and innovation capacities.
                Our group has effectively satisfied more than 340 million requests to in excess of 50 million families crosswise over the US.
                19 robotized sort focuses, 30 satisfaction focuses, 44 center points, 2500+ direct conveyance focuses, 5000+ accomplice focuses, 14000+ vehicles, and 21000+ colleagues 
            </div>
            <Footer />
        </div>
    )
}

export default About
