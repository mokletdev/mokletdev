import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import Header from '@elements/Header'
import useAction from './hooks/useAction'
import ListTag from '@fragments/ListTag'
import Footer from '@elements/Footer'

export const CATEGORIZED_PROJECTS = [
  {
    tag: 'FrontEnd',
    projects: [
      { name: 'React Tailwind', link: '/' },
      { name: 'NextJS Codebase', link: '/' },
      { name: 'Dashboard Template', link: '/' },
    ],
  },
]

const SectionFour = ({ setBgColor, setTextColor, textColor }) => {
  const [ref, inView] = useInView()
  const [accent, setAccent] = useState(['border-red-500', 'text-red-500'])
  const [data, setData] = useState([])

  const { getFilteredProject } = useAction({ setData })

  useEffect(() => {
    getFilteredProject()
  }, [])

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
          {data.map((v, i) => (
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
      <Footer />
    </section>
  )
}
export default SectionFour
