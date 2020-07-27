import React from 'react';
import style from './recipe.module.css';

//we get the infomation whic fetch from the API 
//put them in a HTML style
const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li> ))}
            </ol>
            <img src={image} alt="" className={style.image} />
        </div>
    );
}

export default Recipe


