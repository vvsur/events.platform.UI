import React from "react";
import SwiperCore, { Autoplay } from "swiper/core";
import Swiper, { EffectCube } from "swiper";

SwiperCore.use([EffectCube, Autoplay]);

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const self = this;

    this.swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  render() {
    return (
      <>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {this.props.images &&
              this.props.images.map((item, i) => (
                <div className="swiper-slide">
                  <img className="swiper-image" src={item.url} />
                </div>
              ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </>
    );
  }
}
