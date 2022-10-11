import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const { pathname } = useLocation()
  console.log(pathname);
  
  let navMenu = [
    {
      id:1,
      path:"/",
      label:"Home"
    },
    {
      id:2,
      path:"/project",
      label:"Projects"
    },
    {
      id:3,
      path:"/about",
      label:"About"
    },
    {
      id:4,
      path:"/contact",
      label:"Contact"
    },
    {
      id:5,
      path:"/resume",
      label:"Resume"
    }
  ]
  return (
    <nav>
      <div className='bg-slate-700 h-14 flex justify-between items-center px-8' >
        <div>
          <Link to={"/"} >
            <h2 className='rounded-full border border-pink-500 text-white w-10 h-10 flex justify-center items-center text-lg font-black' >TJ</h2>
          </Link>
        </div>
        <div>
          <ul className='flex space-x-8 text-white' >
            {navMenu.map((item) => (<>
              <li key={`nav${item?.id}`} className={`${pathname === item.path && 'active'}  hover:active last:border last:border-pink-500  rounded px-3 py-2 `} ><Link to={item.path}>{item.label}</Link> </li>
            </>))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Home