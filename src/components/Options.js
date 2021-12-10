import '../styles/components/Options.scss';
import Dummy from "./Dummy";
import { Link } from 'react-router-dom';

const Options = (props) => {
    const handleWordToGuess = (ev) => {
        console.log(ev.target.value);
        props.handleInput(ev.target.value);
    }
    return (
        <section className="options">
            <div className="options_container">
                <form onSubmit={(ev) => { ev.preventDefault() }}>
                    <label className="title" htmlFor="word">
                        Escribe aquí la palabra que hay que adivinar:
                    </label>
                    <input
                        onChange={handleWordToGuess}
                        autoFocus
                        autoComplete="off"
                        className="form__input"
                        maxLength="15"
                        type="text"
                        id="word"
                        name="word"
                    />
                </form>
                <Link className="options_play_button" to="/"> A jugar</Link>
            </div>
            <Dummy calcErrors={props.calcErrors}></Dummy>
        </section>

    )
}
export default Options;