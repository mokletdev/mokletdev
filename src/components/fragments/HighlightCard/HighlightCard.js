import { motion } from 'framer-motion'
import Button from '@elements/Button'
import Github from '@assets/svg/Github'
import ExternalLink from '@assets/svg/ExternalLink'
import { useEffect, useState } from 'react'

const Project = ({ project, index }) => {
  const [isLeft, setIsLeft] = useState(false)
  const [imageClass, setImageClass] = useState('')
  const [cardClass, setCardClass] = useState('')

  useEffect(() => {
    console.log(index)
    if (index % 2 === 0) {
      setImageClass(' col-start-1 col-end-9 row-start-1')
      setCardClass(' col-start-7 col-end-13 row-start-1 md:pb-12')
    } else {
      setImageClass(' col-start-5 col-end-13 row-start-1')
      setCardClass(' col-start-1 col-end-7 row-start-1 md:pb-12')
    }
  }, [index])

  return (
    <div className="mt-4 grid-cols-12 md:grid">
      <div className={'overflow-hidden rounded-t md:rounded ' + imageClass}>
        <img src={project?.image?.src} className="w-full" />
      </div>
      <div className={'flex items-end ' + cardClass}>
        <div className="flex w-full flex-col gap-2 rounded-b bg-white p-4 ring-red-500 md:rounded md:p-8 md:ring-2">
          <p className="text-lg font-bold tracking-wide text-red-500 md:text-2xl ">
            <a
              href={project?.contributor[0]?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project?.contributor[0]?.name}
            </a>
          </p>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-wide text-zinc-800 md:text-4xl ">
              {' '}
              {project.name}
            </h3>

            <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-zinc-400 md:text-sm">
              {project?.topics?.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
          </div>
          <p className="my-2 text-base text-zinc-600 md:text-lg ">
            {project.description}
          </p>
          <div className="flex gap-4">
            <Button
              href={project.url}
              className="flex items-center bg-zinc-800 text-white hover:-translate-y-1 hover:bg-zinc-700 "
            >
              <ExternalLink className="mr-2 w-6" />
              Live
            </Button>
            {!!project.html_url && (
              <Button
                href={project.html_url}
                className="flex items-center bg-zinc-800 text-white hover:-translate-y-1 hover:bg-zinc-700"
              >
                <Github className="mr-2 w-6" />
                Source
              </Button>
            )}
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
