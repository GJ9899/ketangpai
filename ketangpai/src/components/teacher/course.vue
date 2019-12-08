<template>
  <div>
    <!--顶部-->
    <div class="top">
      <div class="top-left">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="display">
          <el-breadcrumb-item :to="{ path: '/' }">课堂</el-breadcrumb-item>
          <el-breadcrumb-item>六级英语  117030803</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="top-right">
        <span><i class="iconfont iconxiaoxi1"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>
    <div class="course-header">
      <div class="topm-1">
        <span><img src="../../assets/picture/theme.png"></span>
        <span>更改背景</span>
      </div>
      <div class="topm-2">
        <div class="topmall" style="margin-left:40px">
          <h1 class="display" style="position:relative;top:20px;">六级英语</h1>
          <img src="../../assets/picture/edit-course.png" class="topm-2-img display">
          <h2>117030803</h2>
          <div class="topm-box" style="float:left;margin-top: -8px;margin-left: -5px;">
            <span class="sele">
              <span><img src="../../assets/picture/qrcodehover.png" class="box-img1"></span>
              <span class="box-word">加课二维码</span>
            </span>
            <span class="sele" >
              <span class="box-word">加课码:7E995H</span>
              <span><i class="iconfont iconzhucebuchongxinxidanchuang-xiala"></i></span>
            </span>
            <span class="sele" @click="jumpToCourseMember">
              <span><i class="iconfont iconchengyuan"></i></span>
              <span class="box-word">成员 2</span>
            </span>
            <span class="sele">
              <span><i class="iconfont iconshujufenxi"></i></span>
              <span class="box-word">数据分析</span>
            </span>
            <span class="sele">
              <span><img src="../../assets/picture/A+icon.png" style="width:14px;height:14px;position:relative;top:2px"></span>
              <span class="box-word">成绩</span>
            </span>
          </div>
          <div class="coursedatabox" style="float: right">
            <div class="coursedata" style="margin-right:30px;margin-top: -10px;">
              <ul>
                  <li style="display:block">0</li>
                  <li>互动个数</li>
              </ul>
              <ul>
                  <li style="display:block">1</li>
                  <li>发布作业</li>
              </ul>
              <ul>
                  <li style="display:block">0</li>
                  <li>发布测试</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <span class="nav" @click="">课堂互动</span>
      <span class="nav" @click="jumpToHomework">作业</span>
      <span class="nav" @click="">话题</span>
      <span class="nav" @click="">资料</span>
      <span class="nav" @click="">测试</span>
      <span class="nav" @click="">公告</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'course',
    data () {
      return {
      }
    },
    methods: {
      //跳转到作业页面
      jumpToHomework(){
        this.$router.push({name:'Homework'});
      },
      //跳转到课堂成员页面
      jumpToCourseMember(){
        this.$router.push({name:'CourseMember'});
      }
    }
  }
</script>


<style scoped>
@import url('../../assets/file/iconfont.css');
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.display{
  display:inline-block;
}
.top{
  display: flex;
  justify-content: space-between;
  margin: 30px 70px;
  /* width: 100%; */
    /* position: fixed;
    top: 0;
    background: #fff;
    padding-right: 5%;
    z-index: 5; */
}
.course-header{
  background: url("../../assets/picture/40.png");
  width: 1224px;
  height: 200px;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.topm-1{
  float: right;
  margin-top: 10px;
  margin-right: 15px;
  color: white;
  cursor: pointer;
}
.topm-1 span img{
  width: 20px;
  height: 17px;
  position: relative;
  top: 2px;
}
.topm-2 h1{
  font-size: 36px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topm-2-img{
  position: relative;
  top: -13px;
  left: 10px;
  width: 24px;
  height: 24px;
}
.topm-2 h2{
    font-size: 20px;
    font-family: PingFang SC;
    color: rgba(255,255,255,1);
    width: 600px;
    font-weight: 500;
    position: relative;
    bottom: 18px;
}
.box-img1{
  width: 15px;
  height: 16px;
  position: relative;
  top: 4px;
}
.box-word{
  color: #fff;
  font-size: 12px;
  height: 24px;
}
.sele{
  margin-left: 6px;
  font-size: 15px;
    color: #fff;
    text-align: left;
    padding: 3px 10px;
    line-height: 24px;
    cursor: pointer;
    background: rgba(255,255,255,.4);
    border-radius: 2px;
    width: 90px;
    background-size: 14px auto;
}
.coursedatabox .coursedata ul {
    margin-top: -50px;
}
.coursedatabox .coursedata ul li:first-of-type {
    font-size: 40px;
    line-height: 48px;
    height: 50px;
    margin-left: 11px;
}
.coursedatabox .coursedata ul li+li {
    font-size: 12px;
    line-height: 16px;
    width: 80px;
}
li{
  list-style: none;
  display: block;
  color: #fff;
}
.coursedata ul{
  display: inline-block;
}
.menu{
  width: 1191px;
  height: 72px;
  margin: 0 auto;
  padding-left: 35px;
  text-align: left;
  box-shadow: none;
  background: #F1F3F4;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.nav{
  cursor: pointer;
  margin-left: 10px;
  position: relative;
  top: 25px;
  padding:25px 36px;
  color: #818181;
}
.nav:hover{
  color: #328eeb;
  border-bottom: 4px solid #328eeb;
}
</style>

