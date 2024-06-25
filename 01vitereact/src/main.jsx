import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>hello chai lover</h1>
    </div>
  )
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// const reactElement ={
//   type: 'a',
//   props:{
//       href:'http://google.com',
//       target:'_blank',
//   },
//   children: 'click me to visit google',
// }
let userneme = 'aadarsh'
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
  userneme
)



ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement
    // MyApp() *** Not good prectice ***
    reactElement
    // <App/>

)
