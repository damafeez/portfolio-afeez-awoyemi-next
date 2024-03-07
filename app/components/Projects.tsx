import Image from 'next/image'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { SiGithub } from 'react-icons/si'
import { TbBrandStackoverflow } from 'react-icons/tb'
import projects from '../../constants/projects'

export default function Projects() {
  return (
    <section data-scroll-section className="py-12">
      <h2 data-scroll data-scroll-speed="0.5">
        Some public projects
      </h2>
      <div data-scroll data-scroll-speed="1.5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="mb-20 flex flex-wrap gap-y-10 gap-x-6 rounded-3xl bg-background-secondary px-10 py-14">
            <figure className="relative m-0 aspect-video flex-grow basis-[24rem]">
              <Image
                className="rounded-xl object-contain"
                fill
                src={project.image}
                alt={project.title + ' app'}
              />
            </figure>
            <div className="flex flex-grow-[2] basis-1/2 flex-col">
              <h4 className="leading-none text-foreground-secondary">{project.title}</h4>
              <p className="mt-0 mb-6 max-w-xl text-sm">{project.description}</p>
              <span className="mt-auto mb-3 text-foreground-secondary text-opacity-90">
                <TbBrandStackoverflow className="mr-2 align-middle" />
                {project.technologies.join(', ')}
              </span>

              <div className="flex flex-wrap items-center gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-solid border-foreground border-opacity-20 py-2 px-6 no-underline transition duration-300 hover:border-opacity-80">
                    Visit&nbsp;&nbsp;
                    <BsBoxArrowUpRight />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
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
