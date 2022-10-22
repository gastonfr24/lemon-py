import { connect } from "react-redux";



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

function Model({content}) {
  return (
    <div className="px-4 pb-16 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-2">
    <h2 className="font-sans text-3xl font-bold tracking-tight text-green-500 sm:text-4xl sm:leading-none max-w-lg mb-6">
                 Selección del Modelo
                </h2>
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <p className="dark:text-white text-m md:text-m dark:bg-zinc-900 font-gilroy-medium"> 
                 <FroalaEditorView model={content} />
                </p>
           </div>
        </div>
  )
}

export default Model