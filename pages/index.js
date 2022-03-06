import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Navbar from '../components/elements/Navbar'
import Header from '../components/elements/Header'
import { PROJECTS, CATEGORIZED_PROJECTS } from '../components/constant/projects'
import { MENU } from '../components/constant/menu'
import TypoGraph from '../components/elements/Typograph'
// import Image from 'next/image'

export default function index() {
  const [bgColor, setBgColor] = useState('bg-zinc-900')
  const [textColor, setTextColor] = useState('text-white')
  return (
    <div
      className={
        'transition-color h-screen overflow-x-hidden scroll-smooth  duration-300 ease-out md:snap-y md:snap-proximity ' +
        bgColor
      }
    >
      <Navbar textColor={textColor} />
      <SectionOne textColor={textColor} />
      {/* <SectionTwo textColor={textColor} /> */}
      <SectionThree
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        textColor={textColor}
      />
      <SectionTwo textColor={textColor} bgColor={bgColor} />
      <SectionFour
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        textColor={textColor}
      />
    </div>
  )
}

const menuVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i + 2,
    },
  }),
  hover: {
    letterSpacing: '0.5rem',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      type: 'spring',
      bounce: 0,
    },
  },
}

const SectionOne = ({ textColor }) => {
  return (
    <section
      id="top"
      className="relative flex h-screen snap-start flex-col justify-between py-24 px-6 md:py-12 md:px-12 xl:px-24"
    >
      <motion.div
        className="absolute right-20 bottom-12 hidden h-1/3 border-r-2 border-white md:block"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
      />
      {/* <div className="absolute left-24 bottom-1/2 h-1/3 translate-y-1/2 border-r-2 border-white" /> */}
      <div className="z-50 hidden justify-end md:flex">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 3 }}
          href="https://github.com/mokletdev"
          target="_blank"
          rel="noopener noreferrer"
          className={
            'transition-color text-xl duration-300 ease-out hover:text-red-500  ' +
            textColor
          }
        >
          github.com/mokletdev
        </motion.a>
      </div>
      <TypoGraph />
      <div
        className={
          'transition-color flex w-72 flex-col text-3xl duration-300 ease-out ' +
          textColor
        }
      >
        {MENU.map(({ name, href, delay }) => (
          <motion.a
            href={href}
            className="cursor-pointer"
            variants={menuVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            custom={delay}
          >
            {name}.
          </motion.a>
        ))}
      </div>
    </section>
  )
}

const SectionTwo = ({ textColor, bgColor }) => {
  return (
    <section
      id="contribute"
      className="relative mx-6  h-screen snap-start pt-36 md:mx-12 xl:mx-24"
    >
      <Header name="Contribute" desc="Take a part" textColor={textColor} />

      <div className="mt-36 flex flex-col items-center justify-center">
        <h3
          className={
            'transition-color text-xl duration-300 ease-out md:text-3xl ' +
            textColor
          }
        >
          Want to join ?
        </h3>
        <h1
          className={
            ' transition-color my-10 text-center text-4xl font-bold leading-snug duration-300  ease-out md:my-5 md:text-7xl ' +
            textColor
          }
        >
          Just drop your code{' '}
          <a
            className={
              'cursor-pointer border-b-4 border-red-500 transition-colors duration-300 hover:text-red-500 ' +
              textColor
            }
            href="https://github.com/mokletdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .{/* <br /> Join us now! */}
        </h1>
        <h3
          className={
            'transition-color pt-3  text-xl duration-300 ease-out md:text-3xl ' +
            textColor
          }
        >
          Simple isnt it ?
        </h3>

        {/* <button className="mt-16 rounded-full bg-white py-3 px-5 text-xl">
          Github
        </button> */}
      </div>

      <div className="absolute bottom-0 left-20 -rotate-12 scale-125 md:left-auto md:right-20 md:scale-150">
        <svg
          className={
            'h-96 w-96 fill-current text-white transition-colors duration-300 ease-out ' +
            (bgColor === 'bg-red-300' ? 'opacity-0' : 'opacity-20 ')
          }
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
          />
        </svg>
      </div>
    </section>
  )
}

const SectionThree = ({ setBgColor, setTextColor, textColor }) => {
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      setBgColor('bg-amber-400')
      setTextColor('text-zinc-800')
    } else {
      setBgColor('bg-zinc-900')
      setTextColor('text-white')
    }
  }, [inView])

  return (
    <section
      id="playground"
      className="mx-6 snap-start  py-36 md:mx-12 xl:mx-24"
    >
      <Header name="Playgorund" desc="The most fun" textColor={textColor} />

      <div ref={ref} className="mx-auto mt-12 mb-24 max-w-5xl">
        {PROJECTS.map((project, i) =>
          i % 2 === 0 ? (
            <ProjectRight project={project} key={i} textColor={textColor} />
          ) : (
            <ProjectLeft project={project} key={i} textColor={textColor} />
          )
        )}
      </div>
    </section>
  )
}

const SectionFour = ({ setBgColor, setTextColor, textColor }) => {
  const [ref, inView] = useInView()
  const [accent, setAccent] = useState(['border-red-500', 'text-red-500'])

  useEffect(() => {
    if (inView) {
      setBgColor('bg-red-300')
      setTextColor('text-zinc-800')
      setAccent(['border-white', 'text-white'])
    } else {
      setBgColor('bg-zinc-900')
      setTextColor('text-white')
      setAccent(['border-red-500', 'text-red-500'])
    }
  }, [inView])

  return (
    <section
      id="findmore"
      className="mx-6 flex  min-h-screen snap-start flex-col justify-between pt-36 md:mx-12 xl:mx-24"
    >
      <div>
        <Header
          name="Find more"
          desc="All Projects"
          textColor={textColor}
          accentColor={accent}
        />

        <div
          ref={ref}
          className="mx-auto mt-12 mb-24 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {CATEGORIZED_PROJECTS.map((v, i) => (
            <ListTag
              key={i}
              i={i}
              projects={v.projects}
              tag={v.tag}
              accent={accent[0]}
            />
          ))}
        </div>
      </div>

      <footer className="mb-5 flex w-full justify-between ">
        <h3 className=" w-72  text-3xl font-medium  leading-none tracking-tighter text-white ">
          moklet
          <br />
          dev.
        </h3>
        <p className="flex w-full items-center text-white opacity-75 md:w-auto ">
          © 2022 mokletDev's Team
        </p>
        {/* <p className="text-white opacity-75">© 2022 mokletDev</p> */}
      </footer>
    </section>
  )
}

const ListTag = ({ projects, tag, i, accent }) => {
  return (
    <div
      className={
        'col-span-1 ' +
        (i % 2 === 0
          ? ' md:col-start-3 md:col-end-4'
          : ' md:col-start-4 md:col-end-5')
      }
    >
      <div className="mb-2">
        <h4 className="text-xl font-bold leading-none tracking-tighter">
          {tag}.
        </h4>
        <div className={'w-12 border-b-2 ' + accent} />
      </div>

      {projects.map(({ name, link }) => (
        <div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-xl hover:text-red-500"
          >
            {name}
          </a>
        </div>
      ))}
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

const ProjectRight = ({ project, textColor }) => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-12 text-left md:pt-24 md:text-right">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="relative col-start-1 col-end-13 row-start-1 row-end-4 h-96 overflow-hidden rounded-sm bg-gray-300 md:col-end-8"
      >
        <img
          src={project.img.src}
          alt={project.name}
          className="h-full w-full "
        />
        {/* <Image
          src={project.img}
          alt={project.name}
          width={project.img.width}
          height={project.img.height}
          // className="h-full w-full"
        /> */}
      </motion.div>
      <div className="z-10 col-start-1 col-end-13 row-start-1 row-end-4 bg-gray-900 bg-opacity-20 md:hidden" />
      <div className="z-10 col-start-1 col-end-13 row-start-1 mx-4 flex flex-col justify-end md:col-start-8 md:mx-0">
        <h3 className=" mt-3 text-xl font-bold tracking-wide text-white md:text-3xl md:text-zinc-800 ">
          {project.name}.
        </h3>
        <h3 className="text-lg font-medium tracking-wide text-red-500 md:text-2xl md:font-bold  ">
          {project.author}
        </h3>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-2 row-end-3 mx-4 flex items-center rounded-sm  md:col-start-7 md:mx-0 md:bg-white md:p-3">
        <p className="text-base text-white md:text-lg md:text-zinc-800 ">
          {project.desc}
        </p>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-3 mx-4 md:col-start-8 md:mx-0">
        <div className="hidden md:flex md:justify-end">
          {project.tags.map((tag) => (
            <p
              className={
                'transition-color mr-4 text-xl font-medium tracking-wide opacity-80 duration-300 ease-out md:mr-0 md:ml-4  ' +
                textColor
              }
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex md:justify-end">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="  cursor-pointer md:mt-2"
          >
            <svg
              className=" h-8 w-8 fill-current  text-white transition-colors  duration-300 ease-out hover:text-red-500 md:text-zinc-800 "
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
              />
            </svg>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" ml-4 cursor-pointer md:mt-2"
          >
            <svg
              className=" h-8 w-8  text-white transition-colors  duration-300 ease-out hover:text-red-500 md:text-zinc-800 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
        {/* <button className="rounded-full bg-white py-2 px-5 text-xl md:mt-2">
          Github
        </button> */}
      </div>
    </div>
  )
}

const ProjectLeft = ({ project, textColor }) => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-12 text-left  md:pt-24">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="relative col-start-1 col-end-13 row-start-1 row-end-4 h-96 overflow-hidden rounded-sm bg-gray-300 md:col-start-6"
      >
        <img
          src={project.img.src}
          alt={project.name}
          className="h-full w-full "
        />
      </motion.div>
      <div className="z-10 col-start-1 col-end-13 row-start-1 row-end-4 bg-gray-900 bg-opacity-20 md:hidden" />
      <div className="z-10 col-start-1 col-end-13 row-start-1 mx-4 flex flex-col justify-end md:col-end-6 md:mx-0">
        <h3 className=" mt-3 text-xl font-bold tracking-wide text-white md:text-3xl md:text-zinc-800 ">
          {project.name}.
        </h3>
        <h3 className="text-lg font-medium tracking-wide text-red-500 md:text-2xl md:font-bold  ">
          {project.author}
        </h3>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-2 row-end-3 mx-4 flex items-center rounded-sm md:col-end-7 md:mx-0 md:bg-white md:p-3">
        <p className="text-base text-white md:text-lg md:text-zinc-800 ">
          {project.desc}
        </p>
      </div>
      <div className="z-10 col-start-1 col-end-13 row-start-3 mx-4 md:col-end-6 md:mx-0">
        <div className="hidden md:flex ">
          {project.tags.map((tag) => (
            <p
              className={
                'transition-color mr-4 text-xl font-medium tracking-wide opacity-80 duration-300 ease-out  ' +
                textColor
              }
            >
              {tag}
            </p>
          ))}
        </div>
        <div className="flex">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="  cursor-pointer md:mt-2"
          >
            <svg
              className=" h-8 w-8 fill-current  text-white transition-colors  duration-300 ease-out hover:text-red-500 md:text-zinc-800 "
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
              />
            </svg>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" ml-4 cursor-pointer md:mt-2"
          >
            <svg
              className=" h-8 w-8  text-white transition-colors  duration-300 ease-out hover:text-red-500 md:text-zinc-800 "
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
