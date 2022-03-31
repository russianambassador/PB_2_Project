import Home from "./Components/Home/Home.jsx";
// import Navigation from "./Components/GeneralComponents/Navigation/Navigation.jsx";
// import LeftSidebar from "./Components/GeneralComponents/Navigation/LeftSidebar/LeftSidebar.jsx";
import { useEffect } from "react";
import { Route } from "react-router-dom";


function App() {
  useEffect(() => {
    document.body.style.minHeight = "100vh";
  })
  return (
    <div>
     {/*  */}
      <Home/>
    </div>
  );
}

export default App;
