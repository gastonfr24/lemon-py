import {HiArrowNarrowRight} from 'react-icons/hi' 
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name='home' className='w-full h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='dark:text-[rgb(77,181,255)] text-[#3589c5] dark:font-medium font-bold'>Hola, que tal? Soy</p>
      <h1 className='text-4xl sm:text-5xl font-gilroy-bold text-zinc-700 dark:text-gray-200'>Gaston Franco</h1>
      <h2 className='text-4xl sm:text-5xl font-gilroy-bold text-[#3589c5] dark:text-[#4db5ff]'>Data Scientist</h2>
      <p className='dark:text-[#4db5ff] py-4 max-w-[700px] text-[#3589c5]'>Soy programador y científico de datos junior con gran interes en el aprendizaje automático
       e Inteligencia Artificial. He realizado varios cursos sobre Machine Learning, Deep Learning y Análisis de datos con python que me han ayudado a 
       realizar grandes proyectos, tambien estoy estudiando en la UTN de San Rafael donde sigo ampliando mis conocimienos.</p>
     <div className=''>
          <Link to='work' smooth={true} duration={500}>
         <button 
         className='hover:px-4 hover:pl-6 text-zinc-800 dark:text-white group border-2 px-6 py-3 my-2 flex items-center
         dark:hover:bg-[#4db5ff66] duration-300'>
        View Work 
        <span className='group-hover:rotate-90 duration-300 group-hover:ml-2 group-hover:mb-2'>
        <HiArrowNarrowRight className='ml-3'/>
        </span>
      </button>
       </Link>
     </div>
   
     </div>



    </div>
  )
}

export default Home