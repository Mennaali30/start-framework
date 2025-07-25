import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const browserRouter= createBrowserRouter([
  { path:'/', element:<Layout/>, children:[
    {index:true ,element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'contact', element:<Contact/>}
  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={browserRouter}/>
      </>
  )
}

export default App
