import '../styles/components/Footer.scss';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <nav>
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <NavLink className={(navData) => { return (navData.isActive ? "footer__menu-link active" : "footer__menu-link ") }} to="/">
                            A jugar
                        </NavLink>
                    </li>
                    <li className="footer__menu-item">
                        <NavLink className={(navData) => { return (navData.isActive ? "footer__menu-link active" : "footer__menu-link ") }} to="/instructions">
                            ¿Cómo se juega?
                        </NavLink>
                    </li>
                    <li className="footer__menu-item">
                        <NavLink className={(navData) => { return (navData.isActive ? "footer__menu-link active" : "footer__menu-link ") }} to="/options">
                            Más opciones
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <small className="footer__copy">© Adalab</small>
        </footer>
    )
}
export default Footer;