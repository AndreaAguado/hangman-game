import '../styles/core/ModalWindow.scss';
import { useState } from 'react';


function ModalWindow(props) {
    const [hidden, setHidden] = useState('');
    const gameOverMessage = () => {
        if (props.calcErrors() === 13) {
            return "Has perdido :(";
        }
        else if (props.hasWon) {
            return "Has ganado!! :D";
        }
    }

    const handleModal = () => {
        setHidden('hidden');
    }
    const handlePlayButton = () => {
        props.handleButton();
    }
    return (
        <div className={`modal ${hidden}`}>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <header className='modal__header'>
                        <h2 className='modal__title'>{gameOverMessage()}</h2>
                        <div onClick={handleModal}>
                            <span className='modal__close icon fas fa-times'></span>
                        </div>
                    </header>
                    <section className='modal__contents_section'>
                        <button onClick={handlePlayButton}>Jugar de nuevo</button>
                        {props.children}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;