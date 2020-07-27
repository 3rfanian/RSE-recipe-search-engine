import React, {useEffect, useState} from 'react';
import Recipe from './Recipes';
import './App.css';


// create a constant APP to setting API to EDAMAM.COM
const App = () => {
  
  //setting our Authentication to API 
  //we need environment tols to protect these 
  const APP_ID = 'f80b8905';
  const APP_KEY = '576a95ced2245ebba9a7d00b927b1fc2';
  const [query, setQuery] = useState('');
  //is an examples of the GET Req with your authentication 
  const exampleReq = 
  `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes]  = useState([]);
  const [search, setSearch]  = useState("");
  

  //create an effect that runs when we search and click on search button ,[] at the last line 
  // the effect is for req to API
  useEffect( () =>{
    getRecipes();
  }, [query]);
  
  //create an function to send req
  const getRecipes = async () =>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    
  }

  // e is an event which can access to target.value(value of input) when ONCHANGE   
  //we want to modify the value of search
    const updateSearch = e =>{
    setSearch(e.target.value);
    
    
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search); 
    setSearch('');
  }

  //we store all information which is fetched in recipes 
  //rout this info to recipe.js with title,calories,image
  //in recipe there is an element which named key, in fact key is an unique identity for each element
    return(
    <div onSubmit={getSearch} className='App'>
        <form className='search-form'>
            <input className='search-bar' type='text' value={search} onChange={updateSearch} />
            <button className='search-button' type='submit'>
              SERACH
            </button>
        </form>
       
        <div className='recipe'>
       {recipes.map(recipe =>(
         <Recipe
         key ={recipe.recipe.label} 
         title ={recipe.recipe.label} 
         calories ={recipe.recipe.calories} 
         image = {recipe.recipe.image}
         ingredients = {recipe.recipe.ingredients}/>
       ))}</div>    
       
       </div>
  );

};

export default App;