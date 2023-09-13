import React from 'react'


function Button({button}) {
    return (
        <>

            <div className="buttoncontainer">

                <div className="sec1button">
                    <button>{button} <span className='buttonarrow' ><i class="zmdi zmdi-arrow-right-top"></i></span></button>
                </div>
            </div>

        </>
    )
}

export default Button
