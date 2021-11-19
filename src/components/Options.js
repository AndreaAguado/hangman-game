import '../styles/components/Options.scss';
import Dummy from "./Dummy";

const Options = (props) => {
    return (
        <section className="options">
            <div className="options_container">
                <h2 className="options_title">Estas son las opciones del juego
                </h2>
                <form>
                    <label className="title" htmlFor="word">
                        Escribe aquí la palabra que hay que adivinar:
                    </label>
                    <input
                        autofocus
                        autocomplete="off"
                        class="form__input"
                        maxlength="15"
                        type="text"
                        id="word"
                        name="word"
                    />
                </form>
            </div>
            <Dummy calcErrors={props.calcErrors}></Dummy>
        </section>

    )
}
export default Options;