// import jsonp from 'common/js/jsonp'
// import { commonParams, options } from './config'
import {commonParams} from './config'
import axios from 'axios'
// import {singerParams} from './config'

export function getSingerList () {
  // const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const url = '/api/getSingerList'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    g_tk: 1664029744,
    loginUin: '0',
    format: 'json',
    needNewCode: 0
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
// jsonp获取方式
// export function getSingerList () {
//   /* static/jsonp4.png */
//   const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
//   const data = Object.assign({}, commonParams, {
//     channel: 'singer',
//     page: 'list',
//     key: 'all_all_all',
//     pagesize: 100,
//     pagenum: 1,
//     hostUin: 0,
//     needNewCode: 0,
//     platform: 'yqq',
//     g_tk: 1664029744
//   })
//   return jsonp(url, data, options)
// }

export function getSingerDetail (singerId) {
  // const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const url = '/api/getSingerDetail'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId,
    g_tk: 1664029744
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusic (songmid) {
  const url = '/api/music'
  const data = Object.assign({}, commonParams, {
    songmid: songmid,
    filename: 'C400' + songmid + '.m4a',
    guid: 7981028948,
    platform: 'yqq',
    loginUin: 0,
    hostUin: 0,
    needNewCode: 0,
    cid: 205361747,
    uid: 0,
    g_tk: 1928111839
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// export function getMusic (songmid) {
//   const url = '/api/getMusic'

//   const data = Object.assign({}, commonParams, {
//     loginUin: 0,
//     hostUin: 0,
//     platform: 'yqq',
//     data: `{
//       'req':{
//         "module":"CDN.SrfCdnDispatchServer",
//         "method":"GetCdnDispatch",
//         "param":{
//           "guid":"7035757095",
//           "calltype":0,
//           "userip":""
//           }
//         },
//       "req_0":{
//         "module":"vkey.GetVkeyServer",
//         "method":"CgiGetVkey",
//         "param":{
//           "guid":"7035757095",
//           "songmid":[${songmid}],
//           "songtype":[0],
//           "uin":"1532004959",
//           "loginflag":1,
//           "platform":"20"
//         }
//       },
//       "comm":{
//         "uin":1532004959,
//         "format":"json",
//         "ct":24,
//         "cv":0
//       }
//     }`
//   })
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   })
// }

// export function getSongVkey (songmid) {
//   const url = '/getVkey'
//   const data = Object.assign({}, commonParams, {
//     songmid: songmid,
//     callback: 'get002341',
//     jsonpCallback: 'get002341',
//     loginUin: 0,
//     hostUin: 0,
//     format: 'jsonp',
//     platform: 'yqq',
//     needNewCode: 0,
//     data: `{
//       'req': {
//         'module': 'CDN.SrfCdnDispatchServer',
//         'method': 'GetCdnDispatch',
//         'param': {
//           'guid': '5416664912',
//           'calltype': 0,
//           'userip': ''
//         }
//       },
//       'req_0': {
//         'module': 'vkey.GetVkeyServer',
//         'method': 'CgiGetVkey',
//         'param': {
//           'guid': 5416664912,
//           'songmid': ['${songmid}'],
//           'songtype': [0],
//           'uin': 0,
//           'loginflag': 1,
//           'platfrom': '20'
//         }
//       },
//       'comm': {
//         'uin': 0,
//         'format': 'json',
//         'ct': 20,
//         'cv': 0
//       }
//     }`
//   })
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res.data)
//   }).catch((e) => {
//     console.log(e)
//   })
// }
