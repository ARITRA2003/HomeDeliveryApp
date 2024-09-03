import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5 mb-5 p-4 bg-light shadow-sm rounded">
                <h2 className="mb-4 text-primary text-center">About Us</h2>
                <p className="lead" style={{ fontSize: "1.25rem", lineHeight: "1.75" }}>
                    Since its initiation in 2011, <strong>Organization Name</strong> has become a leading supply chain management company in the US. Our vision is to transform into the operational backbone of business in the US, through a combination of world-class infrastructure, high-quality logistics operations, and cutting-edge engineering and technology capabilities.
                </p>
                <p className="lead" style={{ fontSize: "1.25rem", lineHeight: "1.75" }}>
                    Our team has successfully fulfilled over 340 million orders to more than 50 million households across the US.
                </p>
                <div className="mt-4">
                    <ul className="list-unstyled">
                        <li><strong>19</strong> Automated Sort Centers</li>
                        <li><strong>30</strong> Fulfillment Centers</li>
                        <li><strong>44</strong> Hubs</li>
                        <li><strong>2500+</strong> Direct Delivery Centers</li>
                        <li><strong>5000+</strong> Partner Centers</li>
                        <li><strong>14000+</strong> Vehicles</li>
                        <li><strong>21000+</strong> Team Members</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default About
