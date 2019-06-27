<template>
  <div class="col-sm-9 col-sm-offset-1  main">
    <h2 class="sub-header">Section title</h2>
    <a class="btn btn-success" href="/students/new">添加学生</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>爱好</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in mList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.hobbies }}</td>
          <td>
            <a href="/students/edit?id=4">编辑</a>
            <a href="/students/delete?id=4">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        mList:[]
      }
    },
    created(){
      this.getData();
    },
    methods: {
      getData(){
        var _self = this;
        // this.$ajax.get("http://39.107.111.195:8888/", {
          this.$ajax.get("http://localhost:8888/", {
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

        // this.$router.push({
        //   path: '/first',
        //   name: 'first'
        // })
      }

    }
  }
</script>

<style>
  .sub-header {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .main {
    padding: 20px;
  }

  @media (min-width: 768px) {
    .main {
      padding-right: 40px;
      padding-left: 40px;
    }
  }

  .sub-header {
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }

</style>
