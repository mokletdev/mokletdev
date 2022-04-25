import getAllRepository from '@repositories/getAllRepository'
import { CATEGORY } from '@configs/category'

const useAction = (props) => {
  const { setData } = props

  const getListProject = async (projectId) => {
    // setLoading(true)
    try {
      const res = await getAllRepository()
      setData(res)
    } catch (error) {
      console.log(error)
    } finally {
      // setLoading(false)
    }
  }

  return {
    getListProject,
  }
}

export default useAction
