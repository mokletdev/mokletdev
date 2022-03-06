import { MENUNAV } from '../constant/menu'

const Nav = ({ textColor }) => {
  return (
    <nav className="fixed z-50 w-screen px-6 pt-6 md:px-12 md:pt-12 xl:px-24">
      <div
        className={
          (textColor === 'text-white' ? 'bg-transparent' : 'bg-white') +
          ' transition-color flex justify-between duration-300 ease-out'
        }
      >
        <a
          href="/"
          className={
            (textColor === 'text-white' ? 'bg-white' : 'bg-zinc-800') +
            ' transition-color cursor-pointer px-2 py-2 text-xl font-bold tracking-tighter duration-300 ease-out hover:bg-red-500 md:text-5xl ' +
            (textColor === 'text-white' ? 'text-zinc-800' : 'text-white')
          }
        >
          <h1>dev.</h1>
        </a>
        <div
          className={
            'transition-color mr-2 flex items-center text-zinc-900 duration-300 ease-out ' +
            (textColor === 'text-white' && 'hidden')
          }
        >
          {MENUNAV.map(({ name, href, props, classes }) => (
            <a
              href={href}
              className={
                'font mr-5 text-lg font-bold hover:text-red-400 md:text-xl ' +
                classes
              }
              {...props}
            >
              {name}.
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav
