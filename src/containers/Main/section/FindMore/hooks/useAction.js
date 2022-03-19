import getAllRepository from '@repositories/getAllRepository'
import { CATEGORY } from '@configs/category'

const useAction = (props) => {
  const { setData } = props

  const getFilteredProject = async (projectId) => {
    // setLoading(true)
    try {
      const res = await getAllRepository()
      setData(filterProject(res))
    } catch (error) {
      console.log(error)
    } finally {
      // setLoading(false)
    }
  }

  const filterProject = (data) => {
    let list = []
    CATEGORY.forEach((tag) =>
      list.push({
        tag,
        projects: data.filter((v) => v.topics?.includes(tag)),
      })
    )

    return list
  }

  return {
    getFilteredProject,
  }
}

export default useAction
