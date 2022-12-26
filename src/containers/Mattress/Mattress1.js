import Slider from 'react-slick'
import { useEffect, useState } from "react"
import './Mattress.scss'

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
    const [mat, setMat] = useState([
        {
            salesLeader: true, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас Orto Max sale',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '110 кг',
            param4: '18 см',
            oldPrice: '', newPrice: '47000',
            prices: {
                price1: '47000',
                price2: '49000',
                price3: '52000',
                price4: '59000',
                price5: '66000',
                price6: '72000',
            },
            url: ``,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас ORTO MAX SALE-1',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '18 см',
            oldPrice: '49000', newPrice: '39900',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20ORTO%20MAX%20SALE-1`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас BALANCE',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '20 см',
            oldPrice: '55900', newPrice: '48500',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20BALANCE`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас BALANCE HARD-3',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '140 кг',
            param4: '19 см',
            oldPrice: '69000', newPrice: '63944',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20BALANCE%20HARD-3`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас BALANCE-P',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '140 кг',
            param4: '22 см',
            oldPrice: '77000', newPrice: '69000',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20BALANCE-P`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас DREAM ZONE',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '19-20 см',
            oldPrice: '53000', newPrice: '49624',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20DREAM%20ZONE`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас ENERGY',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'Твердый ЕвроКаркас',
            param3: '140 кг',
            param4: '21-22 см',
            oldPrice: '', newPrice: '67780',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20ENERGY`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас SOFT',
            param1: 'Независимый пружинный блок Pocket Spring, 510 шт/спальное место',
            param2: 'Эластичный ЕвроКаркас',
            param3: '120 кг',
            param4: '21 см',
            oldPrice: '', newPrice: '65000',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20SOFT`,
        },
        {
            salesLeader: false, imgMat1: "1.jpg", imgMat2: "2.jpg",
            title: 'Матрас SUMMER PLUS',
            param1: 'Независимый пружинный блок Pocket Spring, 500 шт/спальное место',
            param2: 'эласт. еврокаркас из ППУ',
            param3: '120 кг',
            param4: '20 см',
            oldPrice: '', newPrice: '76000',
            url: `https://wa.me/${tel}?text=Здравствуйте!%20Меня%20интересует%20Матрас%20SUMMER%20PLUS`,
        },
    ])

    // useEffect(() => {
    //     sizeSelect()
    // }, [mat])

    const sizeSelect = (e) => {
        var si = e.target.value
        const size = [...mat]
        switch (e.target.value) {
            case "80*190":
                size[0].newPrice = mat[0].prices.price1
                setMat(size)
                break;
            case "90*190":
                size[0].newPrice = mat[0].prices.price2
                setMat(size)
                break;
            case "120*200":
                size[0].newPrice = mat[0].prices.price3
                setMat(size)
                break;
            case "140*200":
                size[0].newPrice = mat[0].prices.price4
                setMat(size)
                break;
            case "160*200":
                size[0].newPrice = mat[0].prices.price5
                setMat(size)
                break;
            case "180*200":
                size[0].newPrice = mat[0].prices.price6
                setMat(size)
                break;
            default:
                break;
        }
    }

    return (
        <div className="container section py-5" id="mat">
            <h2>Независимый блок пружин</h2>
            <div className="row mt-5">
                {
                    mat.map((value, index) => {
                        console.log(sizeSelect(si))
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
                                        onChange={(e) => sizeSelect(e) }>
                                        <option defaultValue="Выберите размер" disabled>Выберите размер</option>
                                        <option defaultValue="80*190">80*190</option>
                                        <option defaultValue="90*190">90*190</option>
                                        <option defaultValue="120*200">120*200</option>
                                        <option defaultValue="140*200">140*200</option>
                                        <option defaultValue="160*200">160*200</option>
                                        <option defaultValue="180*200">180*200</option>
                                    </select>
                                </div>
                                <p className="text-center text-secondary fw-semibold mb-1">Бесплатная доставка</p>
                                <div className="d-flex flex-wrap">
                                    <a className="btn btn-sm btn-warning fw-semibold me-2 mb-2" href={value.url}>Подробнее о товаре</a>
                                    <a className="btn btn-sm btn-success fw-semibold me-2 mb-2"
                                        href={`https://wa.me/${tel}?text=Здравствуйте! Меня интересует ${value.title} от ${value.newPrice} тг`}>Заказать</a>
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