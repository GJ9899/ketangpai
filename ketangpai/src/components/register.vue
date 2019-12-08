<template>
  <div id="register">
    <div class="identity-box">
      <h3>注册账号</h3>
      <p>请选择您在日常教学中的实际身份</p>
      <div class="choose">
        <div @click="teacherRegister">
          <img src="../assets/picture/teacher.png" class="display" style="cursor:pointer">
          <a class="teacher display">我是老师/助教</a>
        </div>
        <div @click="studentRegister">
          <img src="../assets/picture/student.png" class="display" style="cursor:pointer">
          <a class="student display">我是学生</a>
        </div>
      </div>
      <div class="btn-login" @click="toLogin">
        <span class="str1">已有账号？</span>
        <span class="str2">去登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{

    }
  },
  methods:{
    //教师注册
    teacherRegister(){
      this.$router.push({name:'TeacherRegister'});
    },
    //学生注册
    studentRegister(){
      this.$router.push({name:'StudentRegister'});
    },
    //登录
    toLogin(){
      this.$router.push({name:'Login'});
    }
  }
}
</script>

<style scoped>
#register{
  position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    background-image: url("../assets/picture/reg-bg.png");
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
    font-size: 32px;
    font-weight: 400;
    color: #3B3D45;
}
.identity-box p{
  margin-top: 20px; 
  color: #707070;
}
.identity-box .choose {
    margin-top: 70px;
    margin-left: 15px;
}
.identity-box .choose a {
    display: block;
    width: 330px;
    font-size: 16px;
    color: #fff;
    height: 64px;
    line-height: 64px;
    text-align: center;
    background: #32BAF0;
    border-radius: 4px;
    position: relative;
    left: 70px;
    bottom: 67px;
}
.display{
  display: inline-block;
}
.str1{
  color: darkgrey;
}
.str2{
  color: #32BAF0;
}
a{
  text-decoration: none;
  cursor: pointer;
}
.identity-box .btn-login, .login-box{
  cursor: pointer;
    float: right;
    margin-top: -50px;
    margin-right: 15px;
}
</style>