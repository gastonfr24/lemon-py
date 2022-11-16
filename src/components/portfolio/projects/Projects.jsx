// React y React Redux
import { connect } from "react-redux";
import { useEffect } from "react";
// llamado a la API
import { get_project_list_page, get_projects_list } from "redux/actions/projects";
import ProjectsList from './ProjectsList';


function Projects({
  // API calls
  get_projects_list,
  get_project_list_page,
  // From state
  projects_list,
  count
  }) {



  useEffect(() => {
    get_projects_list()
    }, [])  
  return (
    <div name='work' className='w-full  text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-zinc-800 dark:text-gray-300 border-[#4db5ff]'>
            Work
          </p>
          <p className='py-6 dark:text-white text-zinc-800'> Aquí encontrarás varios proyectos que he realizado de Machine Learning y Deep Learning. Cada proyecto llevatanto un análisis exploratorio
           como también modelado(regresión,
          clasificación, clustering o series temporales)</p>
        </div>

{/* container for projects */}
      <ProjectsList projects_list={projects_list && projects_list} 

           cout={count && count} get_projects_list_page={get_project_list_page}/>
      </div>
    </div>
  );
};


const mapStateToProps = state =>({
  projects_list : state.projects.projects_list,
  count: state.projects.count
})
export default connect(mapStateToProps,{
  get_projects_list,
  get_project_list_page
})(Projects)