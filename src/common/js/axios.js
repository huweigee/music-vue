import axios from 'axios'

let qs = require('qs')

let errorMsg = {
  '400': '系统繁忙，请稍后再试',
  '403': '无该功能权限',
  '410': '重复请求',
  '500': '网络异常，请稍后再试'
}

// if (localStorage['token'] !== null) {
//   axios.defaults.headers.common['token'] = localStorage['token'];
// }
axios.defaults.headers.common['platform'] = 'g'
axios.defaults.headers.common['cid'] = localStorage['cid']

let api = {
  post: function (url, param, type = 'init') {
    let headers = {}
    if (type === 'md') {
      headers['ERPSignSecret'] = param.md
      headers['ERPVersion'] = 'V2'
      headers['PlatForm'] = 11
      delete param.md
    }
    return axios
      .post(url, qs.stringify(param), {
        headers: headers
      })
      .then(res => {
        return res
      })
  },
  postJSON: function (url, param) {
    let jsonParam = JSON.stringify(param)
    console.log(jsonParam)
    let headers = {
      post: {}
    }
    headers.post['Content-Type'] = 'application/json'
    return axios.post(url, jsonParam, {
      headers: headers
    }).then(res => {
      return res
    })
  },
  putJSON: function (url, param) {
    let jsonParam = JSON.stringify(param)
    let headers = {
      put: {}
    }
    headers.put['Content-Type'] = 'application/json'
    return axios.put(url, jsonParam, {
      headers: headers
    }).then(res => {
      return res
    })
  },
  get: function (url, param, type = 'init') {
    let headers = {}
    if (type === 'pt') {
      headers['platform'] = 'g'
    }
    return axios.get(url, {
      headers: headers,
      params: param
    }).then(res => {
      return res
    })
  },
  delete: function (url, param) {
    return axios
      .delete(url, {
        params: param
      })
      .then(res => {
        return res
      })
  },
  put: function (url, param) {
    return axios.put(url, qs.stringify(param)).then(res => {
      return res
    })
  }
}
export {
  api,
  errorMsg
}
