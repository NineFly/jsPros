<template>
  <div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main text-left">
      <h2 class="sub-header">添加学生</h2>
      <div class="form-group">
        <label for="">姓名</label>
        <input type="text" class="form-control"
               name="name" required minlength="2"
               maxlength="10" v-model="stu_name">
      </div>
      <div class="form-group">
        <label for="">性别</label>
        <div>
          <label class="radio-inline" v-for="(item, index) in sexList"  :key="index">
            <input type="radio" name="gender"  :value="item.value" v-model="checkedValue"> {{item.name}}
          </label>
        </div>
      </div>
      <div class="form-group">
        <label >年龄</label>
        <input class="form-control"
               type="number"
               name="age"
               required min="1"
               max="150"
               v-model="stu_age">
      </div>
      <div class="form-group">
        <label for="">爱好</label>
        <input class="form-control" type="text" name="hobbies" v-model="stu_hobbies" >
      </div>
      <button type="submit" class="btn btn-success" @click="saveStu()">Submit</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checkedValue: 1,
        sexList:[{value:1, name: '男'},{value:2, name: '女'}],
        stu_name: '',
        stu_age: 0,
        stu_sex: 1,
        stu_hobbies: ''
      }
    },
    created() {
      debugger
      this.initData();
    },
    methods: {
      initData(){
        debugger
        var stuObj = this.$route.params.stu_obj;
        if (stuObj){
          this.stu_name = stuObj.name;
          this.stu_age = stuObj.age;
          this.stu_sex = stuObj.sex;
          this.stu_hobbies = stuObj.hobbies;
        }
      },
      save(){
        var _self = this
        this.axios.get(this.BASE_URL + 'userList/save', {
          params: {
            name: this.stu_name,
            sex: this.checkedValue,
            age: this.stu_age,
            hobbies: this.stu_hobbies
          }
        }).then(function (res) {
          console.log("成功==" + JSON.stringify(res));
          _self.$router.go(-1)
        }).catch(function (err) {
          console.log("失败==" + JSON.stringify(err))
        });
      },
      update(){
        var _self = this
        this.axios.get(this.BASE_URL + 'userList/update', {
          params: {
            id: this.$route.params.stu_obj.id,
            name: this.stu_name,
            sex: this.checkedValue,
            age: this.stu_age,
            hobbies: this.stu_hobbies
          }
        }).then(function (res) {
          console.log("成功==" + JSON.stringify(res));
          _self.$router.go(-1)
        }).catch(function (err) {
          console.log("失败==" + JSON.stringify(err))
        });
      },
      saveStu() {
        if (this.$route.params.stu_obj) {
          this.update();
        } else {
          this.save();
        }
      }

    }
  }
</script>

<style>

</style>
