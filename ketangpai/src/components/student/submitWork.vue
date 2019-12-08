<template>
<div>
  <div id="workinfo">
    <div class="header">
      <div class="header-left">
        <span class="header-icon" @click="jumpToHomework"><i class="iconfont iconfanhui" style="font-size:38px;color:#5F6368;"></i></span>
        <span class="courseName" @click="jumpToHomework">六级英语</span>
      </div>
      <div class="header-center">
        <span>提交作业</span>
        <span>作业讨论</span>
      </div>
      <div class="header-right">
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>
  </div>
  <div class="gWidth cWidth-new">
    <div class="work-title clearfix">
      <h3 title="英语翻译">英语翻译</h3>
      <p>截至日期：<span>19/12/21</span><span>23:59</span></p>
      <p>个人作业</p>
      <p title="温馨提醒：所有个人作业均需要查重">需要查重</p>
      <p class="whohandup"><i class="iconfont iconchengyuantuikexinxi1"></i>查看谁交了</p>
    </div>
  </div>
  <div class="viewer-handup cWidth-new">
    <div class="sc-tj-box" >
      <span style="float:left"><el-button type="primary">提交</el-button></span>
      <span style="float:right;font-size:14px;color:#2d2d2d;">未完成</span>
    </div>
  </div>
  <div class="homework-box cWidth-new" >
    <div class="uploadbox">

    </div>
    <div class="workMessage">
      <span class="s1">作业留言:</span>
      <span class="s2">点击添加留言(仅老师可见)...</span>
    </div>
  </div>
  <div class="homework-log cWidth-new">
    <span class="log1">查看提交日志></span>
  </div>
</div>
  
</template>

<script>
export default {
  name: 'SubmitWork',
  data(){
    return{

    }
  },
  methods:{
    //跳转到作业页面
    jumpToHomework(){
      this.$router.push({name:'SHomework'});
    }
    
  }
}
</script>

<style scoped>
@import url('../../assets/file/iconfont.css');
#workinfo{
  font-size: 14px;
    font-family: 'PingFang SC',tahoma,arial,'helvetica neue','hiragino sans gb','microsoft yahei ui','microsoft yahei',simsun,sans-serif;
    background: #fff;
    color: #2d2d2d;
}
.header{
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.04);
  background: none repeat scroll 0% 0% #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 45px;
}
.header-icon{
  cursor: pointer;
}
.courseName{
  background: #2c58ab;
  color: white;
  padding: 6px 20px;
  border-radius: 16px;
  font-size: 14px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  position: relative;
  bottom: 16px;
  right: 45px;
  cursor: pointer;
}
.header-left{
  position: relative;
    left: 50px;
}
.header-right{
  position: relative;
    right: 100px;
    
}
.header-center span{
  height: 74px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(59,61,69,1);
  padding-bottom: 20px;
  cursor: pointer;
    
}
.header-center span:hover{
  border-bottom: 4px solid #2C58AB;
}
.cWidth-new {
    width: 1224px;
    margin: 30px auto;
}
.work-title h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 650px;
}
.work-title p {
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    margin-right: 10px;
    margin-bottom: 40px;
    background-color: #F1F3F4;
    color: #5F6368;
    border-radius: 2px;
    float: left;
}
.mywork-page .work-title p span {
    margin-right: 8px;
}
.work-title .whohandup {
    display: inline-block;
    margin: 0;
    color: #5F6368;
    background: 0 0;
    cursor: pointer;
    font-size: 14px;
    float: right;
}
.work-title .whohandup i {
    vertical-align: middle;
    padding-right: 10px;
    font-size: 14px;
}
.clearfix {
    zoom: 1;
}
.sc-tj-box{
  margin-top: 95px;
}
.homework-box{
  border: 1px solid #E2E6ED;
    background: #FFF;
    border-radius: 8px;
    position: relative;
    top:65px;
}
.uploadbox{
  height: 80px;
}
.workMessage{
  height: 80px;
  border-top: 1px solid #dcdcdc;
  background: #F1F3F4;
  position: relative;
  top: 50px;
}
.s1 {
    font-size: 14px;
    width: 100px;
    padding-right: 35px;
    text-align: right;
    color: #010000;
    float: left;
        position: relative;
    top: 32px;
}
.s2 {
    float: left;
    font-size: 14px;
    color: #818181;
    width: 685px;
    word-break: break-all;
    word-wrap: break-word;
        position: relative;
    top: 32px;
}
.log1{
  color: #32BAF0;
  font-size: 14px;
  cursor: pointer;
}
.homework-log{
  position: relative;
  top: 100px;
}
</style>