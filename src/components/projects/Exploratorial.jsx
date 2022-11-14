import { connect } from "react-redux";
import { useState, useEffect } from "react";


// Froala 
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
 // Require Editor JS files.
 import 'froala-editor/js/froala_editor.pkgd.min.js';
  
 // Require Editor CSS files.
 import 'froala-editor/css/froala_style.min.css';
 import 'froala-editor/css/froala_editor.pkgd.min.css';
import { describe_df } from 'redux/actions/projects';

// Flowbite
import { Spinner } from "flowbite-react/lib/esm/components";

// Table
import Table from "./Table";


function Exploratorial({analisis, describe_df, slug, df}) {

  useEffect(() => {
    setLoading(true)
    describe_df(slug)
  }, [])

    const [loading, setLoading] = useState(false)

    function get_describe_df (e){
        e.preventDefault()
        setLoading(true)
        describe_df(slug)
      }



    return (

        <div className="px-4 pb-16 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-2">

        <div className="px-4 pb-2 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-8 lg:pt-2">
        <h2 className="font-gilroy-medium text-3xl font-bold tracking-tight text-green-500 sm:text-3xl sm:leading-none max-w-lg mb-6 ">
                     Análisis Exploratorio básico del Dataset
                    </h2>
              <div className="flex flex-col items-center justify-between w-full ">
                    <p className="dark:text-white md:text-lg dark:bg-zinc-900 font-gilroy-medium"> 
                    Analizamos la tendencia central, la dispersión y la forma de la distribución del conjunto de datos, lo visualizamos 
                    también en una gráfica para una visión mas general. 
                    </p>

            </div>
        </div>
    
    {/* Tabla de descripcion */}
        <div className="flex flex-col items-center justify-center w-full mb-10 lg:flex-row">

          {
                df ? 
                
                <Table th={df[1]} td={df[0]} len={df[2]}/>:
                loading ? <>
           <div className=''>
              <div className='py-8 self-auto flex item-center justify-center rounded-xl'>
<div className=''>
              <Spinner
    color="success"
    aria-label="Success spinner example"
  /> 
</div>
 <div className='pl-2 text-xl font-gilroy-bold'>Creando matriz...</div> 
              </div>
              
              </div>

                </>:
              <button onClick={e=> get_describe_df(e)} className="text-zinc-200 font-gilroy-bold bg-green-500 py-2 px-3 rounded-md hover:bg-green-600 duration-300">
                Hacer Análisis Descriptivo
              </button>
                }

           </div>
    

    {/* Pie de la descripcion */}
               <div className="flex flex-col items-center justify-between w-full mb-5 ">
                    <p className="dark:text-white text-m md:text-lg dark:bg-zinc-900 font-gilroy-medium"> 
                    <FroalaEditorView model={analisis} />
                    </p>
              <div className="flex flex-col items-center justify-center w-full mb-2 lg:flex-row">
    
               </div>
            </div>
    
    
    
    
        </div>
      )
}
const mapStateToProps = state =>({
        df : state.projects.df_describe
  })
  
  export default connect(mapStateToProps,{
    describe_df
  })(Exploratorial);