import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Foodcard from '../components/Foodcard'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'

const Home = () => {
  const [search, setsearch] = useState('');
  const [foodCategory, setFoodCategory] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [error, setError] = useState(null);

  const FoodData = async () => {
    try {
      let URL = `${process.env.REACT_APP_API_URL}api/foodData`
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      response = await response.json();
      setFoodCategory(response[1]);
      setFoodItems(response[0]);
    }
    catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    FoodData();
  }, [])
  return (
    <div>
      <Navbar />
      <Slideshow setsearch={setsearch} search={search} />
      <div className='container'>
        {error && (
          <div className="alert alert-danger" role="alert" style={{ margin: "20px" }}>
            <strong>Error!</strong> {error}
          </div>
        )}
        {
          (foodCategory.length > 0) ?
            foodCategory.map((data) => {
              return (
                <div className='row mb-3'>
                  <div key={data._id} className='fs-3 m-3'> {data.CategoryName}</div>
                  <hr style={{ borderTop: "2px solid #ccc", margin: "20px 0" }} />
                  {
                    (foodItems.length > 0) ?
                      foodItems.filter((value) => (value.CategoryName === data.CategoryName) && (value.name.toLowerCase().includes(search.toLowerCase())))
                        .map((items) => {
                          return (
                            <div key={items._id} className='col-12 col-md-6 col-lg-3'>
                              <Foodcard
                                food={items}
                                options={items.options[0]}
                              />
                            </div>
                          )
                        })
                      : <div> No food Item Avilable</div>
                  }
                </div>
              )
            })
            : ""
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home
