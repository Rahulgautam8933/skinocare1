import React from 'react'
import './Sec1.css'
import sec1img from '../../img/sec1img.png'
import sec2img from '../../img/Property 1=image 3-1.png'
import sec3img from '../../img/Property 1=image 4-1.png'
import sec4img from '../../img/Property 1=image 5-1.png'
import sec5img from '../../img/sec1img.png'
import Imgcontent from '../imgcontent/Imgcontent'
function Sec1() {
    const h1 = "Revolutionise Your  Skin and Hair Care with SkinoCare."
    const p = "Access a well-rounded skincare routine, expertly designed through the fusion of dermatologist knowledge and AI technology.";
    return (
        <>

        <div className="sec1imgcontentcontainer">
       
        <Imgcontent secimg = {sec1img} secimg2 = {sec2img} secimg3 = {sec3img} secimg4 = {sec4img} secimg5 = {sec5img}  h1 = {h1} p = {p} />
        
        </div>

       



        </>
    )
}

export default Sec1
