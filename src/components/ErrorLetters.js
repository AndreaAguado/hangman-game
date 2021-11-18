import '../styles/components/_letters.scss';
const ErrorLetters = (props) => {
    return (
        <div className="feedback">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
                {props.renderErrorLetters()}
            </ul>
        </div>
    )
}
export default ErrorLetters;