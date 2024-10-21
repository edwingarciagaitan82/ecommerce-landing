export const withUlComponent = ( Component, dataList )=>{
    return function(){
        return(
            <Component list={dataList}></Component>
        )
    }

    UlComponentWithData.displayName = `withUlComponent(${Component.displayName || Component.name || 'Component'})`;
    return UlComponentWithData;
}