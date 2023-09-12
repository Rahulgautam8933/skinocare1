import logo from './logo.svg';
import './App.css';
import Navbar from './componets/navbar/Navbar';
import Sec1 from './componets/sec1/Sec1';
import Sec2 from './componets/sec2/Sec2';
import Sec3 from './componets/sec3/Sec3';
import Sec4 from './componets/sec4/Sec4';
import Secheader from './componets/secheader/Secheader';
import Sec5 from './componets/sec5/Sec5';
import Sec6 from './componets/sec6/Sec6';
import Sec7 from './componets/sec7/Sec7';
import Footer from './componets/footer/Footer';
import Sec8 from './componets/sec8/Sec8';
import Sidebar from './componets/sidebar/Sidebar';
import Backdrop from './componets/sidebar/Backdrop';
import { useState } from 'react';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import Product from './pages/productpage/Product';
import Shoppage from './pages/shoppage/Shoppage';

function App() {


  const [showModal, setModel] = useState(false);

  const closeModel = () => setModel(false);


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
