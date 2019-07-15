import Vue from 'vue'

export default ({ store, app: { $axios } }) => {

  $axios.onRequest(config => {
    console.log('performing request..')
    console.log('config:', config)
  })

  // $axios.setToken(store.getters['auth/refreshToken'])

  $axios.onError(error => {
    console.log('axios got an error: ', error)
  })

  $axios.onResponse(res => {
    console.log('axios got response: ', res)
  })

}