import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { productAdd } from '../redux/cartSlice'
import { useSelector } from "react-redux";
import Link from 'next/link';
function Card({ product }){
    const dispatch = useDispatch()
    // 
    const datos = product
    const addCart = () =>{ console.log(datos)
      dispatch(productAdd( datos))
    }

    // const {email} = useSelector(state=> state.user )
    // console.log("user", email)
    // dispatch( addProducto  )
    return(<>
    <div className="col-4 pt-4">
      <div className="card h-100 shadow-sm">
        <a href="#"  >
          <img src={ product.image }  className={ styles.cardImgTop } alt="product.title"></img>
        </a>
        <div className="label-top shadow-sm">
          <a className="text-white" href="#">asus</a>
        </div>
        <div className="card-body">
          <div className="clearfix mb-3">
            <span className="float-start badge rounded-pill bg-success">$ { product.precio }</span>
            <span className="float-end"><a href="#" className="small text-muted text-uppercase aff-link">reviews</a></span>
          </div>
          <h5 className="card-title">
            <a target="_blank" href="#">{ product.nombre  }</a>
          </h5>
          <div className="d-grid gap-2 my-4">
            <a href="#" onClick = { addCart  } className="btn btn-warning bold-btn">add to cart</a>
            <Link href={{ pathname: 'pages/product', query: { id: product.id } }} className="btn btn-info bold-btn">Ver</Link>
          </div>
          <div className="clearfix mb-1">
            <span className="float-start"><a href="#"><i className="fas fa-question-circle"></i></a></span>
            <span className="float-end">
              <i className="far fa-heart"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
    </>)
}
export default Card