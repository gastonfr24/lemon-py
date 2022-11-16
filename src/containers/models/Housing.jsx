import FullWidthLayout from 'hocs/layouts/FullWidthLayout'
import { connect } from 'react-redux'

import { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"

import { Spinner } from 'flowbite-react'

import {BsHouseDoor} from 'react-icons/bs'

function Housing() {


    const [ganancia, setGanancia] = useState(0)
    // estado inicial del boton de carga
    const [loading, setLoading] = useState(false)

    // Estado inicial del form a enviar
    const [formData, setFormData] = useState({
        'house':'',
        'house_2':'',
        'Bethrooms':'',
        'Bathrooms':'',
        'State':'',

      })


    const {house, house_2 ,Bethrooms ,Bathrooms ,State } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(State)
    const onSubmit = e => {
        setLoading(true);
        e.preventDefault();

        const config = {
            header: {
              'Content-Type': 'application/json'
            }
          }
   

        const formData = new FormData()
        formData.append('house', house)
        formData.append('house_2', house_2)
        formData.append('Bethrooms', Bethrooms)
        formData.append('Bathrooms', Bathrooms)
        formData.append('State', State)

        //console.log(formData)

        const fetchData = async () =>{
            /* funcion de post */
            axios.post(`${process.env.REACT_APP_API_URL}/api/projects/ml/housing`, formData, config)
            .then(res =>{
              setLoading(false);
              toast.success('datos enviados correctamente');

              setGanancia(res.data.prediction.toFixed(2))


            }).catch(err => {
              setLoading(false);
              toast.error('Error al enviar el mensaje');
  
              }
            )
          }
          fetchData()
        }
        
        


  return (
    <FullWidthLayout>


<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className=" mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Bienes Raíces
          </p>

        </div>
      </div>
    </div>



    <div class="w-full my-20 z-50 sticky  rounded-3xl px-6 daek:bg-zinc-900 bg-zinc-200 dark:bg-zinc-900">
        <div className="text-center">
          <p className="mt-1 pt-4 text-3xl font-gilroy-semibold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-4xl">
          Realice una Predicción
          </p>
        </div>
  



    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
      <div class="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          


    
        <div className="max-w-lg mx-auto dark:bg-zinc-800 bg-zinc-100 shadow-2xl p-10 rounded-lg">
    
        <div className='m-2 flex justify-center font-bold text-l'><h1>Ingrese Datos al Modelo</h1></div>

    <form onSubmit={e => onSubmit(e)} >
        <div className="mb-6">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300 block mb-2">Tamaño del terreno (mts^2)</label>
            <input  
            name='house'
            value={house}
            onChange={e=>onChange(e)}

            className="bg-zinc-50 border dark:bg-zinc-900 border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-zinc-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300 block mb-2">Tamaño de la casa (mts^2)</label>
            <input  
            name='house_2'
            value={house_2}
            onChange={e=>onChange(e)}

            className="bg-zinc-50 border dark:bg-zinc-900 border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-zinc-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-300 block mb-2">Dormitorios</label>
            <input  
            type='number'
            name='Bethrooms'
            onChange={e=>onChange(e)}
            value={Bethrooms}
            min="1"
            max='9'
            className="bg-zinc-50 border dark:bg-zinc-900 border-zinc-300 dark:border-zinc-900 text-zinc-900 dark:text-zinc-300 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>

        <div className="mb-6">
            <label  className="text-sm font-medium text-zinc-900 block mb-2 dark:text-zinc-300">Baños</label>
            <input
            name='Bathrooms'
            type='number'
            onChange={e=>onChange(e)}
            value={Bathrooms}
            min="1"
            max='9'
            className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 dark:text-zinc-300 text-zinc-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className='mb-6'>
        <label  className="text-sm font-medium text-zinc-900 block mb-2 dark:text-zinc-300">Ciudad</label>
                    <select
                        id="estado"
                        name="State"
                        onChange={e=>onChange(e)}
                        value={State}
                        required

                        className="dark:placeholder-zinc-800 dark:bg-zinc-900 dark:border-zinc-700 mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                    >
                        <option value="" className="dark:text-zinc-700" disabled selected>Elija un lugar</option>
                        <option value="Godoy Cruz">Godoy Cruz</option>
                        <option value="Mendoza[Ciudad]">Mendoza[Ciudad]</option>
                    </select>
                </div>

    <button
    type="submit"
    className=" text-white dark:bg-zinc-900 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
 >
        {
            loading ? 
            <>
              <Spinner
    color="success"
    aria-label="Success spinner example"
  />
            </>:<>Submit</>
        }
        
        </button>


    </form>

    <p className="mt-5">Ultima actualización 16/11/2022. 
   *Tener en cuenta que el modelo fue entrenado con pocos datos* </p>
</div>

        </div>
       
       
        <div
            class="rounded-lg text-center overflow-hidden w-full transform bg-white shadow-2xl dark:bg-zinc-800"
          >
            <div id="title" class="w-full py-14 border-b border-zinc-900">
              <h2 class="font-bold text-4xl dark:text-white">Precio de la casa</h2>
              <h3 class="font-normal text-green-500 text-4xl mt-2">
                ${ganancia}
              </h3>
            </div>
            <div id="content" class="py-12">
              <div id="icon" class="mt-5 mb-3">
            <BsHouseDoor
                  class="h-12 w-12 mx-auto fill-stroke text-green-500"
              />

                <p class="dark:text-gray-200 font-gilroy-bold text-4xl pt-2">
                  Su Casa
                </p>
              </div>
              <div id="contain" class="leading-8 mb-16 mt-2 text-xl font-light">
                <ul>
                  <li> {house ? <>{house}</>: <span className=''>0</span>} mts2 (terreno)</li>
                  <li> {house_2 ? <>{house_2}</>: <span className=''>0</span>} mts2 (casa)</li>
                  <li>  {Bethrooms ? <>{Bethrooms}</>: <span className=''>0</span>} Dormitorios</li>
                  <li> {Bathrooms ? <>{Bathrooms}</>: <span className=''>0</span>} Baños</li>
                  <li>Ubicación: {State ? <>{State}</>: <span className='text-orange-500 font-bold italic'>Sin Elegir</span>}</li>
                </ul>

              </div>
            </div>
          </div>
       
       
       
 </div>
    </div>


    <div class="sm:px-4 py-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded-3xl shadow-sm lg:flex-row sm:mx-auto">
        <div class="relative lg:w-1/2">

        </div>

      </div>
    </div>
  
          </div>
    </FullWidthLayout>
  )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(Housing)
