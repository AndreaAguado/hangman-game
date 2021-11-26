const Loading = (props) => {
    const renderLoading = () => {
        if (props.isLoading) {
            return (`<span className="loading" />`);
        }
        else {
            return null;
        }
    }
    return (
        { renderLoading }
    )
}
export default Loading;