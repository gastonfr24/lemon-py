import FullWidthLayout from "hocs/layouts/FullWidthLayout";

import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

// API request
import { get_project } from "redux/actions/projects"

// Froala 
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView'
 // Require Editor JS files.
 import 'froala-editor/js/froala_editor.pkgd.min.js';
  
 // Require Editor CSS files.
 import 'froala-editor/css/froala_style.min.css';
 import 'froala-editor/css/froala_editor.pkgd.min.css';

import 'assets/styles/froala.css'

// Flowbite
import { Tabs } from "flowbite-react/lib/esm/components";

// Components
import Problem from "components/projects/Problem";
import Dataset from "components/projects/Dataset";
import Solution from "components/projects/Solution";
import Exploratorial from "components/projects/Exploratorial";
import Descriptive from "components/projects/Descriptive";
import Model from "components/projects/Model";



function Project({get_project, project}) {

    const params = useParams()
    const slug = params.slug
    useEffect(()=>{
        get_project(slug)
    },[])

    return (
<FullWidthLayout>
{
    project ? <>
    

<div className="bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-gilroy-bold text-gray-900 dark:text-zinc-200 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {project.title}
          </p>
          <p className="max-w-xl mt-3 mx-auto text-lg text-gray-500 dark:text-zinc-400">
            {project.description}
          </p>
        </div>
      </div>
    </div>



<div class="w-full my-20 z-50 sticky  rounded-3xl px-6 bg-white dark:bg-zinc-900">
{/* Tabla de todo */}
<Tabs.Group
  aria-label="Default tabs"
  style="default"
>
  {/* Problema a Resolver */}
  <Tabs.Item
    active={true}
    title="Problema a resolver"
  >
  <Problem problem={project.problem} url={project.repository}/>


  {/* Dataset */}
  </Tabs.Item>
  <Tabs.Item title="Dataset">
<Dataset about_df={project.dataset_info} slug={slug} dataset_url={project.dataset}/>


  {/* Análisis */}
  </Tabs.Item>
  <Tabs.Item title="Análisis Descriptivo">
<Exploratorial analisis={project.content} slug={slug}/>

  </Tabs.Item>
  <Tabs.Item title="Análisis Exploratorio">
    <Descriptive content={project.solution}/>
  </Tabs.Item>

  {/* Modelado */}
  <Tabs.Item title="Selección de Modelo">
    <Model content={project.modelado}/>
  </Tabs.Item>
  <Tabs.Item
    disabled={true}
    title="Probar Modelo"
  >
    Modelo con muchas características
  </Tabs.Item>
</Tabs.Group>

          </div>

</>:
<>Loading...</>
}
    </FullWidthLayout>
  )
}


const mapStateToProps = state =>({
    project: state.projects.project
})

export default connect(mapStateToProps,{
    get_project
})(Project);