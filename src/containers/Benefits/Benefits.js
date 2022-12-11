const Benefits = () => {
    const itemClass = "col-md-3 d-flex flex-column align-items-center"
    return (
        <div className="container my-5">
            <div className="row justify-content-md-center">
                <div className={itemClass}>
                    <img src="certificate.png" alt="" />
                    <p className="text-center fs-5 w-75">Более 10-ти лет на рынке</p>
                </div>
                <div className={itemClass}>
                    <img src="guarantee.png" alt="" />
                    <p className="text-center fs-5 w-75">Гарантия до 10 лет</p>
                </div>
                <div className={itemClass}>
                    <img src="24hours.png" alt="" />
                    <p className="text-center fs-5 w-75">Круглосуточный прием заявок</p>
                </div>
                <div className={itemClass}>
                    <img src="shipped.png" alt="" />
                    <p className="text-center fs-5 w-75">Бесплатная доставка по всему Казахстану</p>
                </div>
            </div>
        </div>
    )
}

export default Benefits