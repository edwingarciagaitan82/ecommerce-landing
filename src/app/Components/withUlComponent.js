export const withUlComponent = ( Component, dataList )=>{
    return function(){
        return(
            <Component list={dataList}></Component>
        )
    }
}