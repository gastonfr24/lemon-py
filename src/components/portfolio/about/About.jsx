import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen text-zinc-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#4db5ff] dark:text-white text-zinc-700">About</p>
          </div>
            <div>

            </div>
            </div>
            <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 ">
            <div>
                <p className="sm:text-right text-4xl font-bold dark:text-white text-zinc-700">
                    Hola, Soy Gaston Fraco, Data Scientist y Desarrolador web
                </p>
            </div>
<div>
<p className="dark:text-white text-zinc-700">y por si te lo preguntabas, si, Franco es mi apellido :D, tengo 21 años, soy de Mendoza,Argentina y desde la secundaria me ha interesado la programación y
  las matemáticas por lo cual tengo amplios conocimentos en álgebra y estadistica descriptiva. Mas abajo vas a encontrar proyectos que he realizado tanto por mi parte
  como algunos otros que he realizado con amigos programadores que he conocido durante el camino. Muchas gracias por visitar mi portafolio! 
</p>
</div>
            </div>

        </div>
      </div>
 
  );
}

export default About;
