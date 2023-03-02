import Image from 'next/image'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { SiGithub } from 'react-icons/si'
import { TbBrandStackoverflow } from 'react-icons/tb'
import projects from '../constants/projects'

export default function Projects() {
  return (
    <section data-scroll-section className="py-12 min-h-[400vh]">
      <h2 data-scroll data-scroll-speed="0.5">
        Some public projects
      </h2>
      <div data-scroll data-scroll-speed="1.5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-background-secondary rounded-3xl px-10 py-14 flex flex-wrap gap-y-10 gap-x-6 mb-20">
            <figure className="basis-[24rem] flex-grow relative aspect-video m-0">
              <Image
                className="rounded-xl object-contain"
                fill
                src={project.image}
                alt={project.title + ' app'}
              />
            </figure>
            <div className="basis-1/2 flex flex-grow-[2] flex-col">
              <h4 className="text-foreground-secondary leading-none">{project.title}</h4>
              <p className="text-sm mt-0">{project.description}</p>
              <span className=" text-foreground-secondary text-opacity-90 mt-8 mb-3">
                <TbBrandStackoverflow className="align-middle mr-2" />
                {project.technologies.join(', ')}
              </span>

              <div className="flex items-center flex-wrap gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    className="rounded py-2 px-6 border border-solid border-foreground border-opacity-20 hover:border-opacity-80 transition duration-300 no-underline">
                    Visit&nbsp;&nbsp;
                    <BsBoxArrowUpRight />
                  </a>
                )}
                {project.github && (
                  <a href="#">
                    <SiGithub className="align-middle text-xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
