<template>
<!--提交作业详情-->
  <div id="workinfo">
    <div class="header">
      <div class="header-left">
        <span class="header-icon" @click="jumpToHomework"><i class="iconfont iconfanhui" style="font-size:38px;color:#5F6368;"></i></span>
        <span class="courseName" @click="jumpToHomework">{{ course.courseName}}</span>
      </div>
      <div class="header-center">
        <span>学生作业</span>
        <span>作业讨论</span>
      </div>
      <div class="header-right">
        <span><i class="iconfont iconxiaoxi1" style="font-size: 32px;color: #5F6368;"></i></span>
        <span><img src="../../assets/picture/33 (1).png" style="width:30px;height:30px"></span>
      </div>
    </div>

    <div class="new-page">
      <div class="head-title">
        <div class="homework-title">
        	<h2 style="float:left;margin-top: -8px;">{{ homework.homeworkName}}</h2>
        	<div class="generate-final-grade" style="font-size:14px">生成期末考成绩</div>
        </div>
        <div class="togsh">
            <p class="fl">截至&nbsp;&nbsp;{{homework.endDate}}   {{ homework.endTime}}</p>
            <div style="float:right;margin-top:-45px">
              <span class="check"><i class="el-icon-s-tools"></i>&nbsp;&nbsp;查重设置</span>
              <span>
                <el-select v-model="hide" placeholder="对学生隐藏成绩" class="select">
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </span>
              <span class="togsh-input">
                <el-input
                class="input"
                  style="width:200px"
                  placeholder="学号、姓名"
                  suffix-icon="el-icon-search"
                  v-model="input1">
                </el-input>
              </span>
            </div>

        </div>
      </div>
      <div class="reviewwrap">
        <div>
          <p class="work-tips-info">已筛选出 <span>2</span>人 （全班共{{classmateCount}}人）</p>
          <p class="retract">收起</p>
        </div>
        <div class="work-tips">
            <dl id="grade-classify" class="classify tify">
                <dt>成绩：</dt>
                <li id="unlimited" class="cur">不限</li>
                <el-checkbox-group v-model="gradeList" class="list">
                  <el-checkbox label="已批(0)"></el-checkbox>
                  <el-checkbox label="未批(1)"></el-checkbox>
                  <el-checkbox label="未交(1)"></el-checkbox>
                </el-checkbox-group>
            </dl>

            <dl id="sim-classify" class="classify tify">
                <dt>相似度：</dt>
                <li id="unlimited" class="cur">不限</li>
                <el-checkbox-group v-model="similarityList"  class="list">
                  <el-checkbox label="0-50%"></el-checkbox>
                  <el-checkbox label="50%-70%"></el-checkbox>
                  <el-checkbox label="70%-90%"></el-checkbox>
                  <el-checkbox label="90%-100%"></el-checkbox>
                </el-checkbox-group>
            </dl>

            <dl id="state-classify" class="classify tify nodashed">
                <dt>提交状态：</dt>
                <li id="unlimited" class="cur">不限</li>
                <el-checkbox-group v-model="submitList"  class="list">
                  <el-checkbox label="按时交"></el-checkbox>
                  <el-checkbox label="超时交"></el-checkbox>
                </el-checkbox-group>
            </dl>
            <dl id="share-classify" class="classify tify nodashed">
                <dt>分享状态：</dt>
                <li id="unlimited" class="cur">不限</li>
				        <el-checkbox-group v-model="shareList"  class="list">
                  <el-checkbox label="未分享"></el-checkbox>
                  <el-checkbox label="已分享"></el-checkbox>
                </el-checkbox-group>
            </dl>
            <div class="hide-classify" style="display: block;">
                <dl id="words-classify" class="classify addhomeWork dashed">
                    <dt>作业字数：</dt>
                    <div class="input-dd">
                        <input type="text" class="input-sm nStart" autocomplete="off">
                        <span class="sm-line">—</span>
                        <input type="text" class="input-sm nEnd" autocomplete="off">
                    </div>
                    <div class="curBtn addnumber">确定</div>
                </dl>
                <dl id="rcount-classify" class="classify addpigaiNum dashed">
                    <dt>批改次数：</dt>
                    <div class="input-dd">
                        <input type="text" class="input-sm nStart" autocomplete="off">
                        <span class="sm-line">—</span>
                        <input type="text" class="input-sm nEnd" autocomplete="off">
                    </div>
                    <div class="curBtn addpigai">确定</div>
                </dl>
            </div>

        </div>

        <div class="select-group">
          <ul class="typehead">
            <li class="dt-name" datatype="text">
              <div id="studyNumTitle" class="dt">学号<i class="downdot"></i></div>
            </li>
            <li class="dt-name" datatype="text">
              <div id="" class="dt">姓名<i class="downdot"></i></div>
            </li>
            <li id="li-results" datatype="num">
              <div id="results" class="dt">成绩<i class="downdot"></i></div>
            </li>
            <li id="li-similarity" datatype="Float">
              <div id="similarity" class="dt">相似度<i class="downdot"></i></div>
            </li>
            <li id="li-submitState" datatype="num" class="">
              <div id="submitState" class="dt">提交状态<i class="downdot"></i></div>
            </li>
            <li id="li-homeworkNumber" datatype="num" class="">
              <div id="homeworkNumber" class="dt">作业字数<i class="downdot"></i></div>
            </li>
            <li id="dt-pigai" datatype="num" class="select">
              <div class="focus down dt">批改次数<i class="downdot"></i></div>
            </li>
          </ul>
        </div>

        <div class="glist">
          <div class="head">
            <span style="margin-left: 20px;position:relative;top:10px"><el-checkbox v-model="selected">已选0/{{submitCount}}</el-checkbox></span>
            <span>
              <el-select v-model="givePoints" placeholder="批量给分" class="giveGrade" size="small">
                <el-option

                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span ><el-button type="primary" class="backwork" style="margin-left:30px;">打回作业</el-button></span>
            <span style="margin-left:30px">
              <el-select v-model="download" placeholder="下载" class="download" size="small">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
            <span class="tored">查重率超过60%自动标红</span>
          </div>
          <div class="body">
            <div class="homeworkmanage" v-for="(item,index) in submittedList">
              <span class="body_1"><el-checkbox v-model="item.id"></el-checkbox></span>
              <span class="body_2">{{ item.number}}</span>
              <span class="body_3">{{ item.name }}</span>
              <span class="body_4" v-if="beginScore[index] != null">
                {{ item.score}}/{{ item.bestScore}}
              </span>
              <span class="body_4" v-else>
                <el-input class="inputCase" style="width: 57px" v-model="item.score" @blur="addScore(index)" ></el-input>/{{ item.bestScore}}
              </span>
              <span class="body_5">--</span>
              <span class="body_4 body_6">{{ item.publishTime}}</span>
              <span class="body_5 body_7">--</span>
              <span class="body_4 body_8">
                <el-tooltip class="item" effect="dark" content="是指在这门课程里，老师对这位学生所有的批阅次数" placement="top-start">
                  <el-button class="marktime" v-if="item.score == null">批阅0次</el-button>
                  <el-button class="marktime" v-else>批阅1次</el-button>
                </el-tooltip>
              </span>
              <span class="body_4 body_9" @click="readHomework(index)">进入批阅</span>
              <!--<a href="#" onclick="javascript:window.open('http://localhost:8081/刘桂君.docx');"> 在线预览 </a>-->

              <!--<el-input style="width: 50px"></el-input>-->


            </div>
            <!--<iframe src='https://view.officeapps.live.com/op/view.aspx?src=http://localhost:8081/刘桂君.docx' width='100%' height='100%' frameborder='1'>-->
            <!--</iframe>-->
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'workInfo',
  data(){
    return{
      options1:[{
        value:'对学生隐藏成绩',
        label:'对学生隐藏成绩'
      },{
        value:'对学生显示成绩',
        label:'对学生显示成绩'
      }],
      options2:[{
        value:'统一给分',
        label:'统一给分'
      },{
        value:'区间给分',
        label:'区间给分'
      }],
      options3:[{
        value:'下载作业文档',
        label:'下载作业文档'
      },{
        value:'下载选中的报表',
        label:'下载选中的报表'
      },{
        value:'下载全班的报表',
        label:'下载全班的报表'
      }],
      input1:'',
      hide:'',
      gradeList:[],
      similarityList:[],
      submitList:[],
      shareList:[],
      selected:false,
      givePoints:'',
      download:'',
      managecheck:false,
      homeworkId:'',
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
      classmateCount:'',
      submitCount:'',
      submittedList:[],
      submitInfo:{
        score:'',
        id:'',
        name:'',
        number:'',
        bestScore:'',
        publishTime:'',
        fileAddress:''
      },
      read:'未阅',
      score:'',
      beginScore:[],
      state:''
    }
  },
  mounted(){
    let homeworkId = sessionStorage.getItem("homeworkId");
    this.homeworkId = homeworkId;
    //获取作业信息
    this.getHomeworkInfo();
    //获取课程信息
    this.getCourse();
    //获取同学数量
    let courseId = sessionStorage.getItem("courseId");
    this.getClassmateCount(courseId);
    //获取提价作业的详情
    this.getSubmitHomework();
  },
  methods:{
    getScore(index){

    },
    //添加成绩
    addScore(index){
      let gradeId = this.submittedList[index].id;
      let score = this.submittedList[index].score;
      const params ={
        gradeId:gradeId,
        score:score
      };
      console.log(params);
      this.$axios.post('api/grade/addScore',params)
        .then(res => {
          console.log(res.data);
          if(res.data == 'success'){
            this.state = 'success';
          }
        })
    },
    //
    readHomework(index){
      this.read = '已阅';
      window.open(this.submittedList[index].fileAddress);
    },
    //获取同学数量
      getClassmateCount(courseId){
        this.$axios.get('api/selectionCourse/getClassmateCount?courseId='+courseId)
        .then(res =>{
          this.classmateCount = res.data;
        })
      },
    //获取课程信息
    getCourse(){
      let courseId = sessionStorage.getItem("courseId");
      this.$axios.get('api/course/getCourseById?id='+courseId)
      .then(res =>{
        this.course = res.data;
      })
    },
    //获取作业信息
    getHomeworkInfo(){
      console.log(this.homeworkId);
      this.$axios.get('api/homework/getSubHomeworkbyId?homeworkId='+this.homeworkId)
      .then(res =>{
        this.homework = res.data;
        // console.log(res.data);
      })
    },
    //跳转到作业
    jumpToHomework(){
      sessionStorage.setItem("homeworkId",'');
      this.$router.push({name:'THomework'});
    },
    //获取提价作业的详情
    getSubmitHomework(){
        let homeworkId =sessionStorage.getItem("homeworkId");
        this.$axios.get('api/grade/getSubmitHomework?homeworkId='+homeworkId)
          .then(res =>{
            console.log(res.data);
            this.submittedList = res.data.data;
            this.submitCount = res.data.totalCount;
            for(let i = 0; i <res.data.data.length;i++){
              this.beginScore.push(res.data.data[i].score);
            }
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
.head-title {
    padding: 39px 30px 27px;
    height: 80px;
    position: relative;
    border-bottom: 1px solid #c8c8c8;
}
.homework-title {
    display: inline-block;
    width: 100%;
}
.head-title h2 {
    font-size: 18px;
    color: #2d2d2d;
    font-weight: 400;
    display: inline-block;
}
.homework-title .generate-final-grade {
    height: 26px;
    line-height: 26px;
    display: block;
    text-align: center;
    background-color: #fff;
    color: #818181;
    font-family: "微软雅黑";
    cursor: pointer;
    -webkit-user-select: none;
    border-radius: 3px;
    padding: 0 10px;
    float: right;
    border: 1px solid #ccc;
}
.togsh {
    padding-top: 25px;
    /* display: flex;
  justify-content: space-between; */
}
.head-title .togsh p {
    padding: 5px 20px;
    margin-right: 10px;
    background: rgba(0,0,0,.1);
}
.new-page {
    background: #FFF;
    border: 1px solid #c8c8c8;
    width: 1020px;
    margin: 40px auto;
}
.head-title .togsh p {
    padding: 5px 20px;
    margin-right: 10px;
    background: rgba(0,0,0,.1);
    font-size: 14px;
    width: 151px;
    margin-top: -5px;
}
.check{
  height: 30px;
    line-height: 30px;
    margin-right: 15px;
    color: #999;
    padding-left: 20px;
    cursor: pointer;
    user-select: none;
    font-size: 14px;
}
.select /deep/ .el-input .el-select__caret{
  color: white;
  position: relative;
  top: 5px;
}
.select /deep/ .el-input__inner{
  background-color: #357ae8;
  color: white;
  height: 30px;
  width: 150px;
}
.togsh-input{
  margin-left: 15px;
}
.input /deep/ .el-input__inner{
  width: 200px;
  height: 32px;
}
.work-tips {
    background: #fff;
    margin: 0 30px;
    box-sizing: border-box;
    border: 1px solid #DCDCDC;
}
.classify {
    border-bottom: 1px dashed #eaeaea;
    font-size: 0;flex-direction: column;

}
.classify dt{
    color: #5A5A5A;
    line-height: 46px;
    height: 46px;
    width: 150px;
    border-right: 1px solid #DCDCDC;
    background: #F2F2F2;
    text-indent: 30px;
    font-size: 12px;
    margin-right: 36px;
    border-bottom: 1px dashed #eaeaea;
    margin-bottom: -1px;
}
.classify li.cur {
    background: #357AE8;
    border-color: #357AE8;
    border-radius: 2px;
    cursor: default;
    color: #FFF;
}
.classify li {
    width: 48px;
    height: 20px;
    line-height: 20px;
    margin-right: 30px;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 12px;
    text-align: center;
}
.classify el-checkbox {
    padding-left: 25px;
    font-size: 12px;
    color: #5a5a5a;
    border-radius: 3px;
    height: 33px;
    line-height: 33px;
    width: 83px;
    cursor: pointer;
}
.classify {
    border-bottom: 1px dashed #eaeaea;
    font-size: 0;
    height: 47px;
}
.classify div.input-dd {
    width: 118px;
    height: 27px;
    font-size: 12px;
}
.classify .curBtn {
    color: #818181;
    height: 33px;
    line-height: 33px;
    width: 60px;
    outline: 0;
    border: none;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    bottom: 65px;
    left: 344px;
}
input.input-sm {
    width: 48px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #d2d2d2;

}
.nStart{
  position: relative;
    bottom: 34px;
    left: 194px;
}
.nEnd{
      position: relative;
    bottom: 58px;
    left: 270px;

}
span.sm-line {
    width: 8px;
    overflow: hidden;
    line-height: .8;
        position: relative;
    bottom: 35px;
    left: 198px;
    z-index: 1;

}
li{
  list-style: none;
}
#unlimited{
  position: relative;
    bottom: 35px;
    left: 194px;
}
.list{
      position: relative;
    bottom: 56px;
    left: 280px;
}
.select-group {
    padding: 20px 0;
    position: relative;
    margin: 0 30px;
}
.typehead {
    height: 40px;
    border: 1px solid #DCDCDC;
    background-color: #F6F6F6;
}
.typehead li {
    display: inline-block;
    float: left;
    vertical-align: middle;
}
.typehead li div {
    display: block;
    width: 100px;
    line-height: 38px;
    border: 1px solid transparent;
    margin-left: -1px;
    color: #595959;
    font-size: 12px;
}
.dt{
  cursor: pointer;
}
.dt:hover{
  color: #4d90fe;
}
.work-tips-info {
    padding: 0 28px;
    color: #5a5a5a;
    background-color: #fff;
    line-height: 45px;
    font-size: 12px;
}
.retract{
  float: right;
  font-size: 12px;
  color: #5a5a5a;
  margin-right: 35px;
  margin-top: -37px;
  cursor: pointer;
}
.glist{
    margin: 0 30px 60px;
}
.head{
  height: 60px;
    border: 1px solid #DCDCDC;
    background-color: #F6F6F6;
    background: #F6F6F6;
    font-weight: 400;
    border-width: 1px;
    border-style: solid;
    border-color: #DCDCDC;
    margin-bottom: -1px;
}

.giveGrade{
  width:100px;
  height: 32px;
  position: relative;
  bottom: -9px;
  margin-left: 30px;
}
.backwork /deep/.el-button{
  height: 32px;
  width: 76px;
      position: relative;
    top: 12px;


}
.backwork /deep/ span{
  position: relative;
        bottom: 3px;
    right: 4px;
    font-size: 12px;
}
.download{
  width: 140px;
      position: relative;
    top: 10px;
  margin-top: 5px;
  font-size: 12px;
}
.tored{
  float: right;
    color: red;
    margin-right: 20px;
    margin-top: 24px;
}
.homeworkmanage{
  height: 62px;
  width: 958px;
  border: 1px solid #DCDCDC;
  font-size: 14px;
  color: #595959;
}
.homeworkmanage:hover{
  background: #dcdcdc;
}
.body_1{
  margin-left: 20px;
    position: relative;
    top: 22px;
}
.body_2{
  position: relative;
    margin-left: 50px;
    top: 22px;
}
.body_3{
      position: relative;
    margin-left: 50px;
    top: 21px;
    width: 80px;
    font-weight: 700;
    color: #2D2D2D;

}
.body_4{
  margin-left:50px;
    position: relative;
    top: 22px;
}
.body_5{
      margin-left: 50px;
    position: relative;
    top: 21px;
}
.body_9{
  cursor: pointer;
      font-size: 16px;
    color: #4D90FE;
}
.marktime /deep/.el-button{
  border: 0px solid white;
  padding: 0;
  background: white;
}
.marktime:hover{
  color:#606266;
  background: #dcdcdc;
}
  .inputCase /deep/ .el-input__inner{
    height: 26px;
    border-top: none;
    border-left: none;
    border-right: none;
  }
</style>

