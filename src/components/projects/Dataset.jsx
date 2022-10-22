import { connect } from "react-redux";
import { useState } from "react";

// Froala 
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
 // Require Editor JS files.
 import 'froala-editor/js/froala_editor.pkgd.min.js';
  
 // Require Editor CSS files.
 import 'froala-editor/css/froala_style.min.css';
 import 'froala-editor/css/froala_editor.pkgd.min.css';
import { get_df } from 'redux/actions/projects';

// Flowbite
import { Spinner } from "flowbite-react/lib/esm/components";


//Icons
import {HiOutlineDocumentDownload} from "react-icons/hi"

import Table from "./Table";

function Dataset({about_df, slug, get_df, df_header, df_corpus, len, dataset_url}) {

  const [loading, setLoading] = useState(false)

  function get_dataframe (e){
    e.preventDefault()
    setLoading(true)
    get_df(slug)
  }
  

  return (
    <>


    <div className="px-4 pb-16 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-2">

    <div className="px-4 pb-2 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-8 lg:pt-2">
    <h2 className="font-sans text-3xl font-bold tracking-tight text-green-500 sm:text-4xl sm:leading-none max-w-lg mb-6">
                 Acerca del Dataset
                </h2>
          <div className="flex flex-col items-center justify-between w-full ">
                <p className="dark:text-white md:text-lg dark:bg-zinc-900 font-gilroy-medium"> 
                Vamos a resolver el problema usando un dataset de Kaggle, este dataset 
                cuenta con {len?<>{len[1]}</>:<>varias</>} características en total, cada una con {len?<>{len[0]}</>:<>varias</>} puntos de datos {len?<>({len[0]} filas y {len[1]} columnas)</>:<></>}
                </p>

        </div>
    </div>


          <div className="flex flex-col items-center justify-center w-full mb-2 lg:flex-row">

          {
                df_header ? 
             
                <Table th={df_header[0]} td={df_corpus} len={len}/>

                :
                loading ? <>
           <div className=''>
              <div className='py-8 self-auto flex item-center justify-center rounded-xl'>
<div className=''>
              <Spinner
    color="success"
    aria-label="Success spinner example"
  /> 
</div>
 <div className='pl-2 text-xl font-gilroy-bold'>Cargando Dataset..</div> 
              </div>
              
              </div>

                </>:
              <button onClick={e=> get_dataframe(e)} className="dark:text-zinc-300 font-gilroy-bold text-zinc-100 bg-green-500 mb-10 py-2 px-3 rounded-md hover:bg-green-600 duration-300">
                Ver Dataset
              </button>
                }

           </div>
           {
                df_header ? 
           <a href={dataset_url} download="dataset" target='_blank'>
                <button className="font-gilroy-bold mb-10 md:ml-8 py-3 px-2 rounded-xl bg-green-600 inline-flex items-center hover:bg-green-700">
                <HiOutlineDocumentDownload className="text-2xl mr-1"/>
                dataset.csv</button>
                </a>
                :<></>}
           <div className="flex flex-col items-center justify-between w-full mb-5 ">
                <p className="dark:text-white text-m md:text-lg dark:bg-zinc-900 font-gilroy-medium"> 
                 <FroalaEditorView model={about_df} />
                </p>
          <div className="flex flex-col items-center justify-center w-full mb-2 lg:flex-row">

           </div>
        </div>




    </div>
    </>
  )
}

const mapStateToProps = state =>({
  df_header : state.projects.df_head,
  df_corpus : state.projects.df_corpus,
  len: state.projects.len 
})

export default connect(mapStateToProps,{
  get_df
})(Dataset);