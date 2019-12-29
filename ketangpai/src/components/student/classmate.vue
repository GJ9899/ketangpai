<template>
  <div>
    <div class="header">
      <div class="header-left">
        <span class="header-icon" @click="jumpToHomework"><i class="iconfont iconfanhui" style="font-size:38px;color:#5F6368;"></i></span>
        <span class="courseName" @click="jumpToHomework">{{ courseName }}</span>
      </div>
      <div class="header-center">
        <span>同学</span>
        <span>学生分组</span>
        <span @click="jumpToGrade">成绩</span>
      </div>
      <div class="header-right">
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>

    <div class="member-cont">
      <div class="box-l">
        <div class="box-group" @click="displayTeam" tabindex="1">教学团队(1)</div>
        <div class="box-group" @click="displayStudent" tabindex="1">全部学生(学生{{ studentList.length}})</div>
      </div>
      <!--全部学生-->
      <div class="box-r" v-model="role" v-if="this.role=='student'" >
        <div class="r-name">
          <div><p style="margin-left:20px;color: rgba(59,61,69,1);">全部学生(学生{{ studentList.length }})</p></div>
          <div style="padding-right:30px;padding-top: 10px;">
            <el-input placeholder="姓名/学号" class="addTeacher" v-model="name"></el-input>
          </div>
        </div>

        <!--成员列表-->
        <div class="data" v-for="(item,index) in studentList">
          <span><img src="../../assets/picture/25.png" class="avator"></img></span>
          <!--<span class="stuno">{{ item.name}}</span>-->
          <span class="name">{{ item.name}}</span>
          <span class="mail">{{ item.phoneMail}}</span>
          <span class="natureclass">{{ item.number}}</span>
          <span class="createtime">19/11/29 21:15</span>
        </div>
      </div>
      <!--教师团队-->
      <div class="box-r teacherTeam" v-model="role"  v-if="this.role =='team'">
        <div class="r-name">
          <div><p style="margin-left:20px;color: rgba(59,61,69,1);">教学团队(老师1)</p></div>
          <div style="padding-right:30px;padding-top: 10px;"><el-input placeholder="姓名/学号" class="addTeacher" v-model="name"></el-input></div>
        </div>
        <div class="data">
          <span><img src="../../assets/picture/25.png" class="avator" style="margin-left:40px"></img></span>
          <span class="name">{{ teacher.name }}</span>
            <span class="mail" style="margin-left:280px">{{ teacher.phoneMail }}</span>
            <span class="identity">(管理员)</span>
          </div>
      </div>
    </div>
    <div style="height:150px">

    </div>
  </div>

</template>

<script>
export default {
  name:'courseMember',
  data(){
    return{
      input2:'',
      checkAll:false,
      role:'team',
      name:'',
      teacher:{
        id:'',
        name:'',
        phoneMail:''
      },
      student:{
        id:'',
        name:'',
        number:'',
        phoneMail:'',
      },
      studentList:[],
      courseName:'',
    }
  },
  mounted(){
    //获取课程信息
    this.getCourseById();
    //获取课程教师信息
    this.getTeacherInfo();
    //获取课程同学信息
    this.getClassmateInfo();
  },
  methods:{
    //获取课程信息
    getCourseById(){
      let id = sessionStorage.getItem("courseId");
      this.$axios.get('api/course/getCourseById?id='+id)
        .then(res => {
          this.courseName = res.data.courseName;
          console.log(res.data);
        })
    },
    //获取课程同学信息
    getClassmateInfo(){
      let courseId = sessionStorage.getItem("courseId");
      this.$axios.get('api/student/getStudentList?courseId=' + courseId)
        .then(res => {
          this.studentList = res.data;
        })
    },
    //获取课程教师信息
    getTeacherInfo(){
      let courseId = sessionStorage.getItem("courseId");
      this.$axios.get('api/teacher/getTeacherInfo?courseId='+courseId)
        .then(res => {
          this.teacher = res.data;
        })
    },
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
      this.$router.push({name:'SHomework'});
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
  margin-top: 50px;
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
  background: 	rgb(235, 243, 253);
}
.box-group:focus{
  background: #32BAF0;
  color: white;
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
    margin-left: 70px;
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
    margin-left: 60px;
    position: relative;
    bottom: 3px;
}
.createtime{
      font-size: 14px;
    margin-left: 60px;
    position: relative;
    bottom: 3px;
}
.opt{
  margin-left: 90px;
    position: relative;
    top: 2px;
}
.addTeacher{
    margin-right: 15px;
    width: 172px;
    height: 32px;
    border-radius: 4px;
    color: #fff;
    line-height: 32px;
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

