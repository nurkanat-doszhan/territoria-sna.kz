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
    const [mat, setMat] = useState([
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Baby HAPPY',
            param1: 'Монолит из пенополиуретана 9 см',
            param2: 'Чехол: х/б жаккард стеганный с синтепоном',
            param3: '50 кг',
            param4: '10 см',
            matressSize: '',
            oldPrice: '', newPrice: '21000',
            prices: {
                price0: '21000',
                price1: '31000',
                price4: '49000',
            },
            sizes: [
                "60*120",
                "80*190",
                "140*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20Baby%20HAPPY`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Baby COMFORT',
            param1: 'Независимый блок пружин 250 шт на кв.м.',
            param2: 'Чехол: х/б жаккард стеганный на синтепоне',
            param3: '70 кг',
            param4: '12 см',
            matressSize: '',
            oldPrice: '', newPrice: '28000',
            prices: {
                price0: '28000',
                price1: '38000',
                price4: '55000',
            },
            sizes: [
                "60*120",
                "80*190",
                "140*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20Baby%20COMFORT`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Baby KING',
            param1: 'Независимый блок пружин 250 шт на кв.м.',
            param2: 'Периметр: эласт. еврокаркас из ППУ стеганный на синтепоне',
            param3: 'до 100 кг',
            param4: '13 см',
            matressSize: '',
            oldPrice: '', newPrice: '35000',
            prices: {
                price0: '35000',
                price1: '43000',
                price4: '57000',
            },
            sizes: [
                "60*120",
                "80*190",
                "140*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20Baby%20KING`,
        },
    ])

    const sizeSelect = (e, x) => {
        const size = [...mat]
        switch (e.target.value) {
            case "60*120":
                size[x].newPrice = mat[x].prices.price0
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            case "80*190":
                size[x].newPrice = mat[x].prices.price1
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            case "90*190":
                size[x].newPrice = mat[x].prices.price2
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            case "120*200":
                size[x].newPrice = mat[x].prices.price3
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            case "140*200":
                size[x].newPrice = mat[x].prices.price4
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            case "160*200":
                size[x].newPrice = mat[x].prices.price5
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            case "180*200":
                size[x].newPrice = mat[x].prices.price6
                size[x].matressSize = e.target.value
                setMat(size)
                break;
            default:
                break;
        }
    }

    return (
        <div className="container section py-5">
            <h2>Детские матрасы</h2>
            <div className="row mt-5">
            {
                    mat.map((value, index) => {
                        return (
                            <div className="col-md-4 mb-5" key={index}>
                                {
                                    value.salesLeader ?
                                    <span className="badge text-bg-danger position-absolute">
                                        ЛИДЕР ПРОДАЖ
                                    </span> : ''
                                }
                                <Slider {...settings}>
                                    <img className="w-100 mb-4" src={value.imgMat1} alt="Mattress1" />
                                    <img className="w-100 mb-4" src={value.imgMat2} alt="Mattress2" />
                                </Slider>
                                <h5 className="text-center mb-3">{value.title}</h5>
                                <ul>
                                    <li>{value.param1}</li>
                                    <li>Периметр: <b>{value.param2}</b></li>
                                    <li>Нагрузка на сп. место: <b>{value.param3}</b></li>
                                    <li>Общая высота: <b>{value.param4}</b></li>
                                </ul>
                                {
                                    value.oldPrice.length === 0 ? '' :
                                    <p className="oldPrice d-inline mb-1 fs-5 fw-semibold">{value.oldPrice} тг.</p>
                                }
                                <div className="d-flex align-items-start">
                                    <p className="text-danger me-4 fs-5 fw-bold">от {value.newPrice} тг.</p>
                                    <select className="form-select w-50 form-select-sm" aria-label="Default select example"
                                        onChange={(e) => sizeSelect(e, index) }>
                                        {
                                            value.sizes.map((v, i) => (
                                                <option defaultValue={v} key={i}>{v}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p className="text-center text-secondary fw-semibold mb-1">Бесплатная доставка</p>
                                <div className="d-flex flex-wrap">
                                    <a className="btn btn-sm btn-warning fw-semibold me-2 mb-2">Подробнее о товаре</a>
                                    <a className="btn btn-sm btn-success fw-semibold me-2 mb-2"
                                        href={`https://wa.me/${tel}?text=Здравствуйте! Меня интересует ${value.title} размер ${value.matressSize} от ${value.newPrice} тг`}>Заказать</a>
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