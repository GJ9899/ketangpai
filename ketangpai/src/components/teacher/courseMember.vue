<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span class="header-icon" @click="jumpToHomework"><i class="iconfont iconfanhui" style="font-size:38px;color:#5F6368;"></i></span>
        <span class="courseName">六级英语</span>
      </div>
      <div class="header-center">
        <span>成员</span>
        <span>学生分组</span>
        <span>成绩</span>
      </div>
      <div class="header-right">
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>

    <div class="member-title">
      <div class="title-left">
        <span class="import">导入成员</span>
        <span class="titleW">
          <span><i class="iconfont iconxiazaibaobiao"></i></span>
          <span >下载成员信息</span>
        </span>
        <span class="titleW">
          <span><i class="iconfont iconchengyuantuikexinxi1"></i></span>
          <span>成员退课记录</span>
        </span>
      </div>
      <div class="title-right">
        <el-input
          class="el-input"
          placeholder="姓名、学号"
          suffix-icon="el-icon-search"
          v-model="input2">
        </el-input>
      </div>
    </div>
    
    <div class="member-cont">
      <div class="box-l">
        <div class="box-group" @click="displayTeam">教学团队(1)</div>
        <div class="box-group" @click="displayStudent">全部学生(学生2)</div>
      </div>
      <!--全部学生-->
      <div class="box-r" v-model="role" v-if="this.role=='student'">
        <div class="r-name">
          <div><p style="margin-left:20px;color: rgba(59,61,69,1);">全部学生(学生2)</p></div>
          <div style="padding-right:30px;padding-top: 15px;">
            <span style="padding-right:20px"><el-checkbox v-model="limit">人数限制</el-checkbox></span>
            <span>
              <el-switch
                v-model="retire"
                active-text="不允许退课">
              </el-switch>
            </span>
          </div>
        </div>
        <!--操作-->
        <div class="batchdelete">
          <span><el-checkbox v-model="checkAll"  class="btn_cbatch"></el-checkbox></span>
          <span class="checkAll">本页全选，已选(0)人</span>
          <span><el-button type="info" class="btn_delete_checked">删除成员</el-button></span>
          <span><el-button type="info" class="btn_message_checked">群发私信</el-button></span>
        </div>
        <!--成员列表-->
        <div class="data">
          <span style="position:relative;bottom:5px"><el-checkbox v-model="checkAll"  class="btn_cbatch"></el-checkbox></span>
          <span><img src="../../assets/picture/25.png" class="avator"></img></span>
          <span class="stuno">11703080320</span>
          <span class="name">sunqin</span>
          <span class="mail">1370097791@qq.com</span>
          <span class="natureclass">117030803</span>
          <span class="createtime">19/11/29 21:15</span>
          <span class="opt">
            <span style="cursor:pointer"><img src="../../assets/picture/sixin.png"></span>
            <span style="margin-left: 15px;cursor:pointer"><i class="el-icon-more"></i></span>
          </span>
        </div>
      </div>
      <!--教师团队-->
      <div class="box-r teacherTeam" v-model="role"  v-if="this.role =='team'">
        <div class="r-name">
          <div><p style="margin-left:20px;color: rgba(59,61,69,1);">教学团队(老师1)</p></div>
          <div><el-button type="primary" icon="el-icon-user-solid" class="addTeacher">添加助教/老师</el-button></div>
        </div>
        <div class="data">
          <span><img src="../../assets/picture/25.png" class="avator" style="margin-left:40px"></img></span>
          <span class="name">刘桂君</span>
            <span class="mail" style="margin-left:280px">1370097791@qq.com</span>
            <span class="identity">(管理员)</span>
            <span class="opt1">
              <span style="cursor:pointer"><img src="../../assets/picture/sixin.png"></span>
              <span style="margin-left: 15px;cursor:pointer"><i class="el-icon-more"></i></span>
            </span>
          </div>
      </div>
    </div>
    <div style="height:150px">

    </div>
  </div>

  </div>
</template>

<script>
export default {
  name:'courseMember',
  data(){
    return{
      input2:'',
      limit:false,
      retire:false,
      checkAll:false,
      role:'student'
    }
  },
  methods:{
    //显示教学团队
    displayTeam(){
      this.role = 'team';
    },
    //显示全部学生
    displayStudent(){
      this.role = 'student';
    },
    //跳转到作业
    jumpToHomework(){
      this.$router.push({name:'Homework'});
    }
  }
}
</script>

<style scoped>
@import url('../../assets/file/iconfont.css');
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
.member-title{
  width: 1224px;
  margin: 25px auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 0 0 rgba(226,230,237,1);
}
.import{
  padding: 6px 23px;
  height: 32px;
  text-align: center;
  border-radius: 4px;
  background: #32BAF0;
  color: #FFF;
  font-size: 14px;
  cursor: pointer;
}
.titleW{
  color: #5F6368;
  margin-left: 20px;
  cursor: pointer;
}
.el-input /deep/ .el-input__inner{
  height: 30px;
  width: 176px;
}
.member-cont{
  width: 1232px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.box-l{
  width: 286px;
  height: 600px;
  border: 1px solid rgba(226,230,237,1);
  border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  position: relative;
    left: 5px;
}
.box-r{
  width: 937px;
  height: 600px;
  border: 1px solid rgba(226,230,237,1);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.box-group{
  height: 55px;
    line-height: 55px;
    padding: 0 24px;
    cursor: pointer;
    font-weight: 500;
    color: rgba(59,61,69,1);
}
.box-group:hover{
  background: 	#B0C4DE;
}
.r-name{
  display: flex;
  justify-content: space-between;
  height: 55px;
  background: rgba(241,243,244,1);
    border-radius: 0 8px 0 0;
}
.batchdelete{
  height: 55px;
  border-bottom: 1px solid rgba(226,230,237,1);
}
.btn_cbatch{
  margin-left: 30px;
  margin-top: 20px;
}
.checkAll{
  font-size: 14px;
    color: #2d2d2d;
    margin-left: 16px;
}
.btn_delete_checked{
      margin-left: 10px;
    width: 100px;
    height: 30px;
    padding-top: 8px;
    background: #ddd;
    opacity: 1;
    border: none;
    color: #fff;
}
.btn_message_checked{
      margin-left: 10px;
    width: 100px;
    height: 30px;
    padding-top: 8px;
    background: #ddd;
    opacity: 1;
    border: none;
    color: #fff;
}
.data{
  height: 60px;
}
.data:hover{
  background: rgba(241,243,244,1);
}
.avator{
      width: 40px;
    height: 40px;
    margin-left: 20px;
    position: relative;
    top: 10px;

}
.stuno{
  margin-left: 32px;
    font-size: 14px;
    position: relative;
    bottom: 3px;
}
.name{
  font-size: 14px;
    margin-left: 26px;
    position: relative;
    bottom: 3px;
}
.mail{
      font-size: 14px;
    margin-left: 55px;
    position: relative;
    bottom: 3px;
}
.natureclass{
  font-size: 14px;
    margin-left: 25px;
    position: relative;
    bottom: 3px;
}
.createtime{
      font-size: 14px;
    margin-left: 25px;
    position: relative;
    bottom: 3px;
}
.opt{
  margin-left: 90px;
    position: relative;
    top: 2px;
}
.addTeacher{
  padding-top: 0px;
    margin-right: 15px;
    width: 172px;
    height: 32px;
    background: rgba(50,186,240,1);
    border-radius: 4px;
    color: #fff;
    line-height: 32px;
    margin-top: 12px;
}
.identify{
  font-size: 14px;
    margin-left: 25px;
    position: relative;
    bottom: 3px;
}
.opt1{
  float: right;
    margin-top: 20px;
    margin-right: 25px;
}
</style>

