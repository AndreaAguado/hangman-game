import '../styles/components/_form.scss';
const Form = (props) => {
    return (
        <form className="form" onSubmit={ev => ev.preventDefault()}>
            <label className="title" htmlFor="last-letter">
                Escribe una letra:
            </label>
            <input
                onChange={props.handleLastLetter}
                autoComplete="off"
                className="form__input"
                maxLength="1"
                type="text"
                name="last-letter"
                id="last-letter"
                value={props.lastLetter}
            />
        </form>
    )
}
export default Form;