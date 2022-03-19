import getProject from '@repositories/getProject'

const useAction = (props) => {
  const { setLoading, setData } = props

  const getDataProject = async (projectId) => {
    setLoading(true)
    try {
      const res = await getProject(projectId)
      setData(res)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    getDataProject,
  }
}
export default useAction
