const withCanvasOnClick = (WrappedComponent) => {
    return function (props) { console.log("props", props)
        const [show, setShow] = React.useState(false); // Ensure you handle state correctly.
        const handleClick = () =>{
            alert("texto: " + props.text)
            if(show)
                setShow(false)
            else
                setShow(true)
            console.log("!!!", show)
        }
        return <WrappedComponent {...props} onClick={ handleClick }  ></WrappedComponent>
    }
    ComponentWithClick.displayName = `withCanvasOnClick(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return ComponentWithClick;
}

export default withCanvasOnClick