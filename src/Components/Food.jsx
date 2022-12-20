import React, { useEffect, useState } from 'react'
import "./Food.css"
import SingleRecipes from './SingleRecipes'
import axios from 'axios'

function Food() {
    const [food, setFood] = useState("")
    useEffect(() => {
        foodSrch()
    }, [])
    async function foodSrch() {
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        console.log(response.data.meals[0])
        setFood(response.data.meals[0])
    }
    return (
        <div className='food-container' >
            <div className='food-box' >
                <h1>SEARCH RECIPES</h1>
                <input type="text" name='text' placeholder='Search' className='input' />
                <button className='btn' >Click Here</button>
                <p className='para'  >GOOD FOOD AS GOOD MOOD!!!</p>
                <SingleRecipes food={food} />
            </div>
        </div>
    )
}

export default Food