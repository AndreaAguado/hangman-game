import '../styles/components/Options.scss';
import Dummy from "./Dummy";

const Options = (props) => {
    return (
        <section className="options_page">
            <p className="options">Estas son las opciones del juego</p>
            <Dummy calcErrors={props.calcErrors}></Dummy>
        </section>

    )
}
export default Options;