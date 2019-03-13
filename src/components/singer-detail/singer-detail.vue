<template>
  <transition name="slide">
    <!-- <div class="singer-detail"></div> -->
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
// import {getSingerDetail, getMusic} from 'api/singer'
import {getSingerDetail} from 'api/singer'
import {ERR_OK} from 'api/config'
import {createSong} from 'common/js/song'
import MusicList from 'components/music-list/music-list'
// import Singer from 'common/js/singer'
export default {
  data () {
    return {
      songs: []
    }
  },
  computed: {
    title () {
      // console.log(cccccccc)
      return this.singer.name
    },
    bgImage () {
      // console.log(ddddddd)
      return this.singer.avatar
    },
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this._getDetail()
    // console.log(this.singer)
  },
  methods: {
    _getDetail () {
      if (!this.singer.id) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          // console.log(res.data.list)
          this.songs = this._normalizeSongs(res.data.list)
          // console.log(this.songs)
        }
      })
    },
    // _normalizeSongs (list) {
    //   // console.log(list)
    //   let ret = []
    //   list.forEach((item) => {
    //     let {musicData} = item
    //     if (musicData.songid && musicData.albummid) {
    //       getMusic(musicData.songmid).then((res) => {
    //         console.log(res.data.items)
    //         // const svley = res.data.items
    //         // const songVkey = svley[0].vkey
    //         ret.push(createSong(musicData, songVkey))
    //       })
    //     }
    //   })
    //   return ret
    // }

    _normalizeSongs (list) {
      // console.log(list)
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          // console.log(item)
          // const svley = res.data.item
          // const songVkey = svley[0].vkey
          // console.log(songVkey)
          ret.push(createSong(musicData))
        }
      })
      // console.log(ret)
      return ret
    }
  },
  components: {
    MusicList
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'

  // .singer-detail
  //   position: fixed
  //   z-index: 100
  //   top: 0
  //   left: 0
  //   right: 0
  //   bottom: 0
  //   background: $color-background
  .slide-enter-active,.slide-leave-active
    transition: all 0.3s
  .slide-enter,.slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
