<template>
  <div id="index">
    <div class="nav nav-default">
      <ul class="nav-menu-left">
        <li class="nav-menu-item ktplogo">
          <a class="ketangpaitophref" >
            <img src="../../assets/picture/logo-mainblue.png" alt="" width="96px" height="24px">
          </a>
        </li>
        <li class="nav-menu-item item">
          <a @click="jumpToClassroom">课堂</a>
        </li>
        <li class="nav-menu-item item">
          <a>备课区</a>
        </li>
        <li class="nav-menu-item jingpin item"> 
          <a>精品专区</a>
        </li>
        <li class="nav-menu-item item">
          <a>我的精品</a>
        </li>
      </ul>
      <ul class="nav-menu-right">
        <li class="paper-repeat nav-menu-item">
          <a>
            <span><img src="../../assets/picture/paperrepeaticon.png" style="height:32px;width:32px"></img></span>
            <span style="position:relative;bottom:10px">论文查重</span>
          </a>
        </li>
        <li class="nav-menu-item">
          <a>
            <span><img src="../../assets/picture/addteacher.png" style="height:32px;width:32px"></img></span>
            <span style="position:relative;bottom:10px">邀请教师</span>
          </a>
          
        </li>
        <li class="nav-menu-item">
          <a>
            <i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i>
          </a>
        </li>
        <li class="nav-menu-item nav-menu user">
          <img src="../../assets/picture/33 (1).png" style="width:30px;height:30px">
        </li>
      </ul>
    </div>
    <div class="ktcon" style="height: 55px;">
      <div class="ktcon-left">
        <p>全部课程</p>
      </div>
      <div class="ktcon-right">
        <span><i class="iconfont iconkechengpaixu"></i> 课程排序</span>
        <span><i class="iconfont iconguidangguanli1"></i> 归档管理</span>
        <span><el-button type="primary" @click="hasShow()" id="addCourseButton">+创建/加入课程</el-button></span>
        <span><el-button type="primary" @click="releaseActivity">+快速发布活动</el-button></span>
      </div>
      
    </div>
    <el-divider></el-divider>
    <div class="ktcon-right-button1" id="ktcon-right-button1" style="display:none">
      <ul>
        <li @click="createCourse" id="createCourse">创建课程</li>
        <li @click="addCourse" id="addCourse">加入课程</li>
      </ul>
    </div>
    <!--创建课程弹窗-->
    <div class="addCourse">
      <el-dialog title="新建课程" :visible.sync="dialogVisible" width="50%">
        <el-form :model="form" ref="form" :rules="rules" label-width="80px" style="margin-left:80px">
          <el-form-item label="课程名称" prop="courseName">
            <el-input v-model="form.courseName" placeholder="请输入课程名称" style="width:443px"></el-input>
          </el-form-item>
          <el-form-item label="班级名称" prop="className">
            <el-input v-model="form.className" placeholder="请输入班级名称(选填)" style="width:443px"></el-input>
          </el-form-item>
          <el-form-item label="选择学期">
            <el-select v-model="value1" placeholder="请选择年份">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="value2" placeholder="请选择学期">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <p style="color:grey;font-size:13px;margin-left:12px">学生必须额外填写下列信息才能加入课程</p>
          <el-form-item>
            <el-checkbox-group v-model="checkList" style="margin-left:12px">
              <el-checkbox label="自然班级"></el-checkbox>
              <el-checkbox label="年级"></el-checkbox>
              <el-checkbox label="入学年月"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          
          <el-form-item style="margin-left: 290px;">
            <el-button type="primary" @click="submitCourse('form')">创建</el-button>
            <el-button @click="resetForm('form')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
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
    <el-dialog :visible.sync="dialogVisible2" class="activityKind">
      <div class="layer-header-nobg">
        <p>选择要发布的类型</p>
      </div>
      <div class="selecttype">
        <ul>
          <li class="publish-notify">
            <div></div>
            <span>公告</span>
          </li>
          <li class="publish-topic">
            <div></div>
            <span>话题</span>
          </li>
          <li class="publish-interact" >
            <div></div>
            <span>课堂互动</span>
          </li>
          <li class="publish-homework" @click="hasPublishHomework">
            <div></div>
            <span>作业</span>
          </li>
          <li class="publish-test">
            <div></div>
            <span>测试</span>
          </li>
        </ul>
      </div>
    </el-dialog>
    <!--中间课程列表-->
    <div class="ktcon2 cl hide"  data-course-count="50">
      <dl class="ktdl1 ktpx1" id="viewer-container-lists" data-color="#318eeb"  v-for="(item,index) in course">
        <dt style="background:url(//assets.ketangpai.com/theme/student/min/03.png)" class="bgclass2">
          <strong>
            <a title="java" class="jumpToCourse" data-id="MDAwMDAwMDAwMLR2vd2Gz7dp" @click="jumpToCourse(item.id)">{{ item.courseName }}</a>
            <span>{{ item.className}}</span>
          </strong>
          <div class="invitecode">
            <div class="qrcode">
              <i class="iconfont iconketangma1" data-role="0"></i>
            </div>
            <div class="down-menu" data-role="0">
              加课码：<span class="code" data-code="5TZB7V">{{ item.addCode }}</span>
              <div class="selecon cl" style="display: none;">
                <ul>
                  <li class="hide2"><a class="stop-course-code" data-code="MDAwMDAwMDAwMLR2vd2Gz7dp" href="">停用</a></li>
                  <li class=""><a class="start-course-code" href="">启用</a></li>
                  <li class="hide2"><a class="reset-course-code" href="">重置</a></li>                            
                </ul>
              </div>
            </div>
          </div>
          <span class="time">2019-2020<br>{{ item.semester }}</span>
          <div class="bigDiv learncl">
            <div class="squr"></div>
            <div class="ju" v-if="item.createrId == userId">学</div>
            <div class="ju" v-else>教</div>
          </div>
          <div class="zhidings zhidings-two">
            <a href="">置顶</a>
          </div>
          <a class="kdmore" @click="hasKdcgd(index)">
            <span>更多</span>
            <i></i>
          </a>
          <ul class="kdcgd" :id="kdcgb(index)" v-if="item.createrId == userId">
            <li class="kdli3" id="kdli3" @click="deleteCourse">退课</li>
            <li class="kdli2" id="kdli2" @click="">归档</li>
          </ul>
          <ul class="kdcgd" :id="kdcgb(index)" v-else>
            <li class="kdli3" id="kdli3" @click="">编辑</li>
            <li class="kdli2" id="kdli2" @click="">删除</li>
            <li class="kdli2" id="kdli4" @click="">归档</li>
            <li class="kdli2" id="kdli5" @click="">复制课程</li>
            <li class="kdli2" id="kdli6" @click="">打包下载</li>
          </ul>
        </dt>
        <dd>
          <ul>
            <li class="off"><span>近期作业</span></li>
            <li>
              <span title="作业名称2">
                <a>作业名称2</a>
              </span>
            </li>      
            <li>
              <span title="作业名称（做个课堂派）">
                <a>作业名称（做个课堂派）</a>
              </span>
            </li>
          </ul>
          <div class="ddfoot clearfix">
            <div class="user-avatar-area">
              <img src="https://www.ketangpai.com/Public/Common/img/40/29.png">
              <div class="teachername">sq</div>
            </div>
          </div>
        </dd>
      </dl>
    </div>
    <!--退课弹窗-->
    <el-dialog :visible.sync="dialogVisible3" class="deleteKt" width="30%">
      <div class="" style="position:relative;bottom:20px">
        <p class="deleteKt1">确定要退课java吗？</p>
        <p class="deleteKt2">您的这个课程的任何信息或评论将被永久删除</p>
        <p class="deleteKt3" style="color:red">警告：此操作无法撤销</p>
        <p class="deleteKt4" style="color:blue">提醒：已用课程数包含“删除课程数”</p>
        <el-input placeholder="请输入登录密码验证" class="deleteKt5" v-model="deleteKt5"></el-input>
        <div class="deleteKt6">
          <el-button @click="resetDeleteKt">取消</el-button>
          <el-button type="primary" @click="deleteKt">退课</el-button>
        </div>
      </div>
    </el-dialog>
    <!--发布作业弹窗-->
    <el-dialog :visible.sync="dialogVisible4" title="发布个人作业" class="publishWord">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="homeworkName">
          <el-input placeholder="作业名称" v-model="ruleForm.homeworkName"></el-input>
        </el-form-item>
        <el-form-item prop="introduce">
          <el-input placeholder="作业简介" v-model="ruleForm.introduce"></el-input>
        </el-form-item>
        <el-form-item id="editor" prop="detialDescription">
          <editor v-model="ruleForm.detialDescription" :options="editorOption"></editor>
        </el-form-item>
        <el-form-item label="截止日期" prop="endDate" class="display" style="width:300px">
          <el-date-picker
            v-model="ruleForm.endDate"
            type="date"
            placeholder="请选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="endTime" class="display" style="width:120px">
          <el-select v-model="ruleForm.endTime" placeholder="请选择">
            <el-option
              v-for="item in options3"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="若超时，禁止提交" prop="forbidSubmit" class="display" style="width:180px;margin-left:15px">
          <el-switch v-model="ruleForm.forbidSubmit"></el-switch>
        </el-form-item>
        <el-form-item label="满分值" prop="bestScore">
          <el-input placeholder="请填写数值" v-model.number="ruleForm.bestScore"  style="width:250px"></el-input>
        </el-form-item>
        <el-form-item label="是否查重" prop="needCheck" class="display" style="width:150px">
          <el-switch v-model="ruleForm.needCheck"></el-switch>
        </el-form-item>
        <el-form-item  label="查重警戒值" prop="checkAlertValue" class="display" style="width:236px">
          <el-input v-model="ruleForm.checkAlertValue" style="width:150px">
            <template slot="append">%</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="duplicateCheckingRate" style="margin-left: 154px;">
          <el-checkbox>查重率高于</el-checkbox>
          <el-input v-model="ruleForm.duplicateCheckingRate"  style="width:200px">
            <template slot="append">%自动打回</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-download">导入作业</el-button>
        </el-form-item>
        
        <el-form-item prop="publishCourseObject" label="发布课程对象">
          <el-select v-model="ruleForm.publishCourseObject" placeholder="请选择要发布到的课程">
            <el-option disabled value="请选择"></el-option>
            <option v-for="item in courseList">{{item}}</option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left:400px">
          <el-button type="primary" @click="publishHomework('ruleForm')">确定</el-button>
          <el-button @click="resetPublishHomework('ruleForm')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import $ from 'jquery'
import editor from 'vue-quill-editor'
import {Message} from 'element-ui'

export default {
  name: 'TIndex',
  components:{
    editor
  },
  data(){
    var validateHomeworkName = (rule,value,callback) => {
      if(!value){
        return callback(new Error("作业名不能为空"));
      }
      else{
        callback();
      }
    };
    var validateEndDate = (rule,value,callback) => {
      if(!value){
        return callback(new Error("截止日期不能为空"));
      }
      else{
        callback();
      }
    };
    var validateEndTime = (rule,value,callback) => {
      if(!value){
        return callback(new Error("截止时间不能为空"));
      }
      else{
        callback();
      }
    };
    var validateBestScore = (rule,value,callback) => {
      if(!value){
        return callback(new Error("满分值不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        }
        else{
          callback();
        }
      }, 500);
    };
    var validatapublishCourseObject = (rule,value,callback) => {
      if(!value){
        return callback(new Error("发布课程对象不能为空"));
      }
      else{
        callback();
      }
    };
    return{
      userId:'',
      courseList:[],
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
      options1:[{
        value:'2020-2021',
        lable:'2020-2021'
      },{
        value:'2019-2020',
        lable:'2019-2020'
      },{
        value:'2018-2019',
        lable:'2018-2019'
      },{
        value:'2017-2018',
        lable:'2017-2018'
      },{
        value:'2016-2017',
        lable:'2016-2017'
      }],
      options2:[{
        value:'不限',
        lable:'不限'
      },{
        value:'第一学期',
        lable:'第一学期'
      },{
        value:'第二学期',
        lable:'第二学期'
      }],
      value1:'',
      value2:'',
      form:{
        courseName:'',
        className:'',
      },
      ruleForm:{
        homeworkName:'',
        introduce:'',
        endDate:'',
        endTime:'23:00',
        forbidSubmit:'',
        bestScore:'',
        needCheck:'',
        checkAlertValue:50,
        duplicateCheckingRate:50,
        publishCourseObject:''
      },
      rules:{
        courseName:{ required: true, message: '请输入课程名称', trigger: 'blur' },
        homeworkName:[{validator:validateHomeworkName,trigger:'blur'}],
        endDate:[{validator:validateEndDate, trigger:'blur'}],
        endTime:[{validator:validateEndTime, trigger:'blur'}],
        bestScore:[{validator:validateBestScore, trigger:'blur'}],
        publishCourseObject:[{validator:validatapublishCourseObject, trigger:'blur'}],
      },
      checkList:[],
      dialogVisible:false,
      dialogVisible1:false,
      dialogVisible2:false,
      dialogVisible3:false,
      dialogVisible4:false,
      courseIdentifyCase:'',
      deleteKt5:'',
      editorOption:{},
      options3:[{
        value:'00:30',
        lable:'00:30'
      },{
        value:'01:00',
        lable:'01:00'
      },{
        value:'01:30',
        lable:'01:30'
      },{
        value:'02:00',
        lable:'02:00'
      },{
        value:'02:30',
        lable:'02:30'
      },{
        value:'03:00',
        lable:'03:00'
      },{
        value:'03:30',
        lable:'03:30'
      },{
        value:'04:00',
        lable:'04:00'
      },{
        value:'04:30',
        lable:'04:30'
      },{
        value:'05:00',
        lable:'05:00'
      },{
        value:'05:30',
        lable:'05:30'
      },{
        value:'06:00',
        lable:'06:00'
      },{
        value:'06:30',
        lable:'06:30'
      },{
        value:'07:00',
        lable:'07:00'
      },{
        value:'07:30',
        lable:'07:30'
      },{
        value:'08:00',
        lable:'08:00'
      },{
        value:'08:30',
        lable:'08:30'
      },{
        value:'09:00',
        lable:'09:00'
      },{
        value:'09:30',
        lable:'09:30'
      },{
        value:'10:00',
        lable:'10:00'
      },{
        value:'10:30',
        lable:'10:30'
      },{
        value:'11:00',
        lable:'11:00'
      },{
        value:'11:30',
        lable:'11:30'
      },{
        value:'12:00',
        lable:'12:00'
      },{
        value:'12:30',
        lable:'12:30'
      },{
        value:'13:00',
        lable:'13:00'
      },{
        value:'13:30',
        lable:'13:30'
      },{
        value:'14:00',
        lable:'14:00'
      },{
        value:'14:30',
        lable:'14:30'
      },{
        value:'15:00',
        lable:'15:00'
      },{
        value:'15:30',
        lable:'15:30'
      },{
        value:'16:00',
        lable:'16:00'
      },{
        value:'16:30',
        lable:'16:30'
      },{
        value:'17:00',
        lable:'17:00'
      },{
        value:'17:30',
        lable:'17:30'
      },{
        value:'18:00',
        lable:'18:00'
      },{
        value:'18:30',
        lable:'18:30'
      },{
        value:'19:00',
        lable:'19:00'
      },{
        value:'19:30',
        lable:'19:30'
      },{
        value:'20:00',
        lable:'20:00'
      },{
        value:'20:30',
        lable:'20:30'
      },{
        value:'21:00',
        lable:'21:00'
      },{
        value:'21:30',
        lable:'21:30'
      },{
        value:'22:00',
        lable:'22:00'
      },{
        value:'22:30',
        lable:'22:30'
      },{
        value:'23:00',
        lable:'23:00'
      },{
        value:'23:30',
        lable:'23:30'
      },],
      options4:'',
    }
  },
  mounted(){
    let userId = sessionStorage.getItem("userId");
    this.userId = userId;
    this.showCourse();
  },
  methods:{
    //展开选择框
    hasShow(){
      let target = document.getElementById("ktcon-right-button1");
      if(target.style.display=="none"){
        target.style.display="block";
      }
      else{
        target.style.display="none"
      }
    },
    //打开创建课程弹窗
    createCourse(){
      this.dialogVisible = true;
    },
    //打开添加课程弹窗
    addCourse(){
      this.dialogVisible1 = true;
    },
    //取消添加课程
    cancelAddCourse(){
      this.checkList = '';
      this.courseIdentifyCase = '';
      this.dialogVisible1 = false;
    },
    //创建课程
    submitCourse(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          let courseName = this.form.courseName;
          let className = this.form.className;
          let year = this.value1;
          let semester = this.value2;
          let condition = "";
          for(let i = 0; i <this.checkList.length;i++){
            condition += this.checkList[i]+","
          }
          condition = condition.substr(0,condition.length-1);
          let createrId = sessionStorage.getItem("userId");
          const params = {
            createrId:this.userId,
            courseName:courseName,
            className:className,
            year:year,
            semester:semester,
            conditions:condition,
            createrId:createrId
          }
          console.log(params);
          this.$axios.post('api/course/addCourse',params)
          .then(res =>{
            console.log(res.data);
            //创建成功
            if(res.data.message == 'success'){
              Message.success("创建成功！");
              this.resetForm(formName);
              this.dialogVisible = false;
              //显示所有课程
              this.showCourse();
            }
            else{
              Message.warning("创建失败！");
            }
          })
        }
      })
    },
    //显示所有课程
    showCourse(){
      this.$axios.get('api/course/showCourse')
      .then(res =>{
        this.course = res.data.data;
        for(let i = 0; i < this.course.length;i++){
          this.courseList.push(res.data.data[i].courseName);
        }
        console.log(this.course.length)
      })
    },
    //加入课程
    submitAddCourse(){
      let identifyCourse = this.courseIdentifyCase;
      console.log(identifyCourse);
      this.courseIdentifyCase = '';
      this.dialogVisible1 = false;
    },
    //重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.value1 = '';
      this.value2 = '';
      this.checkList = '';
      this.dialogVisible = false;
    },
    //取消发布作业
    resetPublishHomework(formName){
      this.$refs[formName].resetFields();
      this.dialogVisible4 = false;
    },
    //发布活动
    releaseActivity(){
      this.dialogVisible2 = true;
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
    kdcgb(index){
      return "kdcgb"+index;
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
    },
    //发布作业弹窗
    hasPublishHomework(){
      this.dialogVisible4 = true;
    },
    //发布作业
    publishHomework(formName){
      this.$refs[formName].validate(valid => {
        if(valid){
          let homeworkName = this.ruleForm.homeworkName;
          let introduce = this.ruleForm.introduce;
          let bestScore = this.ruleForm.bestScore;
          let endDate = this.ruleForm.endDate;
          let endTime = this.ruleForm.endTime;
          let forbidSubmit = this.ruleForm.forbidSubmit;
          let needCheck = this.ruleForm.needCheck;
          let checkAlertValue = this.ruleForm.checkAlertValue;
          let duplicateCheckingRate = this.ruleForm.duplicateCheckingRate;
          let publishCourseObject = this.ruleForm.publishCourseObject;
          const params = {
            homeworkName:homeworkName,
            introduce:introduce,
            bestScore:bestScore,
            endDate:endDate,
            endTime:endTime,
            forbidSubmit:forbidSubmit,
            needCheck:needCheck,
            checkAlertValue:checkAlertValue,
            duplicateCheckingRate:duplicateCheckingRate,
            publishCourseObject:publishHomework
          }
          console.log(params);
        }
      })
    },
    //跳转到课程详情页面
    jumpToCourse(id){
      this.$router.push({name:'THomework',params:{id:id}});
    },
    //跳转到课堂页面
    jumpToClassroom(){
      this.$router.push({nane:'TIndex'});
    }
  }
}
</script>

<style scoped>
@import url('../../assets/file/iconfont.css');
import ‘quill/dist/quill.core.css’
import ‘quill/dist/quill.snow.css’
import ‘quill/dist/quill.bubble.css’

#TIndex{
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
}
.display{
  display: inline-block;
}
.nav-default {
  z-index: 2;
  height: 56px;
  box-shadow: 0px 6px 6px rgba(80, 80, 80, 0.4);
}
.nav-menu-item {
    margin: 10px;
    float: left;
    /* color: #FFF; */
    position: relative;
    height: 27px;
    line-height: 27px;
    cursor: pointer;
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
    padding-bottom: 18px;
    padding-left: 15px;
    padding-right: 15px;
    color: black;
}
.nav-menu-right .nav-menu-item a{
  color: black;
}
.item a:hover,.item a:active {
    border-bottom: 4px solid #2C58AB;
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
    margin-right: 65px;
    margin-top: -4px;
}
.ktcon-left{
  float: left;
  margin-left: 56px;
    margin-top: 20px;
}
.ktcon-right{
  float: right;
  margin-top: 30px;
  margin-right: -406px;
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
.ktcon-right-button1{
    background-color: white;
    top: 143px;
    left:1144px;
    box-shadow: 1px 2px 3px rgba(0,0,0,.2);
    width: 134px;
    height: 99px;
    position: absolute;
    z-index: 10;
    
}
.ktcon-right-button1 ul{
  padding-inline-start: 0px;
  
}
.ktcon-right-button1 ul li{
  line-height: 39px;
  cursor: pointer;
  padding-left: 20px;
}
.ktcon-right-button1 ul li:hover, .ktcon-right-button1 ul li:active{
  background: #dcdcdc;
}
.layer-header-nobg p {
    font-size: 24px;
    font-family: PingFangSC-Semibold;
    font-weight: 600;
    color: rgba(112,112,112,1);
    text-align: center;
    padding-bottom: 50px;
}
.selecttype ul {
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.selecttype li {
    cursor: pointer;
    padding-right: 40px;
}
.selecttype li div {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
.selecttype li span {
    font-size: 14px;
    font-weight: 600;
    color: rgba(67,67,67,1);
    line-height: 35px;
}
.publish-notify div {
    background: url("../../assets/picture/icon-gg.png") center no-repeat rgba(44,87,171,1);
}
.publish-topic div {
    background: url("../../assets/picture/icon-ht.png") center no-repeat rgba(44,87,171,1);
}
.publish-interact div {
    background: url("../../assets/picture/icon-hd.png") center no-repeat rgba(44,87,171,1);
}
.publish-homework div {
    background: url("../../assets/picture/icon-zy.png") center no-repeat rgba(44,87,171,1);
}
.publish-test div {
    background: url("../../assets/picture/icon-cs.png") center no-repeat rgba(44,87,171,1);
    
}
.activityKind /deep/ .el-dialog__header {
  padding: 0;
}

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
    margin-bottom: 24px;
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
/*发布作业*/
.publishWork /deep/ .el-dialog__body{
  padding: 30px 60px;
}
#viewer-container-lists{
  display: inline-block;
  margin-left: 33px;
}

</style>