import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'
// import {commonParams} from './config'
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
  // const data = {
  //   channel: 'singer',
  //   page: 'list',
  //   key: 'all_all_all',
  //   pagesize: 100,
  //   pagenum: 1,
  //   hostUin: 0,
  //   platform: 'yqq',
  //   g_tk: 5381,
  //   loginUin: '0',
  //   format: 'json',
  //   inCharset: 'utf8',
  //   outCharset: 'utf-8',
  //   notice: 0,
  //   needNewCode: 0
  // }
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
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

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
  return jsonp(url, data, options)
}
// 网上查找的方式一
// export function getSingerList () {
//   const url = '/api/getSingerList'

//   const data = Object.assign({}, commonParams, {
//     g_tk: 5381,
//     loginUin: 0,
//     hostUin: 0,
//     format: 'json',
//     inChatset: 'utf-8',
//     outCharset: 'utf-8',
//     notice: 0,
//     platform: 'yqq',
//     needNewCode: 0,
//     data: {
//       'comm"': {
//         'ct': 24,
//         'cv': 0
//       },
//       'singerList': {
//         'module': 'Music.SingerListServer',
//         'method': 'get_singer_list',
//         'param': {
//           'area': -100,
//           'sex': -100,
//           'genre': -100,
//           'index': -100,
//           'sin': 0,
//           'cur_page': 1
//         }
//       }
//     }
//   })
//   return axios.get(url, {
//     params: data
//   }).then((res) => {
//     return Promise.resolve(res)
//   })
// }

// export function getSongVkey () {
//   const url = '/getVkey'
//   const data = Object.assign({}, commonParams, {
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
