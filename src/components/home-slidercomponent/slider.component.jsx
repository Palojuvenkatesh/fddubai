import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.component.css';
import slide1 from "../../Assets/slide1.jpg";
import totur from "../../Assets/totur.jpg";
import electrican from "../../Assets/electrican.jpg";
import eletri from "../../Assets/elect.jpg";
import carpenter from "../../Assets/carpenter.jpg";

import t from "../../Assets/t.jpg";
import t2 from "../../Assets/t2.jpeg";
import food from "../../Assets/food.jpeg";
import taxi from "../../Assets/taxi.jpeg";

import tot1 from "../../Assets/tot1.jpeg";
import tot2 from "../../Assets/tot2.jpeg";
import tot3 from "../../Assets/tot3.jpeg";
import tot4 from "../../Assets/tot4.jpeg";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
       
        {/* <Slider  {...settings}>
          <div >
            <img className="slide1" src={slide1}></img>
          </div>
          <div >
            <img className="slide1" src={totur}></img>
          </div>
          <div >
            <img className="slide1" src={electrican}></img>
          </div>
          <div >
           <img className="slide1" src={eletri}></img>
          </div>
          <div>
            
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}

<div >
                    <div id="carouselExampleCaptions" className="carousel slide" >
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner" >
                            <div className="carousel-item active">
                                <img src={tot1} className="d-block imgs" align='center' style={{ width: '100%', height: '80vh' }} alt="..."></img>
                            </div>

                            <div className="carousel-item">
                                <img src={tot2} className="d-block imgs" align='center' style={{ width: '100%', height: '80vh' }} alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={tot3} className="d-block imgs" align='center' style={{ width: '100%', height: '80vh' }} alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={tot4} className="d-block imgs" align='center' style={{ width: '100%', height: '80vh' }} alt="..."></img>

                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="Next">
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>  &nbsp; &nbsp; &nbsp;

                </div>
      </div>
    );
  }
}