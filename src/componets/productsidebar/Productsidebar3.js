import React from 'react'
import img1 from '../../img/t6.png'
const Productsidebar3 = ({ close }) => {
    return (
        <>



            <div className="productsidebarmaincontainer">
                <div className="producsidbarboxs">
                    <div className="productsidbarbox">
                        <div className="closebutton">
                            <h2>4.8 Review(28)</h2>
                            <p onClick={close} className='closebutton' ><i class="zmdi zmdi-close"></i></p>
                        </div>

                        <div className="reviewboxs2">
                            <div className="reviewbox2">
                                <div className="reviewboxheading">
                                        <div className="revheadingimg">
                                          <img src={img1} alt="img" /> 
                                            <h6>Lana Steiner</h6>
                                        </div>
                                    <p>18 Jan 2022</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas, ipsa maiores placeat cupiditate dicta nesciunt officia, qui doloremque provident magni, quidem reprehenderit aut asperiores quam ullam? Doloribus sit facere asperiores perspiciatis, harum eum vitae nobis repellat, assumenda perferendis rerum.</p>
                            </div>
                           
                            <div className="reviewbox2">
                                <div className="reviewboxheading">
                                        <div className="revheadingimg">
                                          <img src={img1} alt="img" /> 
                                            <h6>Lana Steiner</h6>
                                        </div>
                                    <p>18 Jan 2022</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas, ipsa maiores placeat cupiditate dicta nesciunt officia, qui doloremque provident magni, quidem reprehenderit aut asperiores quam ullam? Doloribus sit facere asperiores perspiciatis, harum eum vitae nobis repellat, assumenda perferendis rerum.</p>
                            </div>
                           
                            <div className="reviewbox2">
                                <div className="reviewboxheading">
                                        <div className="revheadingimg">
                                          <img src={img1} alt="img" /> 
                                            <h6>Lana Steiner</h6>
                                        </div>
                                    <p>18 Jan 2022</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptas, ipsa maiores placeat cupiditate dicta nesciunt officia, qui doloremque provident magni, quidem reprehenderit aut asperiores quam ullam? Doloribus sit facere asperiores perspiciatis, harum eum vitae nobis repellat, assumenda perferendis rerum.</p>
                            </div>
                           
                           
                            
                        </div>



                    </div>
                </div>

            </div>


        </>
    )
}

export default Productsidebar3
