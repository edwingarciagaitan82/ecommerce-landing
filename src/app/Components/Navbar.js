"use client";
import Link from "next/link"
import { withUlComponent } from "./withUlComponent"
import UlHorizontal from "./UlHorizontal"
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { categoriesLoad } from "../redux/categorySlice";
function Navbar(){
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [ catList, setCatList ] = useState([])
    const [ userLogged, setUserLogged ] = useState(false)
    async function catsLoad(){
        //cargo las categorias
        const url = process.env.NEXT_PUBLIC_API_URL+"categories"; 
        console.log("url",url)
        await fetch(url)
        .then(response => response.json())
        .then(data => { console.log("data",data)
            dispatch(categoriesLoad(data))
            setCatList(data)
        })
    }

    async function userLoad(){
        console.log("userRdx",user)
        if(user.email != "")
            setUserLogged(true)
    }

    useEffect(()=>{
        catsLoad()
        userLoad()
    },[])
    

    const rsList= [
        { id: 1, name: "Github", icon : "FaGithub", title:"Github", href: "https://github.com/edwingarciagaitan82"},
        { id: 2, name: " X " , icon : "FaTwitter", title: "Twitter", href: "https://x.com/?lang=es" }  
      ]

    const Rrss = withUlComponent(UlHorizontal, rsList  )
    const [ show , setShow] = useState(false)
    const hdMostrar = () =>{
        if(show)
          setShow(false)
        else
          setShow(true)
          console.log("!!!")
    }
    
      const carrito = useSelector(state=> state.cart.list )
    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/" className="navbar-brand">Mi Ecommerce</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">                
                    { catList.map( (item, i) =>(
                        <li key={i} className="nav-item">
                        <a className="nav-link" href="#">{ item.nombre }</a>
                        </li>
                    )) }
    
            {/* <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li> */}
            <li className="nav-item">
                {/* <a className="nav-link" href="#">Pricing</a> */}
                <Link href="/contact" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="http://localhost:5173/">admin</a>
            </li>
            { userLogged ? 
               <></>
               :
                <>
                    <li className="nav-item">
                        <Link className="nav-link" href="/pages/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/pages/register">Register</Link> 
                    </li>
                </>
            }
            </ul>
            
        </div>
        {/*  */}
            <ul className="navbar-nav ml-auto ">
                <Rrss></Rrss>
            </ul>
            <ul className="navbar-nav ml-auto px-4">
                {/* <FaShoppingCart /> */}
                {   userLogged  ? 
                    <a onClick={ hdMostrar } ><FaShoppingCart /></a>
                    : <></>
                }
            </ul>
        </nav>
        <div className={ (show) ? 'offcanvas offcanvas-start show':'offcanvas offcanvas-start' } tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                <button onClick={ hdMostrar } type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div>
                Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                </div>
                <div className="dropdown mt-3">
                
                <ul className="">
                    { carrito.map( (item,id) => (
                        <li key={id}><a className="dropdown-item" href="#">{ item.title }</a></li>
                    )) }
                    
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
            </div>
    </>)
}

export default Navbar