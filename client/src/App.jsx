import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import Footer from './components/Footer/Footer';
import Logout from './components/Logout/Logout';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Policy from './pages/Policy/Policy';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Success from './pages/Success/Success';
import Wishlist from './pages/Wishlist/Wishlist';
import { Protector } from './services/routeProtector';


const Layout = () => {
  return (
    <div className="app scroll-smooth">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
      {
        path: '/success',
        element: <Protector Component={Success} />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/policy',
        element: <Policy />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/wishlist',
        element: <Protector Component={Wishlist} />
      },
      {
        path: '/profile',
        element: <Protector Component={Profile} />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: '/*',
        element: <PageNotFound />
      },
    ]
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
