import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
const Game = (props) => {
    return (
        <main className="main">
            <section>
                <SolutionLetters renderSolutionLetters={props.renderSolutionLetters}></SolutionLetters>
                <ErrorLetters renderErrorLetters={props.renderErrorLetters}></ErrorLetters>
                <Form handleLastLetter={props.handleLastLetter} lastLetter={props.lastLetter}></Form>
            </section>
            <Dummy calcErrors={props.calcErrors}></Dummy>
        </main>
    )
}

export default Game;