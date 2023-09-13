import React from 'react'

import sec2cardimg1 from '../../img/sec2cardimg1.png'
import sec2cardimg2 from '../../img/sec2cardimg2.png'
import sec2cardimg3 from '../../img/sec2cardimg3.png'
import sec2img from '../../img/sec2img.png'
function Sec2() {
    return (
        <>

            <div className="sec2container">

                <div className="sec2containerboxs">
                    <div className="sec2containerbox1">
                        <h2>"Making use of AI for in-depth
                            skin and hair analysis."</h2>
                        <p className='p' >"Our app's cutting-edge AI technology thoroughly assesses your skin and
                            hair, detecting over 20 distinct conditions by leveraging insights from a
                            vast database of 25 million prior cases integrated into its advanced deep
                            learning framework."</p>

                        <div className="sec2cardboxs">
                            <div className="sec2cardbox">
                                <div className="sec2cardimg">
                                    <img src={sec2cardimg1} alt="" />
                                </div>
                                <p>Deep-learning
                                    basedimage
                                    recognition
                                </p>
                            </div>
                            <div className="sec2cardbox">
                                <div className="sec2cardimg">
                                    <img src={sec2cardimg2} alt="" />
                                </div>
                                <p>Instant Skin &
                                    Hair Analysisin
                                    milli-seconds
                                </p>
                            </div>
                            <div className="sec2cardbox">
                                <div className="sec2cardimg">
                                    <img src={sec2cardimg3} alt="" />
                                </div>
                                <p>High accuracy in
                                    detecting Skin &
                                    Hair issues
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="sec2containerbox2">

                        <div className="sec2mainimg">
                            <img src={sec2img} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Sec2
