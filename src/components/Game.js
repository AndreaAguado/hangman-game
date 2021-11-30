import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import ModalWindow from './ModalWindow';

const Game = (props) => {
    const renderModal = () => {
        if (props.calcErrors() === 13) {
            return (
                <ModalWindow calcErrors={props.calcErrors} hasWon={props.hasWon}>
                    <p>El resultado era: {props.word}</p>
                </ModalWindow>
            )
        }
        else if (props.hasWon) {
            return (
                <ModalWindow calcErrors={props.calcErrors} hasWon={props.hasWon}>
                    <p>Felicidades</p>
                </ModalWindow>
            )
        }
    }
    return (
        <main className="main">
            <section>
                <SolutionLetters renderSolutionLetters={props.renderSolutionLetters} isLoading={props.isLoading}>
                </SolutionLetters>
                <ErrorLetters renderErrorLetters={props.renderErrorLetters}></ErrorLetters>
                <Form handleLastLetter={props.handleLastLetter} lastLetter={props.lastLetter}></Form>
            </section>
            <Dummy calcErrors={props.calcErrors}></Dummy>
            {renderModal()}
        </main>

    )
}

export default Game;