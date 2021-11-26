import '../styles/components/_letters.scss';
import Loading from './Loading';
const SolutionLetters = (props) => {
    return (
        <div className="solution">
            <h2 className="title">Solución:</h2>
            <Loading isLoading={props.isLoading}></Loading>
            <ul className="letters">
                {props.renderSolutionLetters()}
            </ul>
        </div>
    )
}
export default SolutionLetters;