import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav-list">
                <ul className="list">
                    <li className="list-item"><Link to="/">Домашня сторінка</Link></li>
                    <li className="list-item"><Link to="/personal">Персональна Інформація</Link></li>
                    <li className="list-item"><Link to="/experience">Досвід Робот</Link></li>
                    <li className="list-item"><Link to="/additional">Додаткова Інформація</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
