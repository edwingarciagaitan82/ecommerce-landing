const withCanvasOnClick = (WrappedComponent) => {
    return function (props) { console.log("props", props)
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
}

export default withCanvasOnClick