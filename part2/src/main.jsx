import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import axios from 'axios'


// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   const notes  = response.data
//   console.log(notes)
// } )


// const promise2 = axios.get('http://localhost:3001/foobar')
// promise2.then(response => console.log(response))




// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
)
