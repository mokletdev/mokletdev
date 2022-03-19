import fetch from '@utils/fetch'

export default function getProject(project) {
  const options = {
    method: 'GET',
    url: `/repos/mokletdev/${project}`,
  }
  return fetch(options)
}
