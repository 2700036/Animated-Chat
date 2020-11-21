import React, { useEffect, useState } from 'react';
import './App.css';
import Message from './Message';
import Typing from './Typing';

const messages = [
  { text: 'Привет многоногий!' },
  { text: 'Здарова зелёный!' },
  { text: 'Как оно? не запутался ещё в своих ногах?' },
  { text: 'Нет! А ты всё от аиста бегаешь?' },
  { text: 'У него нет шансов!' },
  { text: 'Гадюка тоже так говорила' },
  { text: 'В курсе.. жаль её!' },
];

const useInterval = (foo, time) => {
  return useEffect(() => {
    const showMessage = setInterval(() => {
      return foo()
    }, time)    
    return () => {
      clearInterval(showMessage)
    }
  }, [])
}


export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(()=>{
    setMessageToShow(messageToShow=>++messageToShow)
  }, 2000);

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const isEven = index % 2 === 0;          
          if (messageToShow+1 === index) return <Typing isRight={isEven} key={index} />
          if (messageToShow < index) return <div key={index}></div>
          return <Message 
          message={message} 
          key={index}/>          
        })}
      </div>
    </div>
  );
}
