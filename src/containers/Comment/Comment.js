import Slider from 'react-slick'

const Comment = () => {
  const settings = {
    speed: 700,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  }
  return (
    <div className="container section">
      <h2 className="mb-5">Отзывы наших покупателей</h2>
      <Slider {...settings}>
        <div><img width='90%' src="review-1.jpeg" alt="" /></div>
        <div><img width='90%' src="review-2.jpeg" alt="" /></div>
        <div><img width='90%' src="review-3.jpeg" alt="" /></div>
        <div><img width='90%' src="review-4.jpeg" alt="" /></div>
        <div><img width='90%' src="review-5.jpeg" alt="" /></div>
        <div><img width='90%' src="review-6.jpeg" alt="" /></div>
        <div><img width='90%' src="review-7.jpeg" alt="" /></div>
        <div><img width='90%' src="review-8.jpeg" alt="" /></div>
      </Slider>
    </div>
  )
}

export default Comment