export const withUlComponent = ( Component, dataList )=>{
    const UlComponentWithData = () => {
        return <Component list={dataList} />;
    };

    UlComponentWithData.displayName = `withUlComponent(${Component.displayName || Component.name || 'Component'})`;
    return UlComponentWithData;
}