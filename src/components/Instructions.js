import '../styles/components/Instructions.scss';
import Dummy from "./Dummy";
import { Link } from 'react-router-dom';
const Instructions = (props) => {
    return (

        <div className="instructions_page">
            <section className="instructions">
                <h2>Instrucciones del juego:</h2>
                <p>Hay dos modalidades para jugar al juego del ahorcado: </p>
                <h4 className="instructions_headings">1.) Tratar de adivinar una palabra aleatoria:</h4>
                <p>
                    Únicamente habrá que ir introduciendo una por una letras en el campo de texto hasta que se complete la palabra. Pero cuidado de no fallar más de 13 veces <span role="img" aria-label="emoji calavera" title="emoji calavera">&#128128;</span>
                </p>
                <h4 className="instructions_headings">2. ) Jugar en grupo:</h4>
                <p>
                    En la pestaña de <Link to="/options">Más opciones</Link> se introducirá una palabra (secretamente). A continuación habrá que dirigirse de nuevo a la pestaña<Link to="/"> A jugar</Link>. Allí el resto de personas tratarán de adivinar dicha palabra.
                </p>
            </section>
            <Dummy calcErrors={props.calcErrors}></Dummy>
        </div>

    )
}
export default Instructions;