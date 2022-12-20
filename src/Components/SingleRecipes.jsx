import React from 'react'

function SingleRecipes(props) {
    return (
        <div>
            <h1>{props.food.strMeal}</h1>
            <p>{props.food.strInstructions}</p>
            <a href={props.food.strYoutube}>watch on Youtube</a>
        </div>
    )
}

export default SingleRecipes