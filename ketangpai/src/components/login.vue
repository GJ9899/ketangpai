<template>
  <div id="login">
    <div class="identity-box" style="display: block;">
      <div style="height:85px;"></div>
        <h3>账号登录</h3>
      <el-form label-width="80px" :model="ruleForm" class="form" ref="ruleForm" :rules="rules">
        <el-form-item prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="邮箱/手机号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox type="checkBox" v-model="checked" class="rememberPassword">下次自动登录</el-checkbox>
          <span class="forgetPassword">忘记密码?</span>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="login('ruleForm')" style="width:353px">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="btn-login">
        <router-link :to="{name:'Register'}">
          <span class="str1" style="color:grey">还没有账号</span>
          <span class="str2" style="color:blue">去注册</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {Message} from 'element-ui'
export default {
  name: 'SLogin',
  data(){
    var checkPhone = (rule,value,callback) => {
      if (!value) {
          return callback(new Error('邮箱/手机号不能为空'));
      }
      else if(value.length != 11){
        callback(new Error('邮箱/手机号格式有误'));
      }
      else{
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      }
      else if(value.length<6){
        callback(new Error('密码不能少于6位'));
      }
      else{
        callback();
      }
    };
    return{
      ruleForm:{
        phone:'',
        password:''
      },
      rules:{
        phone:[
          { validator:checkPhone,trigger:'blur' }
        ],
        password :[
          { validator:validatePass,trigger:'blur'}
        ]
      },
      checked:false,
    }
  },
  methods: {
    //登录
    login(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          let self = this;
          console.log("123");
          const params = {
            phoneMail:this.ruleForm.phone,
            password:this.ruleForm.password
          }
          this.$axios.all([this.teacherLogin(params),this.studentLogin(params)])
          .then(this.$axios.spread(function(acct,perms){
            //教师
            if(acct.data.data != undefined && perms.data.data == undefined){
              Message.success("登录成功");
              sessionStorage.setItem("userId",acct.data.data.id);
              let data = acct.data.data;
              // this.$store.commit('set_token',data["Authentication-Token"])
              self.$router.push({name:'TIndex'});
            }
            //学生
            else if(acct.data.data == undefined && perms.data.data != undefined){
              sessionStorage.setItem("userId",perms.data.data.id);
              let data = perms.data.data;
              // this.$store.commit('set_token',data["Authentication-Token"])
              Message.success("登录成功");
              self.$router.push({name:'SIndex'});
            }
            //两者都不是
            else{
              self.$refs[formName].resetFields();
              Message.error("手机号/邮箱或者密码错误！");
            }
          }))
        }
      });
      
    },
    //教师登录
    teacherLogin(params){
      return this.$axios.post('api/teacher/login',params);
    },
    //学生登录
    studentLogin(params){
      return this.$axios.post('api/student/login',params);
    }
  }
}
</script>

<style scoped>
#login{
  position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
  background-image: url("../assets/picture/login-bg2.jpg");
}
.identity-box {
  margin-top: 80px;
    width: 480px;
    height: 504px;
    padding: 1px 25px 0;
    background: #FFF;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    border-radius: 4px;
}
.identity-box h3 {
    position: relative;
    left: 15px;
    bottom: 90px;
    font-size: 32px;
    font-weight: 400;
    color: #3B3D45;
}
.el-form-item {
    margin-bottom: 40px;
}
.form{
  position: relative;
  right: 40px;
  bottom: 50px;
}
.login-box .opt {
    padding: 20px 0;
    height: 24px;
    line-height: 24px;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.rememberPassword{
  float: left;
}
.forgetPassword{
  float: right;
  cursor: pointer;
}
.btn-login{
  margin-top: -80px;
    margin-right: 35px;
    float: right;
    cursor: pointer;
}
</style>