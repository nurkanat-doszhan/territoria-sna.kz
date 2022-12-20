import Slider from 'react-slick'
import { useState } from "react"
import './Mattress.scss'

let tel = '7475087701'

const Mattress4 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const [state, setState] = useState([
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Baby HAPPY',
            param1: 'Монолит из пенополиуретана 9 см',
            param2: 'Чехол: х/б жаккард стеганный с синтепоном',
            param3: '50 кг',
            param4: '10 см',
            oldPrice: '', newPrice: '21000 тг.',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20Baby%20HAPPY`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Baby COMFORT',
            param1: 'Независимый блок пружин 250 шт на кв.м.',
            param2: 'Чехол: х/б жаккард стеганный на синтепоне',
            param3: '70 кг',
            param4: '12 см',
            oldPrice: '', newPrice: '28000 тг.',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20Baby%20COMFORT`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Baby KING',
            param1: 'Независимый блок пружин 250 шт на кв.м.',
            param2: 'Периметр: эласт. еврокаркас из ППУ стеганный на синтепоне',
            param3: 'до 100 кг',
            param4: '13 см',
            oldPrice: '', newPrice: '35000 тг.',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20Baby%20KING`,
        },
    ])

    const sizeSelect = (e) => {
        if(e.target.value)
        return e.target.value
    }

    return (
        <div className="container section py-5">
            <h2>Детские матрасы</h2>
            <div className="row mt-5">
                {
                    state.map((value, index) => {
                        return (
                            <div className="col-md-4 mb-5" key={index}>
                                {
                                    value.salesLeader ? <span className="badge text-bg-danger position-absolute">ЛИДЕР ПРОДАЖ</span> : ''
                                }
                                <Slider {...settings}>
                                    <img className="w-100 mb-4" src={value.imgMat1} alt="Mattress1" />
                                    <img className="w-100 mb-4" src={value.imgMat2} alt="Mattress2" />
                                </Slider>
                                <h5 className="text-center mb-3">{value.title}</h5>
                                <ul>
                                    <li>{value.param1}</li>
                                    <li>{value.param2}</li>
                                    <li>Нагрузка на сп. место: <b>{value.param3}</b></li>
                                    <li>Общая высота: <b>{value.param4}</b></li>
                                </ul>
                                {
                                    value.oldPrice.length === 0 ? '' :
                                    <p className="oldPrice d-inline mb-1 fs-5 fw-semibold">{value.oldPrice}</p>
                                }
                                <div className="d-flex align-items-start">
                                    <p className="text-danger me-4 fs-5 fw-bold">от {value.newPrice}</p>
                                    <select onChange={(e) => console.log(sizeSelect(e))} className="form-select w-50 form-select-sm" aria-label="Default select example">
                                        <option defaultValue="Выберите размер" disabled>Выберите размер</option>
                                        <option data-new="47000" defaultValue="80*190">80*190</option>
                                        <option data-new="49000" defaultValue="90*190">90*190</option>
                                        <option data-new="52000" defaultValue="120*200">120*200</option>
                                        <option data-new="59000" defaultValue="140*200">140*200</option>
                                        <option data-new="66000" defaultValue="160*200">160*200</option>
                                        <option data-new="72000" defaultValue="180*200">180*200</option>
                                    </select>
                                </div>
                                <p className="text-center text-secondary fw-semibold mb-1">Бесплатная доставка</p>
                                <div className="d-flex flex-wrap">
                                    <a className="btn btn-sm btn-warning fw-semibold me-2 mb-2" href={value.url}>Подробнее о товаре</a>
                                    <a className="btn btn-sm btn-success fw-semibold me-2 mb-2" href={value.url}>Заказать</a>
                                    <a href={value.url}><img src="kaspi.png" width="132" alt="Kaspi" /></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Mattress4