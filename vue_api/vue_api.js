import axios from 'axios'

let HTTP = axios.create()

let plugin = new class Api {
  get (requestUrl) {
    return HTTP.get(requestUrl)
  }

  put (requestUrl, datas) {
    return HTTP.put(requestUrl, datas)
  }

  post (requestUrl, datas) {
    return HTTP.post(requestUrl, datas)
  }

  patch (requestUrl, datas) {
    return HTTP.patch(requestUrl, datas)
  }

  delete(requestUrl) {
    return HTTP.delete(requestUrl)
  }

  setAuthorizationToken (authorizationToken) {
    HTTP.defaults.headers.common = {
      'Authorization': `Token ${authorizationToken}`
    }
  }
}

// This is your plugin object. It can be exported to be used anywhere.
export default {
  install(Vue, options) {
    Vue.prototype.$api = plugin

    // Automatic installation if Vue has been added to the global scope.
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(MyPlugin)
    }    
  }
}