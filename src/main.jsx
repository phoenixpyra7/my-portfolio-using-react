import ReactDOM from 'react-dom/client'; //check this to confirm the correct path
// required imports to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //check this to confirm the correct path

import 'bootstrap/dist/css/bootstrap.min.css' //might change this

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio'; //was blog
import Resume from './pages/Resume'; //added this

// The accessible routes, and which components respond to each URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Portfolio', // was blog
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />, // added this
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
