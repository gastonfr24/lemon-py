import React from 'react'
import FullWidthLayout from 'hocs/layouts/FullWidthLayout'

 function Home() {
  return (
    <FullWidthLayout>
        <section className="bg-white dark:bg-zinc-800">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-1 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Bienvenido/a a <span className="text-yellow-400">Lemon Py!</span></h1>
                <p className="max-w-2xl mb-6 font-light text-zinc-500 lg:mb-8 md:text-lg lg:text-xl dark:text-zinc-400">Pronto crearé una pagina donde se pueda desplegar modelos de Machine Learning y para que todos los usuarios que se registren puedan hacerlo,
                mientras tanto estare usando esta página para mi portfolio.</p>
                <a href="/acceder" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <a href="/portfolio" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-zinc-900 border border-zinc-300 rounded-lg hover:bg-zinc-100 focus:ring-4 focus:ring-zinc-100 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800">
                    Portfolio
                </a> 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="https://i.postimg.cc/vTQsNJkN/user.png" alt="mockup"/>
            </div>                
        </div>
    </section>
    </FullWidthLayout>
  )
}
export default Home