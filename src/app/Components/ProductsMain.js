'use client'
import { withProductsComponent } from "./withProductsComponent";
import Card from "./Card";
async function  ProductsMain(){
    const res =  await fetch('https://fakestoreapi.com/products');
    const list = await res.json();
    const ProductosHOC = withProductsComponent(Card, list)
    const hdCanvas = () =>{
        console.log("canvas")
        // const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas')
      }
      
    return(<>
        <div className="row">
            <ProductosHOC></ProductosHOC>
        </div>
    </>)
}

export default ProductsMain