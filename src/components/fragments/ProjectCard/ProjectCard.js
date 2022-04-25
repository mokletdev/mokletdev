import Button from '@elements/Button'
import Github from '@assets/svg/Github'
import ExternalLink from '@assets/svg/ExternalLink'

const Project = ({ project }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-b bg-zinc-800 p-4  md:rounded md:p-8 ">
      <div className="flex flex-col gap-2">
        <h5 className="text-2xl font-bold tracking-wide text-white md:text-2xl ">
          {project.name}
        </h5>
        <div className="h-1 w-full bg-red-500" />
        <p className="my-2 text-base text-zinc-400 md:text-lg ">
          {project.description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wide text-zinc-600 md:text-sm">
          {project?.topics?.map((tag) => (
            <p>{tag}</p>
          ))}
        </div>
        <div className="flex gap-4">
          <Button
            href={project.url}
            className="bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
          >
            <ExternalLink className="w-6" />
          </Button>
          {!!project.html_url && (
            <Button
              href={project.html_url}
              className="bg-zinc-700 text-zinc-400 hover:-translate-y-1 hover:bg-zinc-600 hover:text-white"
            >
              <Github className="w-6" />
            </Button>
          )}
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
