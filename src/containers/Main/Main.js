import { useEffect, useState } from 'react'
import Navbar from '@elements/Navbar'
import Welcome from './section/Welcome'
import Highlight from './section/Highlight'
import JoinUs from './section/JoinUs'
import FindMore from './section/FindMore'
import { HIGHLIGHT } from '@configs/highlight'
// import Footer from '@elements/Footer'
import getAllRepository from '@repositories/getAllRepository'
import useAction from './hooks/useAction'

export default function Main() {
  const [bgColor, setBgColor] = useState('bg-zinc-900')
  const [textColor, setTextColor] = useState('text-white')
  const [data, setData] = useState([])

  const { getListProject } = useAction({ setData })

  useEffect(() => {
    getListProject()
  }, [])

  return (
    <div
      className={
        'transition-color h-screen overflow-x-hidden scroll-smooth  duration-300 ease-out md:snap-y md:snap-proximity ' +
        bgColor
      }
    >
      <Navbar textColor={textColor} />
      <Welcome textColor={textColor} />
      <Highlight
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        textColor={textColor}
        data={HIGHLIGHT}
      />
      <JoinUs textColor={textColor} bgColor={bgColor} />
      <FindMore
        setBgColor={setBgColor}
        setTextColor={setTextColor}
        textColor={textColor}
        data={data}
      />
      {/* <Footer /> */}
    </div>
  )
}
