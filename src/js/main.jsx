import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'


// components
import SecondsCounter from './components/SecondsCounter';
let contador = 0

setInterval(function(){
  contador += 1
//console.log(contador)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SecondsCounter seconds={contador}/>
  </React.StrictMode>,
)
}, 1000)

