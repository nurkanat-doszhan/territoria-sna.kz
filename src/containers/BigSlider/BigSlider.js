import Slider from 'react-slick'
import './BigSlider.scss'
const BigSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay:false,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className='bigSlider' style={{paddingTop: '75px'}}>
            <Slider {...settings}>
                <div>
                    <img width="100%" src="BigSlider1.jpg" alt="" />
                </div>
                <div className="BigSlider2">
                    <img src="BigSlider4.jpg" alt="" />
                </div>
                <div className="BigSlider3">
                    <img src="BigSlider3.jpg" alt="" />
                </div>
                <div className='BigSlider4'>
                    <img src="BigSlider2.png" alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default BigSlider