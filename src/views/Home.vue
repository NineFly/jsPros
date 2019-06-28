<template>
  <div class="container-fluid">
    <div class="row main">
      <h2 class="sub-header">Section title</h2>
      <div class="text-right" @click="addStudent()">
        <a class="btn btn-success">添加学生</a>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-hover text-left">
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
              <a @click="edit(item)">编辑</a>
              <a @click="del(item.id)">删除</a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mList: []
      }
    },
    created() {
      this.getData();
    },
    methods: {
      addStudent() {
        this.$router.push({
          path: '/add_stu',
          name: 'add_stu'
        })
      },
      edit(thisItem){
        this.$router.push({
          path: '/add_stu',
          name: 'add_stu',
          params: {
            stu_obj: thisItem
          }
        })
      },
      getData() {
        var _self = this
        this.axios.get(this.BASE_URL + 'userList/getUserList', {
          params: {}
        }).then(function (res) {
          _self.mList = res.data;
        }).catch(function (err) {

        });
      },
      del(thisId){
        var _self = this
        this.axios.get(this.BASE_URL + 'userList/delete', {
          params: {
            id:thisId
          }
        }).then(function (res) {
          _self.getData();
          console.log("成功==" + JSON.stringify(res));
        }).catch(function (err) {
          console.log("失败==" + JSON.stringify(err))
        });
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
    padding-top: 10px;
    margin: 0 100px;
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
