import './categories.component.css';
import toturslogo from "../../Assets/toturlogo.jpg";
import toturslogo1 from "../../Assets/toturlogo1.png";
import shopinglogo from "../../Assets/shopinglogo.jpg";
import electriclogo from "../../Assets/electriclogo.png";
import plumberlogo from "../../Assets/plumberlogo.jpg";
import transportlogo from "../../Assets/transportlogo.png";
import cleaning from "../../Assets/cleaning.png";
import woodwork from "../../Assets/woodwork.jpg";
import taxii from "../../Assets/taxii.png";

export function Popularcategories() {
    return (
        <div>
            <div className='Main-container'>
                <h1 className='mpcategories-heading '>Most Popular Categories</h1>
                <br></br>
                <div className='container'>
                    <div className='row'>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded '>
                                <p className='resutrant-heading'> <img className='tlogo1' src={toturslogo}></img>Tutors</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4 '>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={toturslogo1}></img>Resutrants</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={shopinglogo}></img>Online Shopping</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={electriclogo}></img>Electricans</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={plumberlogo}></img>Pulmber</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={transportlogo}></img>Transport</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={woodwork}></img>Carpenter</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={taxii}></img>Taxi</p>
                            </div>
                        </div>
                        <div className='mt-2 col-12 col-sm-12 col-md-6 col-lg-4'>
                            <div className='box-1 bg-white rounded'>
                                <p className='resutrant-heading'> <img className='tlogo1' src={cleaning}></img>House Cleaning</p>
                            </div>
                        </div>


                    </div>


                </div>


            </div>

        </div>

    )
}