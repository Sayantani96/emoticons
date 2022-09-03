
import { useState } from 'react';
import './App.css';

function App() {
  const [found,setFound]=useState('');
  const emojiDictionary={
    "🪔": "Diya Lamp",
    "😀":"Grin",
    "😉":"Wink",
    "🏊‍♂️":"Swimming",
    "🐶":"Dog",
    "🏜️":"Desert",
    "🧭":"Compass",
    "💗":"Heart",
    "🦄":"Unicorn",
    "🥭":"Mango"
  };
  const changeHandler=(event)=>{
    if(emojiDictionary[event.target.value]){
      setFound(emojiDictionary[event.target.value])
    }
    else if(event.target.value==='') setFound('');
    else{
      setFound("Not Found")
    }
   
  }
  const clickHandler=(emoji)=>{
    setFound(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Inside Outttttt!</h1>
      <input onChange={changeHandler} placeholder="Search your emoji" className='search'/>
     <h2>
      {found}
     </h2>
     <h2>
      emojis we know
     </h2>
     {
      Object.keys(emojiDictionary).map(emoji=>{
        return <span onClick={()=>clickHandler(emoji)} key={emoji} className='emoji'>{emoji}</span>
      })
     }
    </div>
  );
}

export default App;
