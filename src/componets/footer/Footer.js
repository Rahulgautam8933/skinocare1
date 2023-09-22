import React from 'react'

import footerlogo from '../../img/logo.png'
import footerimglink from '../../img/download.png'
import footerimglink1 from '../../img/download1.png'
import goup from '../../img/right-arrow.svg'
import { useNavigate } from 'react-router-dom'
function Footer() {

  const navigator = useNavigate();
  const gotohome = () => {
    navigator('/');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  const up = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>

      <div className="footermaincontainer">

        <div className="footergouplogo">
          <div onClick={up} className="gouplogo">
            <img src={goup} alt="" />
          </div>
        </div>

        <div className="footercontainer">
          <div className="footerboxs">
            <div className="footerbox">
              <div className="footerboximg">
                <img src={footerlogo} alt="" />
              </div>

            </div>
            <div className="footerbox1">
              <div className="footerbox1container">
                <div className="footerbox1boxs">
                  <div className="footerbox1box">
                    <h3>Pages</h3>
                    <p onClick={gotohome} >About us</p>
                    <p>Our Expertise</p>
                    <p>Testimonials</p>
                    <p>Skin & Hair</p>
                    <p>Shop</p>

                  </div>
                  <div className="footerbox1box">
                    <h3>Legal and help</h3>
                    <p>FAQs</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                  </div>
                  <div className="footerbox1box">
                    <h3>Contact us</h3>
                    <p> <i class="zmdi zmdi-pin"></i> Address</p>
                    <p> <i class="zmdi zmdi-phone"></i> Phone numbers</p>
                    <p> <i class="zmdi zmdi-email"></i> mail id</p>
                  </div>
                  <div className="footerbox1box">
                    <h3>Social links</h3>
                    <div className="footerbox1boxsociallinks">
                      <div className="footerbox1boxsociallink">
                        <i class="fa-brands fa-facebook ilogo"></i>
                      </div>
                      <div className="footerbox1boxsociallink">
                        <i class="fa-brands fa-twitter ilogo"></i>
                      </div>
                      <div className="footerbox1boxsociallink">
                        <i class="fa-brands fa-linkedin ilogo"></i>
                      </div>
                      <div className="footerbox1boxsociallink">
                        <i class="fa-brands fa-youtube ilogo"></i>
                      </div>
                    </div>

                    <div className="footerimglinks">
                      <div className="footerimglink">
                        <img src={footerimglink} alt="" />
                      </div>
                      <div className="footerimglink">
                        <img src={footerimglink1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
