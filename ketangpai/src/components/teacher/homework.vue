<template>
  <div>
    <!--顶部-->
    <div class="top">
      <div class="top-left">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="display">
          <el-breadcrumb-item :to="{ path: '/teacher/index' }">课堂</el-breadcrumb-item>
          <el-breadcrumb-item>{{ course.courseName}}  {{ course.className}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="top-right">
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
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
          <h1 class="display" style="position:relative;top:20px">{{ course.courseName}}</h1>
          <img src="../../assets/picture/edit-course.png" class="topm-2-img display">
          <h2>{{ course.className}}</h2>
          <div class="topm-box" style="float:left;margin-top: -8px;margin-left: -5px;">
            <span class="sele">
              <span><img src="../../assets/picture/qrcodehover.png" class="box-img1"></span>
              <span class="box-word">加课二维码</span>
            </span>
            <span class="sele">
              <span class="box-word">加课码:{{course.addCode}}</span>
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
      <span class="nav" @click="">作业</span>
      <span class="nav" @click="">话题</span>
      <span class="nav" @click="">资料</span>
      <span class="nav" @click="">测试</span>
      <span class="nav" @click="">公告</span>
    </div>

    <div class="cWidth-title" style="color:#32BAF0;width:1224px;height:80px;margin:auto">
      <span class="send-an">发布个人作业</span>
      <span class="send-an" style="margin-left:15px">发布小组作业</span>
      <span style="float:right;margin-top:60px;cursor:pointer">
        <span><i class="iconfont iconxiazai"></i></span>
        <span>下载所有作业</span>
      </span>
    </div>

    <div class="homework-list" v-for="(item,index) in Array.prototype.reverse.call(homeworkList)">
      <div style="margin: 23px 45px;">
        <div style="float:left">
          <div class="type-left">
          <span style="background:#F1F3F4;padding: 2px 4px;">个人作业</span>
          <span style="margin-left:15px">{{ item.publishTime}}</span>
          <!-- <span style="margin-left:15px">20:58</span> -->
        </div>
        <div class="type-right">
          <el-popover
            placement="bottom-end"
            width="150">
            <ul class="right-more">
              <li>编辑</li>
              <li>保存到</li>
              <li>删除</li>
            </ul>
            <el-button slot="reference" class="more"><i class="el-icon-more"></i></el-button>
          </el-popover>
        </div><br>
        <div class="homework-title" @click="jumpToHomeworkId">{{ item.homeworkName}}</div>
        <div style="margin-top:10px;color:#707070;font-size:14px">{{ item.introduce }}</div>
        <div class="homework-end">
          <span>截止日期：</span>
          <span>{{ item.endDate }}</span>
          <span>{{ item.endTime }}</span>
          <span class="commend">0条讨论</span>
        </div>
        </div>
        
        <div style="float:right">
          <div class="homework-info" >
              <ul>
                  <li class="info-count count1">0</li>
                  <li class="info-tit">已批</li>
              </ul>
              <ul>
                  <li class="info-count">1</li>
                  <li class="info-tit" style="color:red">未批</li>
              </ul>
              <ul>
                  <li class="info-count count2">0</li>
                  <li class="info-tit">未交</li>
              </ul>
            </div>
          </div>
        </div>
        
    </div>
  </div>
</template>
<script>
  export default {
    name: 'homework',
    data () {
      return {
        id:'',
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
        homeworkList:{}
      }
    },
    mounted(){
      let id = this.$route.params.id;
      this.id = id;
      console.log("id=" + id);
      this.$axios.get('api/course/getCourseById?id='+id)
      .then(res =>{
        this.course = res.data;
      })
      //获取课程作业
      this.getHomework(this.id);
    },
    methods: {
      //获取课程作业
      getHomework(id){
        this.$axios.get('api/homework/getHomeworkById?id='+id)
        .then(res =>{
          console.log(res.data);
          this.homeworkList = res.data;
        })
      },
      //进入作业详情
      jumpToHomeworkId(){
        this.$router.push({name:'WorkInfo'});
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
.coursedata ul li{
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
  padding:22px 36px;
  color: #818181;
}
.nav:hover{
  color: #328eeb;
  border-bottom: 4px solid #328eeb;
}
.send-an{
  border: 1px solid #32BAF0;
  border-radius: 4px;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  top: 48px;
  float: left;
}
.homework-list{
  width: 1224px;
  height: 193px;
  border: 1px solid #E2E6ED;
  border-radius: 8px;
  margin: 40px auto;
}
.homework-info ul{
  display: inline-block;
  cursor: pointer;
  margin-left: 10px;
  text-align: center;
  padding: 43px 25px;
}
.homework-info ul li{
  list-style: none;
  display: block;
}
.type-left{
  float: left;
}
.type-right{
  float:right;
  position: relative;
    left: 906px;
    bottom: 10px;
    cursor: pointer;
}
.right-more{
  padding-left: 0px;
}
.right-more li{
  list-style: none;
  display: block;
  padding: 10px 53px;
  cursor: pointer;
}
.right-more li:hover{
  background-color: #dcdcdc;
}
.more{
  border:0 solid white;
  background-color: white;
}
.type-left span{
  font-size: 14px;
  color: #5F6368;
}
.homework-title{
  color: #3B3D45;
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;
  cursor: pointer;
}
.homework-title:hover{
  text-decoration: underline;
}
.homework-end{
  color: #A0A0A0;
  font-size: 14px;
  margin-top: 30px;
}
.info-count{
  font-size: 30px;
  height: 44px;
  color: #707070;
}
.info-tit{
  font-size: 14px;
  height: 26px;
  color: #707070;
}
.count1:hover{
  color: green;
}
.count2:hover{
  color:red;
}
.commend{
  cursor: pointer;
  margin-left: 20px;
}
.commend:hover{
  color:#32BAF0;
}
el-popoper{
  padding: 1px;
  
}
el-popper[x-placement^=bottom] {
  margin-top: 1px;
}
</style>

