import SmallPaginator from 'components/pagination/SmallPaginator'
import ProjectSqlt from 'components/squeletons/ProjectSqlt';
import { Link } from "react-router-dom";
// Image Example
import inversion from 'assets/images/inversion-a.jpg'

function ProjectsList({
    projects_list,
    count,
    get_project_list_page}) {


     function truncate(str) {
        return str.length > 100 ? str.substring(0, 111) + "..." : str;
    }



  return (
<>
    {
        projects_list ? 
        <>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              
              {/* Gird Item */}
              {projects_list.map((item, index) => (
      <div key={index}>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
        <Link
                to={`/project/${item.slug}`}
                className="hover:underline"
              >
          <img
            className="h-48 w-full object-cover scale-110 transition-all duration-400 hover:scale-100"
            src={item.thumbnail}
            alt=""
          />
          </Link>
        </div>
        <div className="flex-1 bg-white dark:bg-zinc-800 p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <button
                to={`/blog/category/${item.category.id}`}
                  className={`
              ${
                  item.category.name === "Regresión"
                      ? " bg-green-200 text-green-700 hover:bg-green-300 hover:text-green-800 duration-500"
                      : item.category.name === "Series Temporales"
                      ? "bg-blue-200 text-blue-700 hover:bg-blue-400 hover:text-blue-800 duration-500"
                      : item.category.name === "Clustering"
                      ? "bg-rose-100 text-rose-700 duration-500 hover:text-rose-800 hover:bg-rose-300"
                      : item.category.name === "Clasificación Binaria"
                      ? "bg-purple-300 text-purple-700 hover:bg-purple-400 duration-500"
                      : "bg-zinc-300 dark:bg-gray-100 text-gray-700 hover:bg-gray-200 duration-500"
              } 
              inline-flex items-center px-3 py-0.5 rounded-full text-sm font-gilroy-bold`}
              
              >
                {item.category.name}
              </button>
            </p>
            <Link to={`/project/${item.slug}`} className="block mt-2">
              <p className="text-lg font-gilroy-bold text-zinc-900 dark:text-zinc-200">
                {item.title}
              </p>
              <p className="mt-3 text-base text-gray-500 font-gilroy-medium">{truncate(item.description)}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
      
    ))}
    </div>
    <div className='pt-3'>

{
  projects_list.length >6 ?     <SmallPaginator get_blog_list_page={get_project_list_page} blog_list={projects_list} count={count}/>
  :<></>
}


    </div>
    </>: <>    
    {/* Loader Squeleton */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectSqlt/>
        <ProjectSqlt/>
        <ProjectSqlt/>
</div>
</>
    }

</>
  )
}

export default ProjectsList