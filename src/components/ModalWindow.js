import '../styles/core/ModalWindow.scss';
import { Link } from 'react-router-dom';


function ModalWindow(props) {
    const gameOverMessage = () => {
        if (props.calcErrors === 13) {
            return (<p>Has perdido :(</p>)
        }
        else {
            return (<p>Has ganado!! :D</p>)
        }
    }
    return (
        <div className='modal'>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <header className='modal__header'>
                        <h2 className='modal__title'>{gameOverMessage()}</h2>
                        <Link to='/'>
                            <span className='modal__close icon fas fa-times'></span>
                        </Link>
                    </header>
                    <section className='modal__contents_section'>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;