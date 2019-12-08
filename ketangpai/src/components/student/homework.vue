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
        <span style="position:relative;bottom:6px;right:20px;cursor:pointer">
          <span><i class="el-icon-document"></i></span>
          <span>论文查重</span>
        </span>
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>
    <div class="course-header">
      
      <div class="topm-2">
        <div class="topmall" style="margin-left:40px">
          <h1 class="display" style="position:relative;top:20px">六级英语</h1>
          <img src="../../assets/picture/edit-course.png" class="topm-2-img display">
          <h2>117030803</h2>
          <div class="topm-box" style="float:left;margin-top: -8px;margin-left: -5px;">
            <!-- <span class="sele">
              <span><img src="../../assets/picture/qrcodehover.png" class="box-img1"></span>
              <span class="box-word">加课二维码</span>
            </span> -->
            <span class="sele">
              <span class="box-word">加课码:7E995H</span>
              <span><i class="iconfont iconzhucebuchongxinxidanchuang-xiala"></i></span>
            </span>
            <span class="sele" @click="jumpToClassmate">
              <span><i class="iconfont iconchengyuan"></i></span>
              <span class="box-word">同学 2</span>
            </span>
            <!-- <span class="sele">
              <span><i class="iconfont iconshujufenxi"></i></span>
              <span class="box-word">数据分析</span>
            </span> -->
            <span class="sele" @click="jumpToGrade">
              <span><img src="../../assets/picture/A+icon.png" style="width:14px;height:14px;position:relative;top:2px"></span>
              <span class="box-word">成绩</span>
            </span>
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

    <!--作业列表-->
    <div class="homework-cont width980">
      <div class="homework-list">
        <div class="homework-list clearfix" data-id="MDAwMDAwMDAwMLScy5iIqdFp">
          <div class="homework-box">
            <div class="announce-cont-box">
              <div class="title clearfix">
                <div class="work-type fl" data-time="1573971575">
                  <span>个人作业</span>
                  <span>19/11/17</span>
                  <span>14:19</span>  
                </div>
              </div>
              <div class="announce-cont clearfix" style="position: relative;">
                <div class="work-new-l fl">
                  <h3 class="work-title "><a title="JavaEE大作业" @click="jumpToSubmit">JavaEE大作业</a></h3>
                  <div class="word">
                    <div class="p">基本要求：1. 每位学生独立完成作业，不得抄袭代码。如果不能清楚的解释代码，则被视为抄袭。2. 作业的功能、交互设计、业务逻辑可以参考课堂派，但不要求完全一样。课堂派的功能也不需要完全实现，但是经过简... <a style="color:#318ECB;cursor:pointer">查看全文&gt;</a></div>
                  </div>
                  <div class="annex">
                    <ul class="clearfix">
                      <li data-id="MDAwMDAwMDAwMLOctZSGuc1rhc6goQ" data-size="2.82MB">
                        <a data-name="JavaEE大作业要求V0.2.docx" data-url="/PluginApp/to/id/MDAwMDAwMDAwMLOctZSGuc1rhc6goQ/expires/4697513221/sign/e24d4b5ed3d250468784ba5c6e6e36c8ed6c2924.html" data-popurl="" data-down="/File/download/id/MDAwMDAwMDAwMLOctZSGuc1rhc6goQ/expires/4697513221/sign/e24d4b5ed3d250468784ba5c6e6e36c8ed6c2924.html" data-ispic="" data-isvideo="" data-isonline="" data-issb="" class="fileext preview">
                          <img src="../../assets/picture/file_ext_big_docx.png" data-src="">
                        </a>
                        <h4>
                          <a data-name="JavaEE大作业要求V0.2.docx" data-url="/PluginApp/to/id/MDAwMDAwMDAwMLOctZSGuc1rhc6goQ/expires/4697513221/sign/e24d4b5ed3d250468784ba5c6e6e36c8ed6c2924.html" data-popurl="" data-src="" data-ispic="" data-isvideo="" data-isonline="" data-issb="" class="fileext preview" title="JavaEE大作业要求V0.2.docx">
                            JavaEE大作业要求V0.2.docx
                          </a>
                        </h4>
                        <a class="download">下载</a>
                        </li>     
                    </ul>
                  </div>
                </div>
                
              </div>
              <div class="comment-new ">
                <p data-time="1577030340">截止日期：<span>19/12/22</span><b>23:59</b></p>
                <a>
                  <span>0条讨论</span>
                </a>
              </div>
            
            </div>
            <div class="uploadwork"><el-button type="primary" @click="jumpToSubmit">上传作业</el-button></div>
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
      }
    },
    methods: {
      //进入作业详情
      jumpToHomeworkId(){
        this.$router.push({name:'WorkInfo'});
      },
       //跳转到课堂成员页面
      jumpToClassmate(){
        this.$router.push({name:'SClassmate'});
      },
      //跳转到提交作业页面
      jumpToSubmit(){
        this.$router.push({name:'SubmitWork'});
      },
      //跳转到成绩页面
      jumpToGrade(){
        this.$router.push({name:'SGrade'});
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
<!--作业列表-->
.homework-page .width980 {
    width: 1224px;
    margin-left: auto;
    margin-right: auto;
}
.homework-cont {
    margin-top: 20px;
}
.clearfix {
    zoom: 1;
}
.homework-box {
    padding: 0 20px 0 40px;
    border: 1px solid #E2E6ED;
    border-radius: 8px;
    background: #FFF;
    height: 316px;
    width: 1166px;
    margin: 20px auto;
}
.announce-cont-box {
    padding-right: 30px;
    padding: 0 0 20px;
}
.title .work-type {
    padding: 21px 0 0;
}
.announce-cont-box .title .work-type {
    color: #AAA;
    font-size: 0;
    padding: 21px 0 10px;
    line-height: 30px;
}
.fl {
    float: left;
}
.announce-cont-box .title .work-type span:first-child {
    color: #5F6368;
    background: #F1F3F4;
    padding: 3px 5px;
    border-radius: 2px;
}
.announce-cont-box .title .work-type span {
    font-size: 14px;
    margin-right: 15px;
    color: #5F6368;
}
.work-new-l {
    margin-right: 145px;
}
.work-title a {
    line-height: 38px;
        position: relative;
    bottom: 30px;
        color: #3B3D45;
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;
}
.work-title a:hover,.work-title a:active{
  color: #409EFF;
  text-decoration: underline;
}
page .announce-cont-box .announce-cont .word {
    height: auto;
    overflow: auto;
    max-height: inherit;
}
.announce-cont-box .announce-cont .word .p, .announce-cont-box .announce-cont .work-time {
    color: #707070;
    overflow: hidden;
    line-height: 1.8;
    font-size: 14px;
        position: relative;
    bottom: 48px;

}
.announce-cont-box .announce-cont .annex li h4 a {
    display: block;
    font-size: 12px;
    color: #2c2c2c;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 20px;
        position: relative;
    bottom: 24px;
}
.homework-page .announce-cont-box .announce-cont .annex, .homework-page .announce-cont-box .announce-cont .word {
    height: auto;
    overflow: auto;
    max-height: inherit;
}
.announce-cont-box .announce-cont .annex li {
    width: 92px;
    float: left;
    text-align: center;
    height: 110px;
    position: relative;
    bottom: 58px;
    right: 38px;
}
.announce-cont-box .announce-cont .annex li img {
    width: 64px;
    height: 64px;
}
.announce-cont-box .announce-cont .annex li .download {
    color: #4d90fe;
    font-size: 12px;
    display: none;
    line-height: 24px;
}
.homework-cont .homework-list .homework-box .announce-cont-box .work-new-r {
    position: absolute;
    bottom: 0;
    right: 0;
}
.homework-cont .homework-list .homework-box .announce-cont-box .work-new-r a.sc-btn {
    background: #32BAF0;
}
.comment-new {
    height: 20px;
    line-height: 20px;
}
.comment-new p {
    padding-right: 10px;
    float: left;
    margin-right: 20px;
    margin-top: -40px;
    color: #A0A0A0;
}
.comment-new p b {
    font-weight: 400;
    margin-left: 10px;
}
.comment-new a{
    float: left;
    color: #A0A0A0;
        position: relative;
    bottom: 40px;
    left: 232px;
    cursor: pointer;
}
.comment-new a:hover{
  color: #4d90fe;
}
li{
  list-style: none;
}
.uploadwork{
      position: relative;
    bottom: 100px;
    right: 50px;
    float: right;
}
</style>

