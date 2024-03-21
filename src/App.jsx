import 'bootswatch/dist/quartz/bootstrap.min.css';
import "./App.css";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/NavTabs";
import Footer from "./components/Footer";
  // add the image style from the Home page
import homeImage from "./assets/images/Shutterstockphoenix.png";
import bgImage from "./assets/images/image2.png";



  // const handleBlur = (e) => {
  //   console.log(e);
  // };

function App() {
  // The Outlet component will swap according to the URL
  // I put curly braces around location line 39 then quotes.
  let location = useLocation();
  console.log(location.pathname);
 
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
 // we'll make an if statement to check if we're on the home page route
  if (location.pathname === "/") {
      // add the image style from the Home page
    imageStyle.backgroundImage = `url(${homeImage})`;
     // else use the other image variable (ex: bgImage in Home.jsx)
  } else {
    imageStyle.backgroundImage = `url(${bgImage})`;
  }
// if so, we'll add the image style
  return (
      // we'll have to change the <> to a div
    <div className="App" style={imageStyle}>
      <Nav />
      <main className="mx-3">
      {/* <div> */}
      {/* Think I should remove the value so its consumed after submit */}
    {/* <input onBlur={handleBlur}  id="name" name= "name" /> 
    </div>
    <div> */}
      {/* Think I should remove the value so its consumed after submit */}
    {/* <input onBlur={handleBlur} id="password" name= "password" />
    </div> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
