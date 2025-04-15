import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CustomNavbar from './components/Navbar';
import Component from './components/Component';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import { CartProvider } from './context/CartContext';

const App = () => (
  <Router>
    <CartProvider>
    <CustomNavbar />
    <Component />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/orders' element={<Orders />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/user' element={<User />} />
    </Routes>
    <Footer />
    </CartProvider>
  </Router>
);

export default App;