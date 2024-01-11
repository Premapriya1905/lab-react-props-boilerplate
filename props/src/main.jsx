import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageData from './Components/Datacomponent.jsx'
import AppClass from './AppClass';

const image = ImageData()
console.log(image)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppClass imageprop = {image}></AppClass>
  </React.StrictMode>,
)