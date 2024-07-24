import { Link } from 'react-router-dom';
import { projects } from '../constants';
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className="max-container">
    <h1 className="head-text">
      My<span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className="mt-5flex flex-col gap-3 text-slate-500">
        <p>
        Embarking on diverse learning paths, I've undertaken various 
        projects to acquire a spectrum of skills. Each project is a 
        chapter in my learning journey, providing hands-on experience 
        with different technologies. From React and Java to other tools, 
        these projects represent my commitment to continuous growth and 
        versatility in the ever-evolving tech landscape.

         </p>
         </div>
        
        <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
           <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div>
                <img 
                src={project.iconUrl}
                alt="Project Icon"
                className="w-1/2 h-1/2 object-contain"/>
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                  <h4 className="text-2xl font-poppins font-semibold">
                    {project.name}
                    </h4>
                    <p>
                      {project.description}
                      </p>
                      <div>
                        <Link 
                        to={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600"
                        >
                          Live Link
                          </Link>
                      </div>
              </div>
              </div>
        ))}
        </div>
    <hr className="border-slate-200" />
    <CTA />
  </section>
  )
}

export default Projects