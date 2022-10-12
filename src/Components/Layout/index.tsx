import { Link, useLocation } from 'react-router-dom';
type LayoutType = {
    children:React.ReactNode;
}

type menuInterface = {
    id:number,
    name:string,
    url:string,
    icon?:string
}

const Layout = ({children}: LayoutType) => {
    const { pathname } = useLocation()
    const menuData:menuInterface[] =  [
        {name:"Home", url:'/', id:1}, 
        {name:"Project", url:'/project', id:2},
        {name:"About", url:'/about', id:3},
        {name:"Contact", url:'/contact', id:4},
        {name:"Resume", url:'/resume', id:5}
    ]
  return (<>
    <nav>
      <div className='bg-slate-700 h-14 flex justify-between items-center px-8 shadow drop-shadow-lg shadow-pink-800' >
        <div>
          <Link to={"/"} >
            <h2 className='rounded-full border border-pink-500 text-white w-10 h-10 flex justify-center items-center text-lg font-black' >TJ</h2>
          </Link>
        </div>
        <div>
          <ul className='flex space-x-8 text-white' >
            {menuData.map((item) => <li key={item.id} className={`${pathname === item.url && 'active'}  hover:active last:border last:border-pink-500  rounded px-3 py-2 `} ><Link to={item.url} >{item.name}</Link></li> )}
          </ul>
        </div>
      </div>
    </nav>
    <div className='bg-slate-800 h-[calc(100vh-56px)]' >{children}</div>
  </>)
}

export default Layout