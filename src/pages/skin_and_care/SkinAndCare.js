import React from 'react'
import './SkinAndCare.css'
import copy from '../../img/copy.svg'
import twitter from '../../img/twitter.svg'
import facebook from '../../img/facebook.svg'
import linkedin from '../../img/linkedin.svg'
import profile from '../../img/doctorprofile.png'
import profile1 from '../../img/Avatar (1).png'
import profile2 from '../../img/Avatar.png'
import img1 from '../../img/Image1.png'
import img2 from '../../img/Image2.png'
import img3 from '../../img/Image3.png'
import arrow from '../../img/arrow-up-right.svg'
import SkinAndCareHeading from '../../componets/skinAndCareHeading/SkinAndCareHeading'
const SkinAndCare = () => {
    const h2 = `"The Art and Science of Skin and Hair Care"`
    const p = `"Balancing Beauty and Health for a Radiant You"`
    return (
        <>

            <div className="skincarescontainer">

                <SkinAndCareHeading h2={h2} p={p} />

                <div className="skincarecontent">

                    <p>We have all had winter mornings when we wake up to dry skin on our face/body/feet/hands. But the worst is when you wake up to the skin around your fingernails dry and peeling! Even though it looks pretty tiny, it can actually be quite painful. It stings every time you touch it by mistake. So, what is this weird phenomenon, and why does it happen?
                        <br /> <br />
                        Let us start with the basics.</p>

                    <h2>What is the skin around the nails called?</h2>
                    <p>While most people think that the skin around the nails is called the cuticle, it is actually not. The cuticle is a very small layer of almost translucent skin that protects the new nails from getting infected. The skin around our nails that usually gets dry, itchy, flaky or infected is called the ‘Eponychium’. Yeah, it is pretty wordy. We felt the same way!</p>
                    <h2>Why does the skin around the nails start peeling and get damaged?</h2>
                    <p>Many factors play a role here.</p>
                    <h3>The environment!</h3>
                    <p>No, it is not what you think. Or maybe it is! Environmental factors play a significant role in the health and texture of our skin in general. Things like dry weather, winters and cold temperature can all cause the skin around your nails to peel.</p>
                    <h3>Dry skin again.</h3>
                    <p>It seems like dry skin is the culprit for most skin issues… In this case, dry skin is one of the most common reasons for this kind of skin peeling. When you don’t moisturise the skin around your nails well enough, it can start drying up, peeling and sometimes even bleed.</p>
                    <h3>Damaging treatments</h3>
                    <p>Sometimes salons might not know precisely how to take care of your skin. While getting your nails done or a manicure/pedicure, it is possible that rough handling can cause damage to this skin as it is softer than the other skin on your hands and feet. Some technicians might also cut off the dry or cracked parts of your eponychium. This exposes the skin to bacteria and infections and is terrible for your nail health too.
                    </p>
                    <h3>The Pandemic!</h3>
                    <p>
                        Yes, you heard us right. The covid-19 pandemic can also be a reason for your skin to peel! Because of the increased use of hand washes and sanitisers, your hands are drier than they have ever been. Soap and hand washes strip the skin of their natural oils, while frequent washes make it worse. The use of sanitiser can be a little harsh on the skin too. The alcohol content can cause dryness. Always remember to moisturise your hands after you wash or sanitise them.</p>
                    <h3>Picking, biting and sucking the skin around your nails</h3>
                    <p>We have all been guilty of biting our nails at some point or the other. However, sometimes it is possible to get carried away and start biting the skin around the nails as well. It is not the best thing to do. Picking the skin around your nails when bored can also be a reason for the fingertips to peel. Sucking your fingers can dry out the skin and cause it to peel.</p>
                    <h3>Vitamin deficiencies</h3>
                    <p>Certain vitamin deficiencies can result in your skin getting affected. On the other hand, too much of some vitamins like vitamin A can result in cracked fingernails. In these cases, it is best to visit a doctor and get the proper treatment.</p>
                    <h3> Allergies</h3>
                    <p>Annoying allergies can be a cause for peeling fingertips too. If your fingers come in contact with things you might be allergic to, it can cause a reaction and lead to peeling.</p>
                    <h3>Skin conditions</h3>
                    <p>Medical skin conditions like psoriasis, Kawasaki disease or eczema can lead to skin peeling from your fingertips. In these cases, always visit a doctor and don’t try to treat them yourself.</p>
                    <h3>Infections can cause peeling</h3>
                    <p>Exposed skin can be susceptible to skin infections like fungal or bacterial infections. In these cases, there can be soreness, redness and even skin peeling. These should be treated immediately by a doctor.</p>

                    <h2>What to do to stop the skin around the nails from peeling?</h2>
                    <p>
                        <ol>
                            <li> The first step is the most obvious one. Always keep your hands moisturised—especially when using sanitisers and soap. During dry weather and winters, moisturising not just your hands but your whole body is vital. Properly moisturised hands tend to be less dry and reduce the chances of skin peeling around your nails.</li>
                            <li>  Avoid using nail polish removers that contain acetone in them, as this is quite a harsh ingredient. It can not only dry your eponychium but also damage it in the long term. Look for removers that contain healthy oils instead.</li>
                            <li>Take good care of your cuticles and skin.</li>
                            <li>Do not cut or take off the skin around your nails! Just don’t do it!</li>
                            <li>You can regularly moisturise your cuticles with olive oil, petroleum jelly or a thick moisturising cream. If pain, redness, swelling or peeling is present, ensure to check with your doctor.
                            </li>
                            <li>Consult a doctor the moment things get bad. Don’t wait for too long or attempt to fix it yourself if you have underlying conditions or allergies.
                            </li>
                            <li>Drink lots of water and eat as many fruits as you can to keep your skin healthy and soft. Ensure to add foods rich in biotin, Vitamin B12, and iron.
                            </li>
                            <li>Keep your hands far away from your mouth.</li>
                            <li>Keep your hands warm and safe from the cold.</li>
                            <li> When washing dishes and using detergents, try to wear gloves so that the chemicals in those products do not directly affect or damage your fingertips.</li>

                        </ol>



                    </p>


                    <h2>The silver lining</h2>
                    <p>Today, we not only learnt a new word that you can show off to your peers – Eponychium, but we also know that taking care of your fingertips can actually be quite essential. With the pandemic running rampant, you have even more cause to take care of every part of your body!
                    </p>
                    <p><strong>Disclaimer</strong></p>
                    <p>The natural remedies mentioned in the blog are the widely popular ones. It is in no way a substitute for medical advice, treatment or diagnosis. Avoid using these if you have sensitive skin or are prone to allergies. <br />
                        Before trying any natural remedy, always test a small quantity on your skin to check for any adverse reactions or allergy to any particular ingredient. In case of emergency or any reaction, immediately connect with a doctor who can offer the proper treatment.</p>

                    <p><strong>FAQ’s</strong></p>
                    <p>How can I heal peeling skin naturally?
                        You can use some natural remedies to heal your fingertips and keep them moisturised, like honey, jojoba oil and milk, as long as you are not allergic to them.
                        <br />
                        2. Can biting my nails lead to my skin peeling?
                        Nail-biting can cause damage to the skin around your nails and fingertips. This can sometimes cause infection if exposed.
                        <br />
                        3. How do I protect my fingertips from peeling while getting a manicure?
                        Instruct your nail technician not to cut off any skin around your nails or cuticles.
                        <br />
                        4. What chemicals cause the fingertips to peel?
                        Chemicals that irritate your skin or those you may be allergic to can cause the skin to get damaged and peel. Some of these are fragrances, antibacterial ointments, isothiazolinones and preservatives.</p>




                </div>

                <div className="doctorlink">
                    <div className="doctorprofile">

                        <div className="doctorprofileimg">
                            <img src={profile} alt="" />
                        </div>

                        <div className="profilename">
                            <p>Dr. Neha Verma</p>
                            <span>MBBS, PG in Dermatolgy(UK)</span>

                        </div>

                    </div>
                    <div className="doctorprofilelinks">

                        <button> <img src={copy} alt="" />  Copy link</button>
                        <button> <img src={twitter} alt="" />  </button>
                        <button> <img src={facebook} alt="" /> </button>
                        <button> <img src={linkedin} alt="" /> </button>


                    </div>
                </div>

                <div className="doctorlink">
                    <div className="doctorprofile">
                        <div className="profilename">
                            <p id='blog'>Our Blog</p>
                            <h1>Lastest blog posts</h1>
                            <p id='blog2'>Tool and strategies modern teams need to help their companies grow.</p>
                        </div>

                    </div>
                    <div className="doctorprofilelinks">

                        <button id='blogbutton'>View all posts</button>


                    </div>
                </div>

                <div className="blogpostcards">
                    <div className="blogpostcard">
                        <img src={img1} alt="" />

                        <div className="blogpostcontent">
                            <p>Design</p>

                            <div className="blogpostcontentarrow">
                                <h4>SkinoCare Products: Do They Really Work?</h4>
                                <span><img src={arrow} alt="" /></span>
                            </div>

                            <h5>Unlike “off the shelf” products that are made for a million people irrespective of your skin ...</h5>


                        </div>
                        <div className="blogpostcart">
                            <img src={profile} alt="" />
                            <span> <h2>Olivia Rhye</h2>
                                <p>20 Jan 2022</p></span>

                        </div>

                    </div>
                    <div className="blogpostcard">
                        <img src={img2} alt="" />

                        <div className="blogpostcontent">
                            <p>Product</p>

                            <div className="blogpostcontentarrow">
                                <h4>Facial or Bleach: Which is the Right One For You?</h4>
                                <span><img src={arrow} alt="" /></span>
                            </div>

                            <h5>Skin infections such as skin irritation, scaly skin, redness, itching, swelling, blisters and more can...</h5>


                        </div>
                        <div className="blogpostcart">
                            <img src={profile1} alt="" />
                            <span> <h2>Phoenix Baker</h2>
                                <p>19 Jan 2022</p></span>

                        </div>


                    </div>
                    <div className="blogpostcard" id='blogpostcard3'>
                        <img src={img3} alt="" />


                        <div className="blogpostcontent">
                            <p>oftware Engineering</p>

                            <div className="blogpostcontentarrow">
                                <h4>Struggling with Fungal Skin Infection?</h4>
                                <span><img src={arrow} alt="" /></span>
                            </div>

                            <h5>Skin infections such as skin irritation, scaly skin, redness, itching, swelling, blisters and more can...</h5>


                        </div>
                        <div className="blogpostcart">
                            <img src={profile2} alt="" />
                            <span> <h2>Lana Steiner</h2>
                                <p>18 Jan 2022</p></span>

                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default SkinAndCare
