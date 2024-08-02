function UlVertical({ list }){
    return(<>
    <ul className="">
        { list.map((item)=>(
            <li key={ item.id }> { item.icon }</li>
        ))  }
    </ul>
    </>)
}
export default UlVertical