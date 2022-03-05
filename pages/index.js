import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function index() {
  const [bgColor, setBgColor] = useState('bg-zinc-900')
  const [textColor, setTextColor] = useState('text-white')
  return (
    <div
      className={
        'transition-color h-screen snap-y snap-proximity  overflow-x-hidden scroll-smooth duration-300 ease-out ' +
        bgColor
      }
    >
      <Nav />
      <SectionOne textColor={textColor} />
      {/* <SectionTwo textColor={textColor} /> */}
      <SectionThree
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        textColor={textColor}
      />
      <SectionTwo textColor={textColor} />
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
      id="home"
      className="flex h-screen snap-start flex-col justify-between py-10 px-12 xl:px-24"
    >
      <TypoGraph />
      <div
        className={
          "transition-color flex w-72 flex-col font-['Rubik'] text-3xl duration-300 ease-out " +
          textColor
        }
      >
        <motion.a
          href="#playground"
          className="cursor-pointer"
          variants={menuVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          Playgrounds.
        </motion.a>
        <motion.a
          href="#contribute"
          className="cursor-pointer"
          variants={menuVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Contribute.
        </motion.a>
        <motion.a
          href="#findmore"
          className="cursor-pointer"
          variants={menuVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          custom={0.5}
        >
          Find More.
        </motion.a>
      </div>
    </section>
  )
}

const SectionTwo = ({ textColor }) => {
  return (
    <section
      id="contribute"
      className="mx-12 h-screen snap-start pt-36 xl:mx-24"
    >
      <Header name="Contribute" desc="Take a part!" textColor={textColor} />

      <div className="mt-36 flex flex-col items-center justify-center">
        <h3
          className={
            'transition-color  text-3xl duration-300 ease-out ' + textColor
          }
        >
          Want to join ?
        </h3>
        <h1
          className={
            ' transition-color text-center text-7xl font-bold  leading-snug duration-300 ease-out ' +
            textColor
          }
        >
          Just drop your code{' '}
          <a
            className="cursor-pointer text-red-500 transition-colors duration-200 hover:text-white"
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
            'transition-color pt-3  text-3xl duration-300 ease-out ' + textColor
          }
        >
          Simple isnt it ?
        </h3>

        {/* <button className="mt-16 rounded-full bg-white py-3 px-5 text-xl">
          Github
        </button> */}
      </div>
    </section>
  )
}

const SectionThree = ({ setBgColor, setTextColor, textColor }) => {
  const [ref, inView] = useInView()

  // console.log(entry)

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
    <section id="playground" className="mx-12 snap-start py-36 xl:mx-24">
      <Header name="Playgorund" desc="The most fun!" textColor={textColor} />

      <div ref={ref} className="mx-auto mt-12 mb-24 max-w-5xl">
        {projects.map((project, i) =>
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

  useEffect(() => {
    if (inView) {
      setBgColor('bg-red-400')
      setTextColor('text-zinc-800')
    } else {
      setBgColor('bg-zinc-900')
      setTextColor('text-white')
    }
  }, [inView])

  return (
    <section
      id="findmore"
      className="mx-12 flex min-h-screen snap-start flex-col justify-between pt-36 xl:mx-24"
    >
      <div>
        <Header name="Find more" desc="All Projects" textColor={textColor} />

        <div
          ref={ref}
          className="mx-auto mt-12 mb-24 grid max-w-5xl grid-cols-4 gap-4"
        >
          <div className="col-start-3 col-end-4">
            <h4 className="text-xl font-bold">FrontEnd.</h4>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              React Tailwind
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              NextJS Codebase
            </a>
            <p className="cursor-pointer text-xl">Dashboard Template</p>
          </div>

          <div className="col-start-4 col-end-5">
            <h4 className="text-xl font-bold">BackEnd.</h4>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              Laraver Setup Basic
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              Node Codebase
            </a>
          </div>

          <div className="col-start-3 col-end-4">
            <h4 className="text-xl font-bold">Mobile.</h4>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              Flutter Weather
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              React Native Basic
            </a>
          </div>

          <div className="col-start-4 col-end-5">
            <h4 className="text-xl font-bold">Fullstack.</h4>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              Online Reporting
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              School Library
            </a>
          </div>

          <div className="col-start-3 col-end-4">
            <h4 className="text-xl font-bold">Codebase.</h4>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              NextJS Codebase
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              Node Codebase
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              React Native Basic
            </a>
          </div>

          <div className="col-start-4 col-end-5">
            <h4 className="text-xl font-bold">Other.</h4>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              Minio Playgorund
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-xl"
            >
              CSS Generator
            </a>
          </div>
        </div>
      </div>

      <footer className="mb-5 flex w-full justify-between ">
        <h3 className=" w-72  font-['Rubik'] text-3xl font-medium  leading-none tracking-tighter text-white ">
          moklet
          <br />
          dev.
        </h3>
        <p className="flex items-center text-white opacity-75 ">
          © 2022 mokletDev's Team
        </p>
        {/* <p className="text-white opacity-75">© 2022 mokletDev</p> */}
      </footer>
    </section>
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

const Header = ({ name, desc, textColor }) => {
  return (
    <div className="grid w-full grid-cols-2">
      <h1
        className={
          "transition-color font-['Rubik'] text-5xl font-bold  tracking-wide duration-300 ease-out " +
          textColor
        }
      >
        {name}.
      </h1>
      <h1
        className={
          "transition-color flex items-end font-['Rubik'] text-2xl  tracking-wide duration-300 ease-out " +
          textColor
        }
      >
        <span className="text-red-500">//</span>
        <span className="opacity-80">{desc}!</span>
      </h1>
    </div>
  )
}

const ProjectRight = ({ project, textColor }) => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-24 text-right">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="col-start-1 col-end-8 row-start-1 row-end-4 h-96 rounded-lg bg-gray-300"
      />
      <div className="col-span-5 row-span-1 flex flex-col justify-end">
        <h3
          className={
            "transition-color mt-3 font-['Rubik'] text-3xl font-bold tracking-wide duration-300 ease-out  " +
            textColor
          }
        >
          {project.name}.
        </h3>
        <h3
          className={
            "transition-color font-['Rubik'] text-2xl font-bold tracking-wide opacity-80 duration-300 ease-out  " +
            textColor
          }
        >
          {project.author}
        </h3>
      </div>
      <div className="z-10 col-start-7 col-end-13 row-start-2 row-end-3 rounded-lg bg-white p-3">
        <p
          className={
            'transition-color text-lg duration-300 ease-out  ' + textColor
          }
        >
          {project.desc}
        </p>
      </div>
      <div className="col-span-5 row-span-1">
        <div className="flex justify-end">
          {project.tags.map((tag) => (
            <p
              className={
                "transition-color ml-4 font-['Rubik'] text-xl font-medium tracking-wide opacity-80 duration-300 ease-out  " +
                textColor
              }
            >
              {tag}
            </p>
          ))}
        </div>
        <button className="mt-2 rounded-full bg-white py-2 px-5 text-xl">
          Github
        </button>
      </div>
    </div>
  )
}

const ProjectLeft = ({ project, textColor }) => {
  return (
    <div className="grid grid-cols-12 gap-4 pt-24 text-left">
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="col-start-6 col-end-13 row-start-1 row-end-4 h-96 rounded-lg bg-gray-300"
      />
      <div className="col-span-5 row-span-1 flex flex-col justify-end">
        <h3
          className={
            "transition-color mt-3 font-['Rubik'] text-3xl font-bold tracking-wide duration-300 ease-out  " +
            textColor
          }
        >
          {project.name}.
        </h3>
        <h3
          className={
            "transition-color font-['Rubik'] text-2xl font-bold tracking-wide opacity-80 duration-300 ease-out  " +
            textColor
          }
        >
          {project.author}
        </h3>
      </div>
      <div className="z-10 col-start-1 col-end-7 row-start-2 row-end-3 rounded-lg bg-white p-3">
        <p
          className={
            'transition-color text-lg duration-300 ease-out  ' + textColor
          }
        >
          {project.desc}
        </p>
      </div>
      <div className="col-span-5 row-span-1">
        <div className="flex ">
          {project.tags.map((tag) => (
            <p
              className={
                "transition-color mr-4 font-['Rubik'] text-xl font-medium tracking-wide opacity-80 duration-300 ease-out  " +
                textColor
              }
            >
              {tag}
            </p>
          ))}
        </div>
        <button className="mt-2 rounded-full bg-white py-2 px-5 text-xl">
          Github
        </button>
      </div>
    </div>
  )
}

const TypoGraph = () => {
  return (
    <motion.div
      animate={{ y: '10vh', rotateZ: -12 }}
      className="mx-auto transform font-['Rubik'] text-10xl font-medium leading-none tracking-tight"
    >
      <div className="flex w-80 justify-between">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="text-red-500"
        >
          M
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-amber-400"
        >
          0
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="text-red-500"
        >
          K
        </motion.h1>
      </div>
      <div className="flex w-80 justify-between ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="overflow-hidden text-amber-400"
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-500"
        >
          E
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="text-amber-400"
        >
          T
        </motion.h1>
      </div>
      <div className="flex w-80 justify-between">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-red-500"
        >
          D
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 180 }}
          transition={{ delay: 1.2 }}
          className=" text-amber-400"
        >
          E
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-red-500"
        >
          V
        </motion.h1>
      </div>
    </motion.div>
  )
}

const projects = [
  {
    name: 'Minio Playgorund',
    author: 'Hasimy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex unde, corrupti placeat distinctio delectus, deleniti doloremque sint hic aliquam reprehenderit',
    github: '/',
    demo: '/',
    tags: ['Node', 'BackEnd'],
  },
  {
    name: 'Minio Playgorund',
    author: 'Hasimy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex unde, corrupti placeat distinctio delectus, deleniti doloremque sint hic aliquam reprehenderit',
    github: '/',
    demo: '/',
    tags: ['Node', 'BackEnd'],
  },
  {
    name: 'Minio Playgorund',
    author: 'Hasimy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex unde, corrupti placeat distinctio delectus, deleniti doloremque sint hic aliquam reprehenderit',
    github: '/',
    demo: '/',
    tags: ['Node', 'BackEnd'],
  },
  {
    name: 'Minio Playgorund',
    author: 'Hasimy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex unde, corrupti placeat distinctio delectus, deleniti doloremque sint hic aliquam reprehenderit',
    github: '/',
    demo: '/',
    tags: ['Node', 'BackEnd'],
  },
  {
    name: 'Minio Playgorund',
    author: 'Hasimy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex unde, corrupti placeat distinctio delectus, deleniti doloremque sint hic aliquam reprehenderit',
    github: '/',
    demo: '/',
    tags: ['Node', 'BackEnd'],
  },
  {
    name: 'Minio Playgorund',
    author: 'Hasimy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex unde, corrupti placeat distinctio delectus, deleniti doloremque sint hic aliquam reprehenderit',
    github: '/',
    demo: '/',
    tags: ['Node', 'BackEnd'],
  },
]

const Nav = () => {
  return (
    <nav className="fixed z-50 w-screen px-12 pt-12 xl:px-24">
      <div className="flex justify-between">
        <a
          href="/"
          className="cursor-pointer bg-white px-2 py-2 font-['Rubik'] text-5xl font-bold tracking-tighter text-zinc-800"
        >
          dev.
        </a>
      </div>
    </nav>
  )
}
