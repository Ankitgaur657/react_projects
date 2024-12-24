import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click here to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  

    <App />
    
 ,
)
