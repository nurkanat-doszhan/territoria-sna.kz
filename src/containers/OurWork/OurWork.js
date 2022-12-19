import './OurWork.scss'

const OurWork = () => {
    return (
        <div className="container section mb-5">
            <h2>Как мы работаем</h2>
            <div className="row mt-5 flex-row justify-content-center">
                <div className="block">
                    <h3>Заявка</h3>
                    <p>Выбираете модель,
                        размер, заполняете
                        и отправляете заявку</p>
                </div>
                <div className="block">
                    <h3>Обратная связь</h3>
                    <p width="80">Через мгновение
                        менеджер уточняет
                        Ваш адрес</p>
                </div>
                <div className="block">
                    <h3>Доставка</h3>
                    <p>Доставка матраса
                        осуществляется по всему
                        Казахстану, предварительно
                        перед доставкой курьер
                        согласует время доставки
                        и доставляет матрас</p>
                </div>
            </div>
        </div>
    )
}

export default OurWork