import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeBtnColor,setLikeBtnColor] = useState('');
  const [users,setUser] = useState([])
  const [randomUser,setRandomUser] = useState({})
  const handleLikeBtn = ()=>{
    const color = likeBtnColor? "":"disabled";
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
  },[])
  return (
    <div className="App">
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThumbUpAltIcon onClick={handleLikeBtn} color = {likeBtnColor} ></ThumbUpAltIcon>
     {
      users.map(usr=><li><h2>{usr.name}</h2></li>)
      }
{
      <h2>Gender:{randomUser.name?.first}</h2>

}
    </div>
  );
}

export default App;
