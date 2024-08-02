import * as allIcons from 'react-icons/fa'
function Icon({iconoNombre}){
    const IconoAUsar = allIcons[iconoNombre]
    return(
        <IconoAUsar></IconoAUsar>
    )
}
export default Icon