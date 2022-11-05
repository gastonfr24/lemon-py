// Froala 
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
 // Require Editor JS files.
 import 'froala-editor/js/froala_editor.pkgd.min.js';
  
 // Require Editor CSS files.
 import 'froala-editor/css/froala_style.min.css';
 import 'froala-editor/css/froala_editor.pkgd.min.css';

 import {
  FaGithub,
} from 'react-icons/fa';

function Problem({problem, url}) {
  return (
    <div className="px-4 pb-16 pt-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20 lg:pt-2">
    <h2 className="font-girloy-medium text-3xl font-bold tracking-tight text-green-500 sm:text-4xl sm:leading-none max-w-lg mb-2">
                 Problema a resolver
                </h2>
                
                <a href={url}><button className='bg-zinc-300 dark:bg-zinc-800 py-1 px-2 font-gilroy-semibold mb-10 rounded-md inline-flex items-center
                 hover:bg-indigo-500 dark:hover:bg-indigo-800 duration-300'>
                <FaGithub className='mr-1 text-xl'/>
                  Ir a Github</button></a>

          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                <p className="dark:text-white text-m md:text-lg dark:bg-zinc-900 font-gilroy-medium"> 
                 <FroalaEditorView model={problem} />
                </p>
           </div>
        </div>
  )
}

export default Problem