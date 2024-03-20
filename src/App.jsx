// The required import from 'react-router-dom'
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/Footer";
import homeImage from "./assets/images/Shutterstockphoenix.png";
import bgImage from "./assets/images/image2.png";
import "./App.css";

function App() {
  // The Outlet component will swap according to the URL

  let location = useLocation();
  console.log(location.pathname);

  // we'll have to change the <> to a div
  // add the image style from the Home page
  // we'll make an if statement to check if we're on the home page route
  // else use the other image variable (ex: bgImage in Home.jsx)
  // if so, we'll add the image style
  // if not we don't need it
  // we'll use useLocation() to get the current route

  let imageStyle = {
    height: "100vh",
    width: "100vw",
    backgroundImage:  '',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
  };

  if (location.pathname === "/") {
    imageStyle.backgroundImage = `url(${homeImage})`;
  } else {
    imageStyle.backgroundImage = `url(${bgImage})`;
  }

  return (
    <div className="App" style={imageStyle}>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
