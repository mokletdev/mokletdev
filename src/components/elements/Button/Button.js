import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Button({
  children,
  className,
  type,
  to,
  href,
  onClick,
  small,
  responsive,
  nav,
  ...props
}) {
  const [classes, setClasses] = useState('')
  const defaultClass = ' ' + ' font-semibold tracking-wider '
  const buttonSize = () => {
    switch (true) {
      case responsive:
        return ' py-1 px-2 md:py-3 md:px-6 '
      case small:
        return ' py-1 px-2 '
      default:
        return ' py-3 px-6 '
    }
  }
  const buttonDefault =
    ' outline-none flex items-center justify-center text-base hover:-translate-y-1 ' +
    buttonSize()

  useEffect(() => {
    switch (type) {
      case 'primary': {
        setClasses(
          defaultClass + buttonDefault + '  rounded defaultTransitionAll'
        )
        break
      }
      case 'text': {
        setClasses(' defaultTransitionAll')
        break
      }
      default: {
        setClasses(
          defaultClass +
            buttonDefault +
            ' text-white rounded defaultTransitionAll'
        )
        break
      }
    }
  }, [type])

  switch (true) {
    case !!onClick:
      return (
        <motion.button
          onClick={onClick}
          className={classes + ' ' + className}
          {...props}
        >
          {children}
        </motion.button>
      )
    case !!to:
      return (
        <Link href={to} {...props}>
          <motion.button className={classes + ' ' + className} {...props}>
            {children}
          </motion.button>
        </Link>
      )
    case !!href:
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes + ' ' + className}
          {...props}
        >
          {children}
        </a>
      )
    case !!nav:
      return (
        <a href={nav} className={classes + ' ' + className} {...props}>
          {children}
        </a>
      )
    default:
      return (
        <motion.button className={classes + ' ' + className} {...props}>
          {children}
        </motion.button>
      )
  }
}
