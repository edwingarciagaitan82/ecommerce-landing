import Link from "next/link"
import { withUlComponent } from "./withUlComponent"
import UlHorizontal from "./UlHorizontal"
import { FaShoppingCart } from "react-icons/fa";
function Navbar(){
    const rsList= [
        { id: 1, name: "Github", icon : "FaGithub", title:"Github", href: "https://github.com/edwingarciagaitan82"},
        { id: 2, name: " X " , icon : "FaTwitter", title: "Twitter", href: "https://x.com/?lang=es" }  
      ]
    const Rrss = withUlComponent(UlHorizontal, rsList  )
    return(<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link  href="/" className="navbar-brand">Mi Portafolio</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" href="/pages/tecnologies">Tecnologias</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                {/* <a className="nav-link" href="#">Pricing</a> */}
                <Link href="/pages/contact" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="http://localhost:5173/">admin</a>
            </li>
            </ul>
            
        </div>
        {/*  */}
            <ul className="navbar-nav ml-auto ">
                <Rrss></Rrss>
                
            </ul>
            <ul className="navbar-nav ml-auto px-4">
                <FaShoppingCart />
            </ul>
        </nav>
    </>)
}

export default Navbar