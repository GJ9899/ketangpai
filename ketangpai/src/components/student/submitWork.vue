<template>
<div>
  <div id="workinfo">
    <div class="header">
      <div class="header-left">
        <span class="header-icon" @click="jumpToHomework"><i class="iconfont iconfanhui" style="font-size:38px;color:#5F6368;"></i></span>
        <span class="courseName" @click="jumpToHomework">{{ course.courseName }}</span>
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
      <h3>{{ homework.homeworkName}}</h3>
      <p>截止日期：<span>{{ homework.endDate}}    {{ homework.endTime}}</span></p>
      <p>个人作业</p>
      <p v-if="homework.needCheck == 'true'">需要查重</p>
      <p class="whohandup"><i class="iconfont iconchengyuantuikexinxi1"></i>查看谁交了</p>
    </div>
  </div>
  <div class="viewer-handup cWidth-new">
    <div class="sc-tj-box" >
      <span style="float:left">
        <el-button type="primary" @click="addFile" v-if="state == '未完成'">提交</el-button>
        <el-button type="primary" @click="" v-if="state == '已提交'">更新提交</el-button>
      </span>
      <span style="float:right;font-size:14px;color:#2d2d2d;" v-if="state == '未完成'">未完成</span>
      <span style="float:right;font-size:14px;color:#2d2d2d;" v-if="state == '已提交'">已提交</span>
    </div>
  </div>
  <div class="homework-box cWidth-new" >
    <div class="uploadbox">
      <div  v-if="state == '已提交'" style="padding-top: 30px">
        <el-image :src="picUrl" style="width:100px;height: 100px"></el-image>
      </div>
      <div style="position: relative;top: 20px;" v-if="state == '未完成'">
        <input type="file" id="saveFile" accept="image/png,image/gif,image/jpeg,.xls,.doc,.txt,.pdf,.docx" ref="new_file" style="width: 350px">
        <input type="text" hidden id="hiddenContent" v-model="fileAddress">
      </div>
      <!--<div>-->
        <!--<el-image :src="picUrl" style="width:100px;height: 100px"></el-image>-->
      <!--</div>-->
    </div>
    <div class="workMessage">
      <span class="s1">作业留言:</span>
      <span class="s2">
        <el-input placeholder="点击添加留言(仅老师可见)..." v-model="message" v-if="state == '未完成'"></el-input>
        <el-input :placeholder="showMessage" v-model="returnMessage" v-else readonly></el-input>
      </span>
    </div>
  </div>
  <div class="homework-log cWidth-new">
    <span class="log1">查看提交日志></span>
  </div>
</div>

</template>

<script>
  import {Message} from 'element-ui'
export default {
  name: 'SubmitWork',
  data(){
    return{
      course:{
        id:'',
        courseName:'',
        className:'',
        year:'',
        semester:''
      },
      homework:{
        id:'',
        homeworkName:'',
        endDate:'',
        endTime:'',
        needCheck:''
      },
      message:'',
      fileAddress:'',
      state:'未完成',
      picUrl:'',
      returnMessage:'',
    }
  },
  mounted(){
    //获取课程信息
    this.getCourse();
    //获取作业信息
    let homeworkId = sessionStorage.getItem("homeworkId");
    this.getHomework(homeworkId);
    this.getSubmitFile();
  },
  methods:{
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    showMessage(){
      return ""+this.returnMessage;
    },
    addFile: function () {
      let self = this;

      if (self.$refs.new_file.files.length !== 0) {
        let formData = new FormData();
        formData.append('file_data', self.$refs.new_file.files[0]);
        console.log(formData);
        //单个文件进行上传
        this.$axios.post('api/grade/uploadFile',formData)
          .then(res => {
              let fileAddress = res.data;
              self.fileAddress = fileAddress;
              this.submitHomework();
            console.log(res.data);
          });
      }
      else{
        Message.warning("请选择文件");
      }
    },
    //提交作业
    submitHomework(){
      let homeworkId = sessionStorage.getItem("homeworkId");
      let studentId = sessionStorage.getItem("userId");
      let fileAddress = this.fileAddress;
      let message = this.message;
      let submitTime = this.formatDate1(new Date());
      const params ={
        homeworkId:homeworkId,
        studentId:studentId,
        submitTime:submitTime,
        message:message,
        fileAddress:fileAddress
      };
      console.log(params);
      this.$axios.post('api/grade/submitHomework',params)
        .then(res => {
          if(res.data.message == 'success'){
            this.state = '已提交';
            this.message = '';
            Message.success("提交成功");
            this.getSubmitFile();
          }
          else{
            Message.warning("提交失败");
          }
          console.log(res.data.message);
        })
    },
    //获取已提交的作业
    getSubmitFile(){
      const params = {
        homeworkId:sessionStorage.getItem("homeworkId"),
        userId:sessionStorage.getItem("userId")
      };
      console.log(params);
      this.$axios.post('api/grade/getFileAddress',params)
        .then(res => {
          if(res.data != ''){
            if(res.data.message == ''){
              this.returnMessage = '';
            }
            else{
              this.returnMessage = res.data.message;
            }
            this.picUrl=res.data.fileAddress;
            this.state = '已提交';
          }

          console.log("...."+res.data.message);
        })
    },
    //格式化时间
    formatDate1(date){
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      if(month < 10){
        month = "0" + month;
      }
      if(day < 10){
        day = "0" + day;
      }
      let hour = date.getHours();
      if(hour < 10){
        hour = "0" + hour;
      }
      let minute = date.getMinutes();
      if(minute < 10){
        minute = "0" + minute;
      }
      let second = date.getSeconds();
      if(second < 10){
        second = "0" + second;
      }
      return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    },
    //跳转到作业页面
    jumpToHomework(){
      sessionStorage.setItem("homeworkId",'');
      this.$router.push({name:'SHomework'});
    },
    //获取课程信息
    getCourse(){
      let courseId = sessionStorage.getItem("courseId");
      this.$axios.get('api/course/getCourseById?id='+courseId)
      .then(res =>{
        this.course = res.data;
        // console.log(res.data);
      })
    },
    //获取作业信息
    getHomework(homeworkId){
      this.$axios.get('api/homework/getSubHomeworkbyId?homeworkId='+homeworkId)
      .then(res => {
        this.homework = res.data;
        // console.log(res.data);
      })
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
  height: 103px;
}
.workMessage{
  height: 80px;
  border-top: 1px solid #dcdcdc;
  background: #F1F3F4;
  position: relative;
  top: 82px;
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
    top: 20px;
}
.log1{
  color: #32BAF0;
  font-size: 14px;
  cursor: pointer;
}
.homework-log{
  position: relative;
  top:135px;
}
  .el-upload /deep/.el-upload--picture-card{
    width: 90px;
    height: 90px;
    line-height: 102px;
  }
</style>
