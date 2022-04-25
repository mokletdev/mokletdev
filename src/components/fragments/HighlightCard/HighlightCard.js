import { motion } from 'framer-motion'
import Button from '@elements/Button'
import Github from '@assets/svg/Github'
import ExternalLink from '@assets/svg/ExternalLink'
import { useEffect, useState } from 'react'

const Project = ({ project, index }) => {
  const [isLeft, setIsLeft] = useState(false)
  const [imageClass, setImageClass] = useState('')
  const [cardClass, setCardClass] = useState('')
  const [itemClass, setItemClass] = useState('')

  useEffect(() => {
    if (index % 2 === 0) {
      setImageClass(' col-start-1 col-end-8 row-start-1')
      setCardClass(' col-start-7 col-end-13 row-start-1 md:text-right')
      setItemClass(
        ' col-span-5 col-start-2  md:flex flex-col items-end md:pl-4'
      )
    } else {
      setImageClass(' col-start-6 col-end-13 row-start-1')
      setCardClass(' col-start-1 col-end-7 row-start-1')
      setItemClass(' col-span-5 col-start-1 md:pr-4')
    }
  }, [index])

  return (
    <div className="mt-8 grid-cols-12 md:grid">
      <div
        className={
          'defaultTransitionAll overflow-hidden rounded-t md:rounded md:hover:-translate-y-1 ' +
          imageClass
        }
      >
        <img src={project?.image?.src} className="w-full" />
      </div>
      <div className={'flex items-center ' + cardClass}>
        <div className="w-full grid-cols-6 gap-2 rounded-b border-t-2 border-red-500 bg-white p-4 md:grid md:border-t-0 md:bg-transparent md:p-0">
          <div className={itemClass}>
            <h3 className="text-2xl font-bold tracking-wide text-zinc-800 md:text-4xl ">
              {project.name}
            </h3>
            <p className="text-lg font-bold tracking-wide text-red-500 md:text-2xl ">
              <a
                href={project?.contributor[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project?.contributor[0]?.name}
              </a>
            </p>
          </div>
          <p className="z-10 col-span-6 my-2 rounded text-base text-zinc-600 md:bg-white md:p-4 md:text-lg ">
            {project.description}
          </p>
          <div className={itemClass}>
            <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-zinc-600 md:text-sm">
              {project?.topics?.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
            <div className="flex gap-4">
              <Button
                href={project.html_url}
                type="text"
                className="text-zinc-800 hover:text-red-500"
              >
                <Github className="w-6 md:w-10" />
              </Button>
              {!!project.url && (
                <Button
                  href={project.url}
                  type="text"
                  className="text-zinc-800 hover:text-red-500"
                >
                  <ExternalLink className="w-6 md:w-10" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const cardVariants = {
  hover: {
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      type: 'spring',
      bounce: 0,
    },
  },
}

export default Project
