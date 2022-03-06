import { motion } from 'framer-motion'

const containerVariant = {
  visible: {
    y: '2vh',
    rotateZ: -12,
  },
  hidden: {
    y: '-8vh',
    rotateZ: 0,
  },
}

const variant1 = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
    },
  },
  // hover: {
  //   scale: 1.2,
  //   transition: { delay: 0 },
  // },
}

const TypoGraph = () => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={containerVariant}
      className="mx-auto mt-12 text-9xl font-medium leading-none tracking-tight md:mt-0 md:text-10xl"
    >
      <div className="flex w-60 justify-between md:w-80">
        <motion.h1 variants={variant1} className="text-red-500  ">
          M
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-amber-400 "
        >
          0
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="text-red-500  "
        >
          K
        </motion.h1>
      </div>
      <div className="flex w-60 justify-between md:w-80">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="overflow-hidden text-amber-400 "
        >
          L
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-red-500  "
        >
          E
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="text-amber-400 "
        >
          T
        </motion.h1>
      </div>
      <div className="flex w-60 justify-between md:w-80">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-red-500  "
        >
          D
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, rotateY: 0 }}
          animate={{ opacity: 1, rotateY: 180 }}
          transition={{ delay: 1.2 }}
          className=" text-amber-400 "
        >
          E
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-red-500  "
        >
          V
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default TypoGraph
