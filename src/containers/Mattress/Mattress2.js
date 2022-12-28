import Slider from 'react-slick'
import { useState } from "react"
import './Mattress.scss'

let tel = '7475087701'

const Mattress2 = () => {
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
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 COMFORT LUXE.jpg",
            title: 'Матрас COMFORT LUXE',
            param1: 'Независимый пружинный блок Multipocket, 1000 шт/спальное место',
            param2: 'усиленный еврокаркас',
            param3: '150 кг',
            param4: '21-22 см',
            matressSize: '',
            oldPrice: '', newPrice: '97250',
            prices: {
                price1: '97250',
                price5: '173540',
                price6: '189298',
            },
            sizes: [
                "80*190",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20COMFORT%20LUXE`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 MEMORY SOFT.jpg",
            title: 'Матрас MEMORY SOFT',
            param1: 'Независимый пружинный блок Pocket Spring,500 шт/спальное место',
            param2: 'Эласт. из ППУ',
            param3: '120 кг',
            param4: '22 см',
            matressSize: '',
            oldPrice: '', newPrice: '81999',
            prices: {
                price1: '81999',
                price5: '141000',
                price6: '151000',
            },
            sizes: [
                "80*190",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20MEMORY%20SOFT`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 PREMIUM SOFT.jpg",
            title: 'Матрас PREMIUM SOFT',
            param1: 'Независимый пружинный блок MultiPocket, 1000 шт/спальное место',
            param2: 'усиленный еврокаркас из ППУ',
            param3: '160 кг',
            param4: '25-26 см',
            matressSize: '',
            oldPrice: '', newPrice: '250000',
            prices: {
                price5: '250000',
                price6: '277800',
            },
            sizes: [
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20PREMIUM%20SOFT`,
        },
    ])

    const sizeSelect = (e, x) => {
        const size = [...mat]
        switch (e.target.value) {
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
        <div className="container section py-5 collection">
            <h2>Матрасы премиум класса</h2>
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
                                    <img className="mb-4" src={value.imgMat1} alt="Mattress1" />
                                    <img className="mb-4" src={value.imgMat2} alt="Mattress2" />
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

export default Mattress2