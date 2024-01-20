import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom Aplication !</h1>
    </div>
  )
}


// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://github.com/akashsaha02/',
//     target: '_blank'
//   },
//   children: 'Click here to visit my github profile'
// }
const anotherElement = (
  <a href="https://github.com/akashsaha02">Click here to visit my github</a>
)

const reactElement = React.createElement(
  'a',
  { href: "https://github.com/akashsaha02", target: '_blank' },
  'Visit my github',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
)
