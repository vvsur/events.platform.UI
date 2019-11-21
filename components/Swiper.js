import React from 'react';
import Swiper from 'swiper';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // dummy slides data
            slides: (function () {
                var slides = [];
                for (var i = 0; i < 600; i += 1) {
                    slides.push('Slide ' + (i + 1));
                }
                return slides;
            }()),
            // virtual data
            virtualData: {
                slides: [],
            },
        }
    }
    componentDidMount() {
        const self = this;
        const swiper = new Swiper('.swiper-container', {
            lazy: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //   virtual: {
            //     slides: self.state.slides,
            //     renderExternal(data) {
            //       // assign virtual slides data
            //       self.setState({
            //         virtualData: data,
            //       });
            //     }
            //   },
        });
    }
    render() {
        return (

            <div className="swiper-container  rounded">
                {/* {console.log("this.props.images", this.props.images)} */}
                <div className="swiper-wrapper">


                    {
                        this.props.images && (
                            this.props.images.map((item, i) => (

                                <div className="swiper-slide" key={item.url}>

                                    <div className="h-full w-full">


                                        <div className="max-w-sm w-full lg:max-w-full lg:flex">

                                            <div className="flex items-center z-0 text-center">
                                                <img data-src={item.url} className=" z-0 swiper-lazy"
                                                // title={`${this.props.title}, слайд ${i+1} на GonnaVisit.com`}
                                                />
                                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                                {
                                                    item.provider_metadata && item.provider_metadata.sourcename && item.provider_metadata.sourcename.length > 0 && (
                                                        item.provider_metadata.sourceurl && item.provider_metadata.sourceurl.length > 0 ? (
                                                            <a className="z-40 m-1 bg-gray-400 pb-1 pl-2 pr-2 rounded" target="_blank" href={item.provider_metadata.sourceurl}>{item.provider_metadata.sourcename}</a>
                                                        ) : (
                                                                <span className="z-40 m-1 bg-gray-400 pb-1 pl-2 pr-2 rounded">{item.provider_metadata.sourcename}</span>
                                                            )
                                                    )
                                                }

                                            </div>

                                        </div>

                                    </div>
                                </div>


                            ))
                        )
                    }

                </div>
                {
                    this.props.images && this.props.images.length > 1 && (
                        <div>
                            <div className="swiper-pagination swiper-pagination-white"></div>
                            <div className="swiper-button-next swiper-button-white bg-teal-500 p-6 pt-10 pb-10 rounded"></div>
                            <div className="swiper-button-prev swiper-button-white bg-teal-500 p-6 pt-10 pb-10 rounded"></div>
                        </div>
                    )
                }
            </div>
        )
    }
}