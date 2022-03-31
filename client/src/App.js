import { useState, useEffect } from "react"
import { BrowserRouter } from "react-router-dom";
import Router from "./routes"

import "./App.scss"
const App = () => {

  return (
    <BrowserRouter>
            <Router/>
    </BrowserRouter>
  )
}

export default App