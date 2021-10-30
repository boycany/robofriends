import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card';
import App from './App';  //目前這些檔案的階層是: Card.js -> CardList.js -> App.js -> index.js  
import 'tachyons';

//robots的export沒有使用export default (因為是一個複數的陣列)，必須加上大括號，Card就不用。
//如果robot.js還有其他export出來的變數的話，就可以加入括號內，如{robots, cats,...}
//如果是使用export default ，則一個檔案就只能使用一次。所以像Card.js就只會有一個export default。

import FAQ from './FAQ';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(  
   <FAQ />,
  document.getElementById('faq')
)
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
