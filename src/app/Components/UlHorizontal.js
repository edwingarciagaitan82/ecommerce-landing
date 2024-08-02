import Icon from './Icon';
function UlHorizontal({ list }){
    return(<>
    <ul className="navbar-nav flex-row ml-md-auto d-flex gap-3 px-4">
        { list.map((item)=>(
            <li className='pr' key={ item.id }>
                <a href={item.href} target='_blank' title={item.title}>
                    <Icon iconoNombre={ item.icon } ></Icon>
                </a>
            </li>
        ))  }
    </ul>
    </>)
}
export default UlHorizontal