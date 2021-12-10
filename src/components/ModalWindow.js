import '../styles/core/ModalWindow.scss';

function ModalWindow(props) {
    const gameOverMessage = () => {
        if (props.calcErrors() === 13) {
            return "Has perdido :(";
        }
        else if (props.hasWon) {
            return "Has ganado!! :D";
        }
    }

    const handleModal = () => {
        props.handleModalVisibility();

    }
    const handlePlayButton = () => {
        props.handleButton();
    }
    return (
        <div className={`modal ${props.hidden}`}>
            <div className='modal__dialog'>
                <div className='modal__content'>
                    <header className='modal__header'>
                        <h2 className='modal__title'>{gameOverMessage()}</h2>
                        <div onClick={handleModal}>
                            <span className='modal__close icon fas fa-times'></span>
                        </div>
                    </header>
                    <section className='modal__contents_section'>
                        {props.children}
                        <button className='modal__button' onClick={handlePlayButton}>Jugar de nuevo</button>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;