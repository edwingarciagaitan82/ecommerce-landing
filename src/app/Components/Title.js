import styles from './Title.module.css'
function Title({ titulo }){
    // const titulo = "Tecnologias"
    return(<>
    <h1 className={ styles.h1 }> { titulo } </h1>
    </>)
}
export default Title