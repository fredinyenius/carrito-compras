import React from "react"
import { Switch, Route } from "react-router-dom"
import { Products } from "./pages/productos.js"

import { Navbar } from "./components/Navbar"

import "./App.css"
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Products} />
      </Switch>
    </div>
  )
}
export default App
