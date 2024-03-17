import ReactDOM from 'my-portfolio-using-react/src/index.js'; //check this to confirm the correct path
// required imports to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //check this to confirm the correct path

import 'bootstrap/dist/css/bootstrap.min.css' //might change this

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

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
        path: '/Blog',
        element: <Blog />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
