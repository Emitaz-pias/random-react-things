import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';
import MealDetails from './MealDetails';

function App() {
  const [likeBtnColor,setLikeBtnColor] = useState('');
  const [users,setUser] = useState([])
  const [randomUser,setRandomUser] = useState({})
  const [meal,setMeal]= useState({});
  const handleLikeBtn = ()=>{
    const color = likeBtnColor? "":"primary";
    setLikeBtnColor(color)
  }
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data =>setUser(data))
    // random user data 
    fetch('https://randomuser.me/api/')
    .then(response=>response.json())
    .then(data =>setRandomUser(data.results[0]))
    // optional chaining 
    fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    .then(response=>response.json())
    .then(data =>setMeal(data?.meals[0]))
  },[])
  return (
    <div className="App">
      <MealDetails></MealDetails>
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLikeBtn} color = {likeBtnColor} ></ThumbUpAltIcon>
     {
      users.map(usr=><li><h2>{usr.name}</h2></li>)
      }
{
      <h2>Gender:{randomUser.name?.first}</h2>

}
{
    console.log(meal)
}
  <h2>meal Name : {meal.strMeal}</h2>
    </div>
  );
}

export default App;
