const ListTag = ({ projects, tag, accent }) => {
  return (
    <div className={'col-span-1'}>
      <div className="mb-2">
        <h4 className="text-xl font-bold leading-none tracking-tighter">
          {tag}.
        </h4>
        <div className={'w-12 border-b-2 ' + accent} />
      </div>

      {projects?.map(({ name, link }) => (
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-base hover:text-red-500"
          >
            {name}
          </a>
        </div>
      ))}
    </div>
  )
}

export default ListTag
