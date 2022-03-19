import fetch from '@utils/fetch'

export default function getAllRepository() {
  const options = {
    method: 'GET',
    url: `/orgs/mokletdev/repos`,
  }
  return fetch(options)
}
