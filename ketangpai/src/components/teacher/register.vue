<template>
  <div id="register">
    <div class="identity-box" style="display: block;">
      <div style="height:85px;">
        <router-link :to="{name:'Register'}">
          <img src="../../assets/picture/returnReg.png" style="margin-top:20px">
        </router-link>
        
        <h3>老师/助教注册</h3>
      </div>
      <div>
        <el-form label-width="80px" :model="form" :rules="rules" class="form" ref="form" >
          <el-form-item prop="phone">
            <el-input v-model="form.phone" placeholder="邮箱/手机"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item prop="school">
            <el-input v-model="form.school" placeholder="学校"></el-input>
          </el-form-item>
          <el-form-item prop="identifyCode" class="identifyCode">
            <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
            <el-input placeholder="验证码" v-model="form.identifyCode" @keyup.enter.native="teacherRegister('form')" style="width: 235px;display: flex;justify-content: space-between;" >
            </el-input>
            <div @click="refreshCode" class="identifybox">
              <s-identify :identifyCode="identifyCode"></s-identify>
            </div>
          </el-form-item>
          <el-form-item class="button">
            <el-button type="primary" @click="teacherRegister('form')" style="width:353px">注册成为老师/助教</el-button>
          </el-form-item>
        </el-form>
      </div>
        
      <div class="btn-login" @click="toLogin">
        <span class="str1">已有账号？</span>
        <span class="str2">去登录</span></div>
      </div>
    </div>
  </div>
</template>

<script>
var identifyId = 1;//教师
import SIdentify from '../SIdentify'
import {Message} from 'element-ui'
export default {
  components: {SIdentify},
  name: 'register',
  data(){
    var validatePhone = (rule, value, callback) =>{
      let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (!value) {
        return callback(new Error('邮箱/电话不能为空'));
      }

      else if(value.length != 11 && !(reg.test(value))){
        return callback(new Error('邮箱/电话格式不对'));
      }
      else{
        callback();
      }
    };
    var validatePassword = (rule, value, callback) =>{
      if (!value) {
        return callback(new Error('密码不能为空'));
      }
      else if(value.length < 6 || value.length > 12){
        return callback(new Error('密码长度在6-12位'))
      }
      else{
        callback();
      }
    };
    var validateName = (rule, value, callback) =>{
      if (!value) {
        return callback(new Error('姓名不能为空'));
      }
      else{
        callback();
      }
    };
    var validateSchool = (rule, value, callback) =>{
      if (!value) {
        return callback(new Error('学校不能为空'));
      }
      else{
        callback();
      }
    };
    var validateIdentifyCode = (rule, value, callback) =>{
      if (!value) {
        callback(new Error('验证码不能为空'));
      }
      else if(value !== this.identifyCode){
        callback(new Error('验证码不正确'));
      }
      else{
        callback();
      }
    };
    return{
      form:{
        phone:'',
        password:'',
        name:'',
        school:'',
        identifyCode:''
      },
      identifyCodes:'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      identifyCode:'',
      rules:{
        phone:[
          { validator:validatePhone,trigger:'blur'}
        ],
        password:[
          { validator:validatePassword,trigger:'blur' }
        ],
        name:[
          { validator:validateName,trigger:'blur' }
        ],
        school:[
          { validator:validateSchool,trigger:'blur' }
        ],
        identifyCode:[
          { validator:validateIdentifyCode,trigger:'blur' }
        ]
      },
    };
  },
  mounted(){
    this.identifyCode = '';
    this.makeCode(this.identifyCodes, 4);
  },
  methods:{
    //登录
    toLogin(){
      this.$router.push({name:'Login'});
    },
    //注册
    teacherRegister(formName){
      this.$refs[formName].validate((valid) => {
        if(valid){
          let phone = this.form.phone;
          let name = this.form.name;
          let school = this.form.school;
          let password = this.form.password;
          const teacher = {
            phoneMail:phone,
            name:name,
            school:school,
            password:password,
            roleId:identifyId
          }
          console.log(teacher);
          this.$axios.post('api/teacher/register',teacher)
          .then(res => {
            if(res.data.message == 'success'){
              Message.success("注册成功！请登录");
              this.$refs[formName].resetFields();
              this.$router.push({name:'Login'});
            }
            else{
              this.form.phone = '';
              Message.error("手机/邮箱已注册!");
            }
          })
        }
        else{
          console.log("error submit!!!");
          return false;
        }
      })
    },
    // 生成随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 切换验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成四位随机验证码
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode);
    }
  }
}
</script>

<style scoped>
@import url('../../assets/file/iconfont.css');
#register{
  position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
    background-image: url("../../assets/picture/reg-bg.png");
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
.identifyCode /deep/ .el-form-item__error{
  position: relative;
  top: -53px;
}
.identity-box h3 {
    position: relative;
    left: 50px;
    bottom: 79px;
    font-size: 32px;
    font-weight: 400;
    color: #3B3D45;
}
.form{
  position: relative;
    right: 40px;
}
.button{
  position: relative;
  bottom: 55px;
}
.btn-login{
  position: relative;
  bottom: 65px;
  left: 260px;
  cursor: pointer;
}
.str1{
  color: darkgray;
}
.str2{
  color: blue;
}
</style>