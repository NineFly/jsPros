<template>
  <div id="app">
    <div>我的网站,欧耶\(^o^)/</div>
    <div @click="httpTest()">66666</div>
    <div v-if="mList.length > 0" v-for="item in mList" :key="item.id">
      <span>Id: {{ item.id }} == </span>
      <span>Name: {{ item.name }}</span>
    </div>
    <router-view/>

  </div>
</template>

<script>
export default {
  data(){
    return {
      mList:[]
    }
  },
  methods: {
    httpTest(){
      var _self = this;
      this.$ajax.get("http://39.107.111.195:8888/", {
        params: {
          'userId': 'yulin',
          'date': new Date()
        }
      })
        .then(function (res) {
          _self.mList = res.data;
          console.log("成功=="+JSON.stringify(res));
        })
        .catch(function (err) {
          console.log("失败=="+JSON.stringify(err))
        });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
