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

import Signup from './pages/SignupSignin/Signup';
import Signupvarification from './pages/SignupSignin/Signupvarification';
import SignIn from './pages/SignupSignin/SignIn';
import SignInVerification from './pages/SignupSignin/SignInVerification';
import ForgetPassword from './pages/SignupSignin/ForgetPassword';
import ForgetEmailLink from './pages/SignupSignin/ForgetEmailLink';
import ContactUs from './pages/Contact/ContactUs';
import SkinAndCare from './pages/skin_and_care/SkinAndCare';
import FAQs from './pages/FAQS/FAQs';
import PrivcyPolicy from './componets/privecy/PrivcyPolicy';
import TermsofService from './componets/privecy/TermsofService';
import OurExpertise from './pages/ourExpertise/OurExpertise';
import OurExpertises from './pages/ourExpertise/OurExpertises';

function App() {


  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
   
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
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/verify' element={<Signupvarification/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/signInVerify' element={<SignInVerification/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path='/resetpassword' element={<ForgetEmailLink/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/skinAndCare' element={<SkinAndCare/>}></Route>
        <Route path='/FAQs' element={<FAQs/>}></Route>
        <Route path='/privcyPolicy' element={<PrivcyPolicy/>}></Route>       
        <Route path='/termofService' element={<TermsofService/>}></Route>       
        <Route path='/ourExpertise' element={<OurExpertises/>}></Route>       
        <Route path='/ourExpertises' element={<OurExpertise/>}></Route>       
      </Routes>

      <Footer />


    </>
  );
}

export default App;
