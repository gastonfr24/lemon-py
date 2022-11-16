import { connect } from "react-redux";
import { useState } from "react";


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


function LinkModel({linkmodel, img}) {



    return (

        <div className="px-4 pb-16 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-2">

        <div className="px-4 pb-2 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-8 lg:pt-2">
        <h2 className="font-gilroy-medium text-3xl font-bold tracking-tight text-green-500 sm:text-3xl sm:leading-none max-w-lg mb-6 ">
                     Modelo interactivo
                    </h2>
              <div className="flex flex-col items-center justify-between w-full ">
                    <p className="dark:text-white md:text-lg dark:bg-zinc-900 font-gilroy-medium"> 
Puedes probar el modelo <a href={`/${linkmodel}`} className="text-green-500">aquí</a>.
                    </p>

                    <img class="object-cover h-48 max-w-screen mt-5" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png" alt="" />

            </div>
        </div>
        </div>
      )
}
const mapStateToProps = state =>({

  })
  
export default LinkModel;