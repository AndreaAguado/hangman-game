import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
// import Header from './Header';
// import Footer from './Footer';
const Game = (props) => {
    return (
        <div>
            {/* <Header></Header> */}
            <main className="main">
                <section>
                    <SolutionLetters renderSolutionLetters={props.renderSolutionLetters}></SolutionLetters>
                    <ErrorLetters renderErrorLetters={props.renderErrorLetters}></ErrorLetters>
                    <Form handleLastLetter={props.handleLastLetter} lastLetter={props.lastLetter}></Form>
                </section>
                <Dummy calcErrors={props.calcErrors}></Dummy>
            </main>
            {/* <Footer></Footer> */}
        </div>

    )
}

export default Game;