import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import ModalWindow from './ModalWindow';

const Game = (props) => {
    return (
        <main className="main">
            <section>
                <SolutionLetters renderSolutionLetters={props.renderSolutionLetters} isLoading={props.isLoading}>
                </SolutionLetters>
                <ErrorLetters renderErrorLetters={props.renderErrorLetters}></ErrorLetters>
                <Form handleLastLetter={props.handleLastLetter} lastLetter={props.lastLetter}></Form>
            </section>
            <Dummy calcErrors={props.calcErrors}></Dummy>
            <ModalWindow calcErrors={props.calcErrors}>
                <p>El resultado era:</p>
            </ModalWindow>
        </main>

    )
}

export default Game;