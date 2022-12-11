import './Header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <img src="logo.png" className="navbar-brand" alt="logo" />
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler order-3 order-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse order-4 order-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Каталог</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Отзывы</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <a href="tel:+77774884979" className='text-white fw-bold text-decoration-none mb-1'>8 776 946 00 22</a>
                    <button className="btn btn-warning btn-sm fw-semibold">Получить Консультацию</button>
                </div>
            </div>
        </nav>
    )
}

export default Header