import { Link } from 'react-router-dom';
import '../styles/components/NotFoundPage.scss';
import Dummy from "./Dummy";


const NotFoundPage = (props) => {
    return (
        <div className="nofoundpage">
            <div className="nofoundpage_message">
                <h2>Parece que aquí no hay nada</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
            <Dummy calcErrors={props.calcErrors}></Dummy>
        </div>
    )
}
export default NotFoundPage;