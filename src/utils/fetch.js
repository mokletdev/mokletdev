import axios from 'axios'

const baseUrl = 'https://api.github.com'

const fetch = (opt) => {
  const options = {
    baseURL: baseUrl,
    auth: {
      username: 'c9c27c36c743a1848cbf',
      password: '0b9515156d6d193904b2bd09cc1e5e65e647eafb',
    },
    ...opt,
  }

  return new Promise((resolve, reject) => {
    axios(options)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        }

        if (typeof err.response === 'undefined') {
          reject(defaultError)
        } else if (typeof err.response.data === 'undefined') {
          reject(defaultError)
        } else {
          reject(err.response.data)
        }
      })
  })
}

export default fetch
