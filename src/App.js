import './App.css';
import Navbar from './componets/navbar/Navbar';
import Footer from './componets/footer/Footer';
import Sidebar from './componets/sidebar/Sidebar';
import Backdrop from './componets/sidebar/Backdrop';
import { useState } from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import Product from './pages/productpage/Product';
import Shoppage from './pages/shoppage/Shoppage';
import Cart from './componets/cart/Cart';

function App() {




  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    // alert('ssfjhsfjsf');
    setsidebar(true);

  }

  const close = () => {
    setsidebar(false);
  }


  return (
    <>

      <div className="navbarshadow">
        <Navbar openSidebar={toggleSidebar} />

        <Sidebar sidebar={sidebar} closeback={close} />
        <Backdrop sidebar={sidebar} closeback={close} />


      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/check_out' element={<Checkout />}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/shop_now' element={<Shoppage/>}></Route>
       
      </Routes>

      <Footer />


    </>
  );
}

export default App;
