import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { search_project } from "redux/actions/projects";
import ProjectsList from "components/portfolio/projects/ProjectsList";

const Search =({search_project, projects}) =>{


    const params = useParams()
    const term = params.term

    useEffect(() => {
   
        search_project(term)

    }, [])
    

    return(
        <FullWidthLayout>
     <div name='work' className='w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-gilroy-semibold inline dark:text-gray-300 text-zinc-800'>
            <span className="border-b-4 border-[#4db5ff]">Resultados</span> de la búsqueda
          </p>
        </div>

{/* container for projects */}
      <ProjectsList projects_list={projects} />
      </div>
    </div>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    projects: state.projects.filtered_projects
})

export default connect(mapStateToProps,{
    search_project
})(Search)