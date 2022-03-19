import { motion } from 'framer-motion'
import { MENU } from '@configs/menu'
import Typograph from '@fragments/Typograph'

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
      <Typograph textColor={textColor} />
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

export default SectionOne
