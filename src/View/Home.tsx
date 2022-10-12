import Layout from '../Components/Layout';

const Home = () => {
  return (
    <Layout>
        <div className="container mx-auto relative h-full">
          <div className='absolute h-[400px] w-[400px] rounded-full shadow-lg opacity-20 top-2/4 left-3/4 transform -translate-x-2/4 -translate-y-2/4  bg-slate-600' >
              <span></span>
          </div>
          <div className='absolute h-[400px] w-[400px]  top-2/4 left-1/4 text-white transform -translate-x-2/4 -translate-y-2/4'>
            <div className='bg-slate-900 px-6 py-2 rounded inline-block scale-150 -rotate-12' >
              <h1 className='text-2xl' > 👋  Hello <span className='text-base' >i am </span> </h1>
              <h1 className='text-xl' >Tawhidur Rahman</h1>
            </div>
            <div className='bg-slate-900 px-4 py-2 rounded inline-block scale-150 -rotate-12 mt-10 ml-44' >
              <h1 className='text-lg' >A Full Stack Developer </h1>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Home