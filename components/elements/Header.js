const Header = ({
  name,
  desc,
  textColor,
  accentColor = ['border-red-500', 'text-red-500'],
}) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2">
      <div>
        <h1
          className={
            'transition-color text-3xl font-bold tracking-wide  duration-300 ease-out md:text-5xl ' +
            textColor
          }
        >
          {name}.
        </h1>
        <div className={'w-48 border-b-4 ' + accentColor[0]} />
      </div>
      <h1
        className={
          'transition-color flex items-end text-xl tracking-wide  duration-300 ease-out md:text-2xl ' +
          textColor
        }
      >
        <span className={accentColor[1]}>//</span>
        <span className="opacity-80">{desc} !</span>
      </h1>
    </div>
  )
}

export default Header
