export const withProductsComponent = ( Component, dataList )=>{
    return function(){
        return(<>
            { dataList.map( (item, i) =>(
                <Component key ={ i } product={item}></Component>
            )) }
            </>
        )
    }

    ProductsComponentWithData.displayName = `withProductsComponent(${Component.displayName || Component.name || 'Component'})`;
    return ProductsComponentWithData;
}