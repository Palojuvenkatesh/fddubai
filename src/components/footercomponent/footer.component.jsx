import { BsEnvelope, BsPhone } from 'react-icons/bs'
import './footer.component.css';
import { MdLocationOn } from 'react-icons/md'


export function Footercomponent() {
    return (
        <>
            <div>
                <footer className='footer'>
                    <div class="d-flex justify-content-around f-d1">
                        
                            <div className="f-d w-25">
                                
                                <h3>About US</h3>
                                <hr style={{color:"greenyellow"}}></hr>
                                <p className="f-p1 ">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of Lorem Ipsum is simply dummy text of
                                    the printing and... View More
                                </p>
                            </div>
                            <div className="f-d">
                                <h3>Popular Cities</h3>
                                <hr style={{color:"greenyellow"}}></hr>                                
                                <ul className="f-p1">
                                    <li className='fli'>Mumbai</li>
                                    <li className='fli'>Pune</li>
                                    <li className='fli'>Hyderabad</li>
                                    <li className='fli'>Chennai</li>
                                    <li className='fli'>Bangalore</li>
                                    <li className='fli'>New Delhi</li>
                                    <li className='fli'>Kolkatha</li>
                                </ul>
                            </div>

                            <div className="f-d">
                                <h3>Quick Link</h3>
                                <hr style={{color:"greenyellow"}}></hr>                                
                                <ul className="f-p1">
                                   <li  className='fli'>About Us</li>
                                   <li className='fli'>Terms & Conditions</li>
                                   <li className='fli'>Privacy Policy</li>
                                   <li className='fli'>Contact us</li>
                                   <li className='fli'>FAQs</li>
                                </ul>
                            </div>
                            <div className="f-d">
                                <h3>Contact US</h3>
                                <hr style={{color:"greenyellow"}}></hr>                                
                                <ul className="f-p1">
                                   <li className='fli fli1' ><BsEnvelope></BsEnvelope> Email : .....@gmail.com</li>
                                   <li className='fli fli1'><BsPhone></BsPhone> Phone : ****</li>
                                   <li className='fli fli1'><MdLocationOn></MdLocationOn> Address: **</li>
                          
                                </ul>
                            </div>



                    </div>


                </footer>
            </div>
        </>
    )
}