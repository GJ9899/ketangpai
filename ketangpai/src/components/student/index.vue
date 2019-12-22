<template>
  <div id="index">
    <div class="nav nav-default">
      <ul class="nav-menu-left">
        <li class="nav-menu-item ktplogo">
          <a class="ketangpaitophref">
            <img src="../../assets/picture/logo-mainblue.png" alt="" width="96px" height="24px">
          </a>
        </li>
        <li class="nav-menu-item">
          <a >课堂</a>
        </li>
        <li class="nav-menu-item jingpin">
          <a >精品专区</a>
        </li>
        <li class="nav-menu-item">
          <a >我的精品</a>
        </li>
      </ul>
      <ul class="nav-menu-right">
        <li class="paper-repeat nav-menu-item">
          <a>
            <i class="el-icon-document"></i>
            论文查重
          </a>
        </li>
        <li class="nav-menu-item">
          <i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i>
        </li>
        <li class="nav-menu user">
          <img src="../../assets/picture/33 (1).png" style="width:30px;height:30px;position: relative;bottom: 40px;left: 173px;">
        </li>
      </ul>
    </div>
    <div class="ktcon" style="height: 55px;">
      <div class="ktcon-left">
        <p>全部课程</p>
      </div>
      <div class="ktcon-right">
        <span><i class="el-icon-download"></i> 课程排序</span>
        <span><i class="el-icon-folder"></i> 归档管理</span>
        <span><el-button type="primary" @click="addCourse">+加入课程</el-button></span>
      </div>
    </div>
    <el-divider></el-divider>
    <el-dialog
      title="加入课程"
      :visible.sync="dialogVisible1"
      width="30%">
      <el-input placeholder="请输入课程加课验证码" v-model="courseIdentifyCase"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelAddCourse">取 消</el-button>
        <el-button type="primary" @click="submitAddCourse()">加 入</el-button>
      </span>
    </el-dialog>
    <!--课程列表-->
    <div class="ktcon2 cl hide" id="viewer-container-lists" data-course-count="50">
      <dl class="ktdl1 ktpx1" data-id="MDAwMDAwMDAwMLR2vd2Gz7dp" data-issys="0" data-color="#318eeb" v-for="(item,index) in course">
        <dt style="background:url(//assets.ketangpai.com/theme/student/min/03.png)" class="bgclass2">
          <strong>
            <a title="java" class="jumpToCourse" data-id="MDAwMDAwMDAwMLR2vd2Gz7dp" @click="jumpToCourse(item.id)">{{item.courseName}}</a>
            <span>{{ item.className }}</span>
          </strong>
          <div class="invitecode">
            <div class="qrcode">
              <i class="iconfont iconketangma1" data-role="0"></i>
            </div>
            <div class="down-menu" data-role="0">
              加课码：<span class="code">{{item.addCode}}</span>
              <div class="selecon cl" style="display: none;">
                <ul>
                  <li class="hide2"><a class="stop-course-code" data-code="MDAwMDAwMDAwMLR2vd2Gz7dp">停用</a></li>
                  <li class=""><a class="start-course-code">启用</a></li>
                  <li class="hide2"><a class="reset-course-code" >重置</a></li>
                </ul>
              </div>
            </div>
          </div>
          <span class="time">{{item.year}}<br>{{item.semester}}</span>
          <div class="bigDiv learncl">
            <div class="squr"></div>
            <div class="ju">学</div>
          </div>
          <div class="zhidings zhidings-two">
            <a>置顶</a>
          </div>
          <a class="kdmore" @click="hasKdcgd(index)">
            <span>更多</span>
            <i></i>
          </a>
          <ul class="kdcgd" :id="kdcgb(index)">
            <li class="kdli3" id="kdli3" @click="deleteCourse">退课</li>
            <li class="kdli2" id="kdli2" @click="">归档</li>
          </ul>
        </dt>
        <dd>
          <ul>
            <li class="off"><span>近期作业</span></li>
            <li>
              <span v-for="(id,index1) in courseIdList">
                <a v-if="id == item.id">{{ homeworkNameList[index1]}}</a>
              </span>
            </li>

          </ul>
          <div class="ddfoot clearfix">
            <div class="user-avatar-area">
              <img src="https://www.ketangpai.com/Public/Common/img/40/29.png">
              <div class="teachername">{{ teacherNameList[index]}}</div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <!--退课弹窗-->
    <el-dialog :visible.sync="dialogVisible3" class="deleteKt" width="30%">
      <div class="" style="position:relative;bottom:20px">
        <p class="deleteKt1">确定要退课"java"吗？</p>
        <p class="deleteKt2">您的这个课程的任何信息或评论将被永久删除</p>
        <p class="deleteKt3" style="color:red">警告：此操作无法撤销</p>
        <el-input placeholder="请输入登录密码验证" class="deleteKt5" v-model="deleteKt5"></el-input>
        <div class="deleteKt6">
          <el-button @click="resetDeleteKt">取消</el-button>
          <el-button type="primary" @click="deleteKt">退课</el-button>
        </div>
      </div>
    </el-dialog>
    <!--归档课程-->
    <el-dialog :visible.sync="dialogVisible4" class="pigeonhole" width="30%">
      <div>
        <p class="deleteKt1">要归档此课程吗？</p>
        <p class="deleteKt2">您可以在“课堂”-“归档管理”中查看此课程</p>
        <div class="deleteKt6" style="margin-bottom:20px">
          <el-button @click="cancelPigeonhole">取消</el-button>
          <el-button type="primary" @click="pigeonhole">归档</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {Message} from 'element-ui'
export default {
  name: 'SIndex',
  data(){
    return{
      dialogVisible1:false,
      courseIdentifyCase:'',
      dialogVisible3:false,
      dialogVisible4:false,
      deleteKt5:'',
      userId:'',
      course:{
        id:'',
        courseName:'',
        className:'',
        year:'',
        semester:'',
        conditions:'',
        createrId:'',
        createTime:'',
        addCode:''
      },
      courseList:{},
      homeworkNameList:[],
      courseIdList:[],
      homework:{
        id:'',
        homeworkName:''
      },
      teacherNameList:[]
    }
  },
  mounted(){
    //获取所以已选课程
    this.getAllCourse();
    this.userId = sessionStorage.getItem("userId");
    sessionStorage.setItem("courseId",'');
    //获取作业信息
    this.getHomeworkName();
    //获取教师信息
    this.getTeacherName();
  },
  methods:{
    //获取教师信息
    getTeacherName(){
      this.$axios.get('api/teacher/getTeacherName?studentId='+this.userId)
        .then(res => {
          this.teacherNameList = res.data;
          console.log(res.data);
        })
    },
    //获取作业信息
    getHomeworkName(){
      this.$axios.get('api/homework/getStuHomeworkName?studentId=' + this.userId)
      .then(res => {
        console.log(res.data);
        for(let i = 0; i < res.data.length; i++){
          this.homeworkNameList.push(res.data[i].homeworkName);
          this.courseIdList.push(res.data[i].courseId);
        }
        this.homework = res.data;

      })
    },
    //打开添加课程弹窗
    addCourse(){
      this.dialogVisible1 = true;
    },
    //取消添加课程
    cancelAddCourse(){
      this.courseIdentifyCase = '';
      this.dialogVisible1 = false;
    },
    //加入课程
    submitAddCourse(){
      let identifyCourse = this.courseIdentifyCase;
      let selecterId = this.userId;
      const params = {
        addCode:identifyCourse,
        selecterId:selecterId
      }
      console.log("..."+selecterId);
      this.$axios.post('api/selectionCourse/selectCourse',params)
      .then(res => {
        console.log(res.data);
        if(res.data.message == '你已经选了这门课程'){
          Message.warning("你已选过此课程");
        }
        else if(res.data.message == '课程不存在'){
          Message.warning("该课程码不存在或已失效");
        }
        else{
          Message.success("加课成功");
          this.getAllCourse();
          this.getHomeworkName();
          this.courseIdentifyCase = '';
          this.dialogVisible1 = false;
        }
      })

    },
    //获取全部选课
    getAllCourse(){
      let selecterId = sessionStorage.getItem("userId");
      this.$axios.get('api/selectionCourse/getAllCourse?selecterId='+selecterId)
      .then(res =>{
        this.course = res.data.data;
        console.log(res.data);
      })
    },
    kdcgb(index){
      return "kdcgb"+index;
    },
    //跳转到课程详情页面
    jumpToCourse(id){
      sessionStorage.setItem("courseId",id);
      this.$router.push({name:'SHomework'});
    },
    //课程-更多：退课、归档
    hasKdcgd(index){
      let target = document.getElementById("kdcgb"+index);
      if(target.style.display=="none"){
        target.style.display="block";
      }
      else{
        target.style.display="none"
      }
    },
    //退课
    deleteCourse(){
      this.dialogVisible3 = true;
    },
    //取消退课
    resetDeleteKt(){
      this.deleteKt5 = '';
      this.dialogVisible3 = false;
    },
    //确认退课
    deleteKt(){
      let password = this.deleteKt5;
      this.deleteKt5 = '';
      this.dialogVisible3 = false;
    },
    //打开归档对话框
    openpigeonholeCase(){
      this.dialogVisible4 = true;
    },
    //取消归档
    cancelPigeonhole(){
      this.dialogVisible4 = false;
    },
    //确认归档
    pigeonhole(){

    }
  }
}
</script>

<style scoped>
@import url('../../assets/file/iconfont.css');
#SIndex{
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
}
.nav-default {
  z-index: 2;
  height: 65px;
  box-shadow: 0px 6px 6px rgba(80, 80, 80, 0.4);
}
.nav-menu-left {
    margin-left: 0;
    margin-top: 5px;
}
.nav-menu-item {
    margin: 10px;
    float: left;
    /* color: #FFF; */
    position: relative;
    height: 27px;
    line-height: 27px;
}
li, ul {
    list-style: none;
}
a {
    text-decoration: none;
}
.nav-menu-item a {
    font-size: 17px;
}
.nav-menu-item .ketangpaitophref img{
    display: inline-block;
    vertical-align: middle;
    padding: 2px 10px 2px 0;
    margin-top: -4px;
    margin-left: -2px;
}
.nav-menu-left .nav-menu-item a {
    padding-bottom: 22px;
    padding-left: 15px;
    padding-right: 15px;
    color: black;
}
.nav-menu-right .nav-menu-item a{
  color: black;
}
.nav-menu-item .ketangpaitophref img {
    display: inline-block;
    vertical-align: middle;
    padding: 2px 10px 2px 0;
    margin-top: -4px;
    margin-left: -2px;
}
.nav-menu-right {
    float: right;
    margin-right: 134px;
    margin-top: 5px;
}
.ktcon-left{
  float: left;
  margin-left: 56px;
    margin-top: 20px;
}
.ktcon-right{
  float: right;
  margin-top: 30px;
  margin-right: -266px;
}
.ktcon-right span{
  margin-left: 30px;
}
.el-divider /deep/.el-divider--horizontal{
  display: block;
    height: 1px;
    width: 93%;
    margin: 24px auto;
}

<!--课程列表-->
.cl {
    clear: left;
}
.ktcon2 {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    overflow: hidden;
    padding: 0px 0px 47px 20px;
}
.ktcon2 dl.ktdl1 {
    width: 270px;
    background: #fff;
    position: relative;
    border: 1px solid #E2E6ED;
    border-radius: 8px;
}
.ktcon2 dl {
    position: relative;
    margin: 10px 20px;
}
.ktcon2 dl dt {
    clear: both;
    height: 95px;
    padding-top: 18px;
    padding-bottom: 14px;
    border-radius: 4px 4px 0 0;
}
.ktcon2 dl.ktdl1.ktpx1 dt {
    background: url(/Public/Common/img/ketang_15.png) no-repeat #1066af;
    background-size: cover!important;
}
.ktcon2 dl dt strong {
    display: block;
    font-size: 20px;
    font-weight: lighter;
    color: #fff;
    height: 62px;
    margin-left: 18px;
    margin-right: 48px;
    overflow: hidden;
}
.ktcon2 dl dt strong a {
    color: #fff;
    font-size: 20px;
    line-height: 30px;
    cursor: pointer;
}
.ktcon2 dl dt strong a:hover,.ktcon2 dl dt strong a:active{

  text-decoration: underline;
}
.ktcon2 dl dt strong>span {
    display: block;
    font-size: 16px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255,255,255,1);
    line-height: 28px;
    overflow: hidden;
}
dl dt strong>span {
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ktcon2 dl dt .invitecode {
    height: 22px;
    background: rgba(255,255,255,.2);
    border-radius: 2px;
    font-size: 12px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(255,255,255,1);
    line-height: 22px;
    text-align: center;
    margin-left: 18px;
    padding-left: 2px;
    padding-right: 4px;
    margin-top: 13px;
    display: inline-block;
}
.invitecode .qrcode {
    display: block;
    float: left;
    width: 20px;
}
.iconketangma1 {
    font-size: 14px;
}
.invitecode .down-menu {
    display: block;
    float: left;
    cursor: pointer;
}
.ktpx1 .selecon {
    top: 120px;
    right: 110px;
}
.ktpx1 .selecon{
    position: absolute;
    z-index: 11;
    top: 33px;
    right: 0;
    display: none;
    width: 126px;
    padding: 5px 0;
    border: 1px solid #dcdcdc;
    background: #fff;
}
.ktpx1 .selecon ul, .topm .selecon ul {
    padding: 0;
    margin: 0;
    width: 100%;
}
.ktpx1 .selecon ul li, .topm .selecon ul li {
    padding: 0;
    margin: 0;
    display: block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #2c2c2c;
    font-size: 14px;
    cursor: pointer;
}
.hide2 {
    display: none!important;
}
.ktpx1 .selecon ul li a, .topm .selecon ul li a {
    padding: 0;
    margin: 0;
    cursor: pointer;
    line-height: 44px;
    color: #2c2c2c;
    display: block;
    width: 100%;
    height: 44px;
    text-align: center;
}
.ktcon2 dl dt .invitecode+span, .ktcon2 dl dt .time {
    float: right;
    font-size: 12px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255,255,255,1);
    padding-right: 14px;
    opacity: .5;
    display: flex;
    align-items: flex-end;
    height: 30px;
}
.learncl {
    position: absolute;
    width: 24px;
    height: 28px;
    top: 1px;
    right: 25px;
}
.learncl .squr {
    width: 0;
    height: 0;
    border-left: 10px solid #32BAF0;
    border-right: 10px solid #32BAF0;
    position: absolute;
    top: 22px;
    left: 15px;
}
.learncl .squr, .teacl .squr {
    border-bottom: 4px solid transparent;
}
.learncl .ju {
    width: 20px;
    background: #32BAF0;
    color: #fff;
}
.learncl .ju, .teacl .ju {
    line-height: 22px;
    left: 15px;
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    position: absolute;
}
.ktcon2 dl dt div.zhidings-two {
    color: rgba(153,153,153,1);
    right: 40px;
}
.ktcon2 dl dt div.zhidings {
    bottom: 8px;
    right: 52px;
    z-index: 1;
    width: 48px;
    border-radius: 2px;
}
.ktcon2 dl dt div.zhidings a {
    font-size: 12px;
    color: #A0A0A0;
}
.ktcon2 dl dt a.kdmore {
    bottom: 0;
    right: 5px;
    height: 32px;
    line-height: 32px;
}
.ktcon2 dl dt a.kdmore, .ktcon2 dl dt div.zhidings {
    position: absolute;
    display: block;
    cursor: pointer;
    text-align: center;
}
.ktcon2 dl dt a.kdmore span {
    float: left;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(44,88,171,1);
}
.ktcon2 dl dt a.kdmore i {
    display: inline-block;
    width: 10px;
    height: 100%;
    background: url("../../assets/picture/more-vertical.png") 0 9px/10px 15px no-repeat;
    margin-left: 1px;
}
.ktcon2 dl dt .kdcgd {
    display: none;
    bottom: 20px;
    right: 7px;
    width: 128px;
    background: #fff;
    padding: 5px 0;
    z-index: 2;
    box-shadow: 1px 2px 3px rgba(0,0,0,.2);
}
.ktcon2 dl dt .kdcgd, .laoshi {
    position: absolute;
    border: 1px solid #dcdcdc;
}
.ktcon2 dl dt .kdcgd li {
    cursor: pointer;
    width: 105px;
    height: 30px;
    padding-left: 23px;
    line-height: 30px;
}
.ktcon2 dl dt .kdcgd kdli3:hover,.ktcon2 dl dt .kdcgd kdli3:active{
  background: #A0A0A0;
}
.ktcon2 dl dd {
    background: #fff;
    clear: both;
    height: 141px;
    border-radius: 0 0 8px 8px;
}
.ktcon2 dl dd ul {
  position: relative;
    right: 41px;
    width: 239px;
    margin-top: 15px;
    padding: 0 16px;
    height: 105px;
    border-bottom: 1px solid rgba(226,230,237,1);
}
.ktcon2 dl dd ul li {
    height: 30px;
    line-height: 30px;
    width: 100%;
    overflow: hidden;
}
.ktcon2 dl dd ul li, .ktcon2 dl dd ul li a {
    font-size: 14px;
    color: rgba(31,32,35,1);
    font-family: PingFangSC-Medium;
    font-weight: 500;
    cursor: pointer;
}
.ktcon2 dl dd ul li a:hover,.ktcon2 dl dd ul li a:active{
  text-decoration: underline;
   color: #32BAF0;
}
.ktcon2 dl dd ul li.off span {
    font-size: 12px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(95,99,104,1);
}
.ktcon2 dl dd ul li span {
    padding-bottom: 1px;
}
.ktcon2 dl dd .ddfoot {
    width: 80%;
    position: absolute;
    bottom: 4px;
    left: 16px;
    right: 16px;
}
.user-avatar-area {
    height: 25px;
    line-height: 25px;
    float: left;
}
.user-avatar-area img {
    border: 2px solid #fff;
}
.user-avatar-area img {
    width: 20px;
    height: 20px;
    display: inline-block;
    border-radius: 50%;
}
.user-avatar-area .teachername {
    height: 25px;
    line-height: 25px;
    margin-left: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
}
.user-avatar-area .teachername, .user-avatar-area+a {
    font-size: 12px;
    color: rgba(95,99,104,1);
    font-family: PingFangSC-Medium;
    font-weight: 500;
}
/*删除课程*/
.deleteKt /deep/.el-dialog__header{
  padding: 0;
}
.deleteKt /deep/ .el-dialog__body{
  padding: 0px 20px;
}
.pigeonhole /deep/ .el-dialog__body{
  padding: 10px 20px;
}
.deleteKt1{
    color: #a9a9a9;
    font-size: 18px;
}
.deleteKt2{
  line-height: 32px;
    color: #2d2d2d;
    font-size: 14px;
}
.deleteKt6{
  margin-top:20px;
  margin-left: 250px;
}
#viewer-container-lists{
  margin-left: 33px;
}
</style>
