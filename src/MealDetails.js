import React, { useEffect, useState } from 'react';

const MealDetails = () => {
    const handleChange = event => {
       setsearch(event.target.value)
    }
     const [search, setsearch] = useState('')
      const [meal, setMeal] = useState([])
      useEffect(()=>{
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
          .then(response=>response.json())
          .then(data=>setMeal(data?.meals))
      },[search])
    return (
        <div>
            <input type="text" onChange={handleChange} placeholder="search meal" />
            {console.log(meal)}
            <h2>Meal found:{meal?.length||0}</h2>
            {
             meal?.map(ml=><li>{ml.strMeal}</li>)
            }
        </div>
    );
};

export default MealDetails;