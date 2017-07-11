import React, { Component } from 'react';
import Image1 from './travel_hero.jpg';
import Image2 from './travel_hero2.jpg';
import Image3 from './travel_hero3.jpg';
import Image4 from './travel_hero4.jpg';

class Screen extends Component {
  render() {
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          <li data-target="#carousel-example-generic" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={Image1} alt="image 1" />
            <div className="carousel-caption">
            </div>
          </div>
          <div className="item">
            <img src={Image2} alt="image 2 " />
            <div className="carousel-caption">
            </div>
          </div>
          <div className="item">
            <img src={Image3} alt="image 3 " />
            <div className="carousel-caption">
            </div>
          </div>
          <div className="item">
            <img src={Image4} alt="image 4 " />
            <div className="carousel-caption">
            </div>
          </div>
        </div>
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Screen;
