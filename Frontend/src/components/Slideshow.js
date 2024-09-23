import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BurgerPicture from "../static/BurgerPicture.jpg";
import PizzaPicture from "../static/PizzaPicture.jpg";
import PastryPicture from "../static/pastryPicture.jpg";
import { FaSearch } from 'react-icons/fa'; 

const Slideshow = ({ search, setsearch }) => {
    return (
        <div>
        <Carousel>
            <Carousel.Item interval={500} style={{ maxHeight: "700px" }}>
                <img
                    className="d-block w-100"
                    src={PizzaPicture}
                    alt="First slide"
                    style={{ objectFit: "cover" }}
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="input-group w-50">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => { setsearch(e.target.value) }}
                            />
                            <button className="btn btn-success" type="submit">
                                <FaSearch /> {/* Search icon */}
                            </button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} style={{ maxHeight: "700px" }}>
                <img
                    className="d-block w-100"
                    src={BurgerPicture}
                    alt="Second slide"
                    style={{ objectFit: "cover" }}
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="input-group w-50">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => { setsearch(e.target.value) }}
                            />
                            <button className="btn btn-success" type="submit">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ maxHeight: "700px" }}>
                <img
                    className="d-block w-100"
                    src={PastryPicture}
                    alt="Third slide"
                    style={{ objectFit: "cover" }}
                />
                <Carousel.Caption className="bg-dark bg-opacity-50 p-4 rounded">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="input-group w-50">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={search}
                                onChange={(e) => { setsearch(e.target.value) }}
                            />
                            <button className="btn btn-success" type="submit">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default Slideshow;
