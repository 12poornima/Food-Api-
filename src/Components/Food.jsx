import React, { useEffect, useState } from 'react'
import "./Food.css"
import SingleRecipes from './SingleRecipes'
import axios from 'axios'
import Categories from './Categories'

function Food() {
    const [food, setFood] = useState("")
    const [search, setSearch] = useState("")
    const [categories, setCategories] = useState("")
    useEffect(() => {
        foodSrch()
    }, [])
    async function clickBtn() {
        // alert(search)
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
        console.log(response.data.meals[0])
        setFood(response.data.meals[0])
    }
    async function clickCategoryes() {
        if (!categories) {
            let response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            console.log(response.data.categories)
            setCategories(response.data.categories)
        } else {
            setCategories(false)
        }


    }
    async function foodSrch() {
        let response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        // console.log(response.data.meals[0])
        setFood(response.data.meals[0])
    }
    return (
        <div className='food-container' >
            <div className='food-box' >
                <h1>SEARCH RECIPES</h1>
                <button className='btn1' onClick={clickCategoryes} >View all Categoryes</button>
                <Categories categories={categories} />
                <input onChange={(e) => (setSearch(e.target.value))} type="search" name='text' placeholder='Search' className='input' />
                <button onClick={clickBtn} className='btn' >Click Here</button>
                <p className='para'  >GOOD FOOD AS GOOD MOOD!!!</p>
                <SingleRecipes food={food} />
            </div>
        </div>
    )
}

export default Food