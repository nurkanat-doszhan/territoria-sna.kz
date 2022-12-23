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
                <div className="BigSlider1">
                    <img width="100%" src="BigSlider1.jpg" alt="" />
                    <div className='btns position-absolute'>
                        <a href="#mat" className='btn btn-lg btn-warning me-2 fw-semibold'>Смотреть каталог</a>
                        <a target="_blank" href="https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0&at=1&page=1"
                            className='btn btn-lg btn-danger'
                        >Перейти на kaspi.kz</a>
                    </div>
                </div>
                <div className="BigSlider2">
                    <img src="BigSlider4.jpg" alt="" />
                    <div className='btns position-absolute'>
                        <a href="#mat" className='btn btn-lg btn-warning fw-semibold'>Заказать матрас</a>
                    </div>
                </div>
                <div className="BigSlider3 text-white ml-5">
                    <img src="BigSlider3.1.jpg" alt="" />
                    <div className="text d-block ms-5">
                        <h2 className='text-uppercase fs-1 fw-bold mb-3'>Бесплатная доставка в день заказа</h2>
                        <p className="fs-5">Бесплатный выезд специалиста для снятия правильного размера!</p>
                    </div>
                </div>
                <div className='BigSlider4'>
                    <img src="BigSlider2.png" alt="" />
                    <div className='text d-flex flex-column justify-content-center align-items-center'>
                        <h2 className='text-center'>Здоровый сон - Залог успеха!</h2>
                        <h5 className='text-center mt-3 mb-4'>Спите комфортно и укрепляйте свое здоровье на качественном матрасе территория сна!</h5>
                        <a href="#mat" className='btn mx-auto btn-lg btn-warning fw-semibold'>Заказать матрас</a>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default BigSlider