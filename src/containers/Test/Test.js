import './Test.scss';

const Test = () => {
    return (
        <div className="d-flex position-relative" style={{background: 'url(bg-3.png) no-repeat center /cover', height: '60vh'}}>
            <img src="bg-mattress.png" className="mattress" alt="" />
            <div className="test-block">
                <h3 className="mb-4 fs-1 text-white">Пройдите тест</h3>
                <p className="mb-4 fs-5 text-white">Выберите свой идеальный матрас и получите наматрасник в подарок</p>
                <button className="btn btn-warning fw-semibold">Пройти тест</button>
            </div>
            <img src="gift.png" className='giftbox' alt="Giftbox" />
        </div>
    )
}

export default Test