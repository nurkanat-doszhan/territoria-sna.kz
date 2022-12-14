import "./Footer.scss"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <a><img src="logo.svg" /></a>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Преимущество</a></li>
                    <li><a href="#">Как мы работаем</a></li>
                    <li><a href="#">Каталог</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <a href="tel:+77079460022">8 707 946 00 22</a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer