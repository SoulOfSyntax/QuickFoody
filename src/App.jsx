import React from "react"
import Navbar from './Navbar'
import Hero from './Hero'
import ProductList from "./ProductList"

function App() {


  return (
    <div className="min-h-screen bg-amber-600">
      <Navbar />
      <Hero />
      <ProductList/>
    </div>
  )
}

export default App
