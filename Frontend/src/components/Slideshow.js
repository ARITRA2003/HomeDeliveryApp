import React from 'react'
import BurgerPicture from "../static/BurgerPicture.jpg"
import PizzaPicture from "../static/PizzaPicture.jpg"
import PastryPicture from "../static/pastryPicture.jpg"

const Slideshow = () => {
    return (
        <Carousel >
            <Carousel.Item interval={1000} style={{"maxHeight":"500px"}}>
                <img
                    className="d-block w-100"
                    src={BurgerPicture}
                    style={{"objectFit":"contain !important"}}
                />
                <Carousel.Caption>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} style={{"maxHeight":"500px"}}>
                <img
                    className="d-block w-100"
                    src={PizzaPicture}
                    alt="Second slide"
                    style={{"objectFit":"contain !important"}}
                />
                <Carousel.Caption>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{"maxHeight":"500px"}}>
                <img
                    className="d-block w-100"
                    src={PastryPicture}
                    alt="Third slide"
                    style={{"objectFit":"contain !important",}}
                />
                <Carousel.Caption>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                    </form>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slideshow
