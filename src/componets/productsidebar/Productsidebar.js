import React from 'react'

const Productsidebar = ({close}) => {
    return (
        <>

            <div   className="productsidebarmaincontainer">
                <div className="producsidbarboxs">
                    <div className="productsidbarbox">
                    <div className="closebutton">
                    <h2>Specification</h2>
                    <p onClick={close} className='closebutton' ><i class="zmdi zmdi-close"></i></p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti laboriosam nesciunt quae neque earum dolore accusantium nam perferendis nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum exercitationem, ipsam numquam modi doloremque blanditiis laborum corrupti cumque officia ex?</p>
                    <p>
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, porro.</li>
                    <li>Lorem  elit. Iste, porro.</li>
                    </p>
                    <p>CureoSkin Guarantee:</p>
                    <p>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, corporis!</li>
                    <li>Lorem ipsum dolor sit adipisicing elit. Quod, corporis!</li>
                    <li>Lorem ipsum dolor sit amet consectetur </li>
                    </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus vel porro excepturi libero nemo itaque ab veritatis reprehenderit veniam rerum.
                    </p>





                    </div>
                </div>

            </div>

        </>
    )
}

export default Productsidebar

