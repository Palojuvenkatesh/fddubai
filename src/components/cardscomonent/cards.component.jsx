import './cards.component.css';
import totur from "../../Assets/totur.jpg";
import totur1 from "../../Assets/toturs1.jpg";
import totur2 from "../../Assets/toturs2.jpg";
import totur3 from "../../Assets/toturs3.jpg";
import rest1 from "../../Assets/rest1.jpg";
import rest2 from "../../Assets/rest2.jpg";
import rest3 from "../../Assets/rest3.jpg";
import rest4 from "../../Assets/rest4.jpg";

export function HomeCards() {
    return (
        <div className='main-container'>
            
            <h3 className='exp-heading' style={{ textAlign: "center" }}> Explore Directory Category</h3>
            <br></br>
            <div className='homecard container'>
                <div class="row">
                    <div class=" col-12 col-lg-3 col-md-6 col-sm-12 ">
                        <div className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={totur} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>English Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Abu Dhabi</h6>
                                <a href="#" className="btn btn-primary cards_button ">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-lg-3 col-md-6 col-sm-12 ">
                        <div className="card " style={{ width: "18rem" }}>
                            <img className="card-img-top" src={totur1} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Hindi Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-6 col-sm-12 ">
                        <div className="card " style={{ width: "18rem" }}>
                            <img className="card-img-top" src={totur2} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Arabic Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Ajman</h6>
                                <a href="#" className="btn btn-primary cards_button">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-3 col-md-6 col-sm-12 ">
                        <div className="card " style={{ width: "18rem" }}>
                            <img className="card-img-top" src={totur3} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Bengali Tutor</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Hatta</h6>
                                <a href="#" className="btn btn-primary cards_button" style={{ textAlign: "center" }}>View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homecard container'>
                <div className='row'>
                    <div className=' col-12 col-lg-3 col-md-6 col-sm-12 '>
                        <div className="card mt-2 md-4" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={rest1} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Verde Beach Dubai</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-6 col-sm-12 '>
                        <div className="card mt-2 md-2 md-4 " style={{ width: "18rem" }}>
                            <img className="card-img-top" src={rest2} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Zenon</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                    <div className=' col-12 col-lg-3 col-md-6 col-sm-12 '>
                        <div className="card mt-2 md-4 " style={{ width: "18rem" }}>
                            <img className="card-img-top" src={rest3} alt="Card image cap" />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Lena</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-3 col-md-6 col-sm-12 '>
                        <div className="card mt-2 md-4" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={rest4} />
                            <div className="card-body">
                                <h4 className="card-title" style={{ textAlign: "center" }}>Smoki Moto</h4>
                                <h6 className="card-text mt-4" style={{ textAlign: "center" }}>Dubai</h6>
                                <a href="#" className="btn btn-primary cards_button">View Restaurant</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}