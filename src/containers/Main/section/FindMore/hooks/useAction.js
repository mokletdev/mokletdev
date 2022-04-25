import { CATEGORY } from '@configs/category'

const useAction = (props) => {
  const { setFilteredData, data } = props

  const getFilteredProject = () => {
    let list = []
    CATEGORY.forEach((tag) =>
      list.push({
        tag,
        projects: data?.filter((v) => v.topics?.includes(tag)),
      })
    )

    setFilteredData(list)
  }

  return {
    getFilteredProject,
  }
}

export default useAction
