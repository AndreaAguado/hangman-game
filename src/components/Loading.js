import '../styles/components/Loading.scss';
const Loading = (props) => {
    const renderLoading = () => {
        if (props.isLoading === false) {
            return (<span className="loading" />);
        }
        else {
            return null;
        }
    }
    return (
        <>
            {renderLoading()}
        </>

    )
}
export default Loading;