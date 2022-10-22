import skl from 'assets/images/skl.png'
import mt from 'assets/images/mt.png'
import {
    SiTensorflow, 
    SiGithub, 

    SiMysql, 
    SiPostgresql, 
    
    SiPandas, 
    SiNumpy, 
    SiKeras, 
    SiDjango, 
    SiJavascript, 
    SiReact, 
    SiPython, 
} from 'react-icons/si'

import {GrMysql} from 'react-icons/gr'


function Skills() {
  return (
    <div name='skills' className=' text-zinc-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#4db5ff] dark:text-white text-zinc-700' >Skills</p>
            <p className='py-4 text-zinc-800 dark:text-white'>Databases</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
            <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiPostgresql className=' w-20 mx-auto text-5xl dark:text-white text-zinc-700'/>
                    <p className='my-4 dark:text-white text-zinc-700'>POSTGRESQL</p>
                </div>
                   
            <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <GrMysql className=' w-20 mx-auto text-5xl dark:text-white text-zinc-700'/>
                    <p className='my-4 dark:text-white text-zinc-700'>MYSQL</p>
                </div>
                
     
            </div>
            <div>
            <p className='py-4 text-zinc-800 dark:text-white'>Data Analysis & Visualization</p>
        </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
            <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiPython className='dark:text-[#bababa] text-zinc-500 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>PYTHON</p>
                </div>
            <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiNumpy className='dark:text-blue-400 text-blue-500 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>NUMPY</p>
                </div>

                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiPandas className='text-indigo-500  w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>PANDAS</p>
                </div>

                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                    <img src={mt} alt="sklearn" className='w-12 mx-auto' />
                    <p className='my-4 dark:text-white text-zinc-700'>MATPLOTLIB</p>
                </div>
            </div>
            <div>
            <p className='py-4 text-zinc-800 dark:text-white'>Machine Learning & Deep Learning</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                    <img src={skl} alt="sklearn" className='w-20 mx-auto' />
                    <p className='my-4 dark:text-white text-zinc-700'>SKLEARN</p>
                </div>

                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiTensorflow className='text-orange-400 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>TENSORFLOW</p>
                </div>
                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiKeras className='text-red-500 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>KERAS</p>
                </div>
            </div>

            <div>
            <p className='py-4 text-zinc-800 dark:text-white'>Others Skills</p>
        </div>

        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiGithub className='text-indigo-500 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>GITHUB</p>
                </div>
                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiDjango className='text-green-500 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>DJANGO</p>
                </div>
                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiJavascript className='text-yellow-300 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>JAVASCRIPT</p>
                </div>
                <div className='dark:bg-zinc-900 bg-zinc-100 shadow-md shadow-slate-400 rounded-lg dark:rounded-none dark:shadow-black hover:scale-110 duration-500 pt-3'>
                <SiReact className='text-blue-500 w-20 mx-auto text-5xl'/>
                    <p className='my-4 dark:text-white text-zinc-700'>REACT</p>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Skills