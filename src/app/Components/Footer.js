import UlVertical from "./UlVertical"
import { withUlComponent } from "./withUlComponent"

function Footer(){
    const rsList= [
        { id: 1, name: "Github", icon : "github"},
        { id: 2, name: " X " , icon : "twitter"}  
      ]
    const Rrss = withUlComponent(UlVertical, rsList)
    return(
        <>
        <div className="row">
            <div className="col-3"></div>
            <div className="col-6"></div>
            <div className="col-3">
                <Rrss></Rrss>
            </div>
        </div>
        </>
    )
}

export default Footer