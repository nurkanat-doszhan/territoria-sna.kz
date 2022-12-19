import "./Footer.scss"

const Footer = () => {
    return (
        <footer className="navbar">
            <div className="container">
                <a><img src="logo.svg" className="me-5" /></a>
                <ul className="d-flex text-white fw-semibold">
                    <li className="nav-item me-4">
                        <a className="nav-link p-2" href="#">Главная</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link p-2" href="#">Преимущество</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link p-2" href="#">Как мы работаем</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link p-2" href="#">Каталог</a>
                    </li>
                    <li className="nav-item me-4">
                        <a className="nav-link p-2" href="#">Отзывы</a>
                    </li>
                </ul>
                <a href="tel:+77079460022" className='text-white fw-bold text-decoration-none mb-1'>8 707 946 00 22</a>
            </div>
        </footer>
    )
}

export default Footer