import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Greetings from './Greetings';
import reportWebVitals from './reportWebVitals';
import ListOfNNames from './ListOfNames';


const root = ReactDOM.createRoot(document.getElementById('root'));
const listofNames = ['Abdul', 'Peter', 'Billy Bill Bob']
root.render(
  <React.StrictMode>
    <Greetings name ='Abdul'/>
    <ListOfNNames list = {listofNames}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
