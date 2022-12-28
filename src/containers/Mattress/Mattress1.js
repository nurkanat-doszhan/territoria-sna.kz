import Slider from 'react-slick'
import { useEffect, useState } from "react"
import './Mattress.scss'
import data from '../../data'
import { map } from 'jquery'

let tel = '7475087701'

const Mattress1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const [matressSize, setMatressSize] = useState([
        ''
    ])
    const [mat, setMat] = useState([
        {
            salesLeader: true, imgMat1: "1.jpg", imgMat2: "2 orto max sale.jpg",
            title: 'Матрас Orto Max sale',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '110 кг',
            param4: '18 см',
            matressSize: '',
            oldPrice: '', newPrice: '47000',
            prices: {
                price1: '47000',
                price2: '49000',
                price3: '52000',
                price4: '59000',
                price5: '66000',
                price6: '72000',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20Orto%20Max%20sale`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 orto max sale-1.jpg",
            title: 'Матрас ORTO MAX SALE-1',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '18 см',
            matressSize: '',
            oldPrice: '49000', newPrice: '39900',
            prices: {
                price1: '39900',
                price2: '43800',
                price3: '51000',
                price4: '57000',
                price5: '64000',
                price6: '72000',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20ORTO%20MAX%20SALE-1`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 BALANCE.jpg",
            title: 'Матрас BALANCE',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '20 см',
            matressSize: '',
            oldPrice: '55900', newPrice: '48500',
            prices: {
                price1: '48500',
                price2: '53480',
                price3: '68670',
                price4: '75870',
                price5: '79890',
                price6: '91200',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20BALANCE`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 BALANCE HARD-3.jpg",
            title: 'Матрас BALANCE HARD-3',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '140 кг',
            param4: '19 см',
            matressSize: '',
            oldPrice: '69000', newPrice: '63944',
            prices: {
                price1: '63944',
                price2: '67864',
                price3: '85344',
                price4: '95424',
                price5: '105056',
                price6: '114016',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20BALANCE%20HARD-3`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 BALANCE-P.jpg",
            title: 'Матрас BALANCE-P',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '140 кг',
            param4: '22 см',
            matressSize: '',
            oldPrice: '77000', newPrice: '69000',
            prices: {
                price1: '69000',
                price2: '77000',
                price3: '115000',
                price4: '137000',
                price5: '124900',
                price6: '147000',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20BALANCE-P`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2 DREAM ZONE.jpg",
            title: 'Матрас DREAM ZONE',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '19-20 см',
            matressSize: '',
            oldPrice: '53000', newPrice: '49624',
            prices: {
                price1: '49624',
                price2: '54104',
                price3: '69664',
                price4: '76944',
                price5: '81648',
                price6: '92000',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20DREAM%20ZONE`,
        },
        {
            salesLeader: false, imgMat1: "1 ENERGY.jpg", imgMat2: "2 ENERGY.jpg",
            title: 'Матрас ENERGY',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'Твердый ЕвроКаркас',
            param3: '140 кг',
            param4: '21-22 см',
            matressSize: '',
            oldPrice: '', newPrice: '67780',
            prices: {
                price1: '67780',
                price2: '69920',
                price3: '86290',
                price4: '95995',
                price5: '108300',
                price6: '117700',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20ENERGY`,
        },
        {
            salesLeader: false, imgMat1: "1 SOFT.jpg", imgMat2: "2 SOFT.jpg",
            title: 'Матрас SOFT',
            param1: 'Независимый пружинный блок Pocket Spring, 510 шт/спальное место',
            param2: 'Эластичный ЕвроКаркас',
            param3: '120 кг',
            param4: '21 см',
            matressSize: '',
            oldPrice: '', newPrice: '65000',
            prices: {
                price1: '65000',
                price5: '97000',
                price6: '105000',
            },
            sizes: [
                "80*190",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20SOFT`,
        },
        {
            salesLeader: false, imgMat1: "1 SUMMER PLUS.jpg", imgMat2: "2 SUMMER PLUS.jpg",
            title: 'Матрас SUMMER PLUS',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '20 см',
            matressSize: '',
            oldPrice: '', newPrice: '76000',
            prices: {
                price1: '76000',
                price2: '82300',
                price3: '103960',
                price4: '115360',
                price5: '127880',
                price6: '138850',
            },
            sizes: [
                "80*190",
                "90*190",
                "120*200",
                "140*200",
                "160*200",
                "180*200"
            ],
            url: `https://kaspi.kz/shop/search/?text=%D1%82%D0%B5%D1%80%D1%80%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F%20%D1%81%D0%BD%D0%B0%20SUMMER%20PLUS`,
        },
    ])

    // useEffect(() => {
    //     sizeSelect()
    // }, [mat])

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
        <div className="container section py-5 collection" id="mat">
            <h2>Независимый блок пружин</h2>
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

export default Mattress1