<template>
  <div class="homepage">
    <div id="indextop" class="header header2 header-theme-none">
      <!--课堂派logo-->
      <div class="logo f1">
        <a href="https://www.ketangpai.com/" class="active"><img src="../assets/picture/logo.png" class="logoimage"></a>
      </div>
      <!--导航栏-->
      <div class="nav f1">
        <a href="https://www.ketangpai.com/" class="active">首页</a>
        <a href="https://www.ketangpai.com/index/mobile.html">移动教学</a>
        <a href="https://www.ketangpai.com/ExcellentResources/indexmain.html?type=1">精品专区</a>
        <div id="solutiontop">
          <a style="cursor:pointer">解决方案</a>
          <ul id="solutionul">
            <div style="height:10px"></div>
            <li>
              <a href="https://www.ketangpai.com/index/aplus.html">申请机构版</a>
            </li>
            <li>
              <a href="https://www.ketangpai.com/index/localprivate.html">本地化部署</a>
            </li>
            <div style="height:10px"></div>
          </ul>
        </div>
        <a href="https://www.ketangpai.com/VipActivity/vipequitys">会员权益</a>
        <a href="https://www.ketangpai.com/help/index.html">帮助中心</a>
        <a href="https://www.ketangpai.com/index/updateDynamics">产品动态</a>
      </div>
      <!--登录、注册-->
      <div class="log-reg fr">
        <router-link :to="{name:'Login'}">
          <a href="" class="login">登录</a>
        </router-link>
        <router-link :to="{name:'Register'}">
          <a href="" class="regist">注册</a>
        </router-link>
        
      </div>
    </div>
    <div class="home-page">
      <!--走马灯-->
      <div class="section1">
        <el-carousel height="520px" class="carousel-style"> 
          <el-carousel-item v-for="item in 2" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="section2-1">
        <div class="cWidth">
          <div class="summaryBox">
            <ul>
              <li>
                <img src="../assets/picture/7.png" alt="">
                <h2>极简主义教学</h2>
                <p>无安装，无插件，无需专门学习；掌握简单，三分钟上手；上传一个课件，即可开启精彩的课堂</p>
              </li>
              <li>
                <img src="../assets/picture/1 (1).png" alt="">
                <h2>精彩的课堂教学</h2>
                <p>提供更多课堂互动场景：课件讲解，手机遥控，标记疑问，评论，弹幕互动，同屏课件，语音直播...</p>
              </li>
              <li>
                <img src="../assets/picture/2.png" alt="">
                <h2>教学全过程数据分析</h2>
                <p>教学全过程活动数据自动生成，实时查看课程和学生数据面板和报表，教学数据可留存，可追溯</p>
              </li>
              <li>
                <img src="../assets/picture/3.png" alt="">
                <h2>有趣的课堂互动</h2>
                <p>抢答，点名和随机提问，多种表现奖励形式，记录混合教学过程，激发学生学习原动力，创造更精彩的课堂</p>
              </li>
              <li>
                <img src="../assets/picture/4.png" alt="">
                <h2>实时随堂试题互动</h2>
                <p>上课讲解课件时，随时发起随堂试题互动：投票、评价、拍照、选择、简答等多种题型，实时作答，即时分析</p>
              </li>
              <li>
                <img src="../assets/picture/5.png" alt="">
                <h2>精准的考勤签到</h2>
                <p>二维码，数字口令，GPS，传统考勤等多种考勤形式；杜绝代签，一键导出考勤记录</p>
              </li>
              <li>
                <img src="../assets/picture/6.png" alt="">
                <h2>作业神器</h2>
                <p>81种文档格式作业在线展示和批阅，随时随地批改作业；实时查重，精准比对，避免学生抄袭；自动管理成绩，一键下载作业数据</p>
              </li>
              <li>
                <img src="../assets/picture/8.png" alt="">
                <h2>智能成绩管理</h2>
                <p>汇总考勤、表现、作业、测试、平时成绩、期末成绩；自由调整成绩权重，汇总最终教学成绩，科学权威</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section3-1">
        <img src="../assets/picture/section3-1.png" style="width:100%;">
      </div>
      <div class="section8" id="section-words">
        <h3>媒体报道</h3>
        <p>课堂派深耕教学管理，收到广泛认可</p>
        <!-- <div class="lt" @click=""></div>
        <div class="gt"></div> -->
        <el-carousel :autoplay="false" type="card" height="200px" class="mediareportul">
        <!-- <ul class="mediareportul" style="margin-left: -100.4px; transform: translateX(-2150px); width: 8600px;"> -->
          <el-carousel-item class="card">
            <div class="mrli" index="4" len="6">
                <div class="mrtitle"><a target="_blank" href="http://news.ncepu.edu.cn/mthd/76621.htm">【华北电力大学】“互联网+”让教育发现每一个学生</a></div>
                <div class="mrinfo">“课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。</div>
                <div class="mrbt">
                    <div class="mrdate">2016/04/22</div>
                    <div class="mrlogo"><img src="../assets/picture/huadian.png" alt=""></div>
                </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="card">
            <div class="mrli" index="5" len="6">
              <div class="mrtitle"><a target="_blank" href="http://edu.163.com/15/0327/14/ALNHV72O00294MBF.html">【网易教育】课堂派：教师指向型在线教育平台新思路</a></div>
              <div class="mrinfo">目前，教育资源渐趋雷同并竞相抢占市场份额，在线教育发展进入瓶颈期。可喜的是，课堂派的出现打破了这一随大流的现有局面，致力于教师指向型在线教育平台开发，为在线教育市场发展提出新思路。</div>
              <div class="mrbt">
                  <div class="mrdate">2015/03/27</div>
                  <div class="mrlogo"><img src="../assets/picture/wangyi.png" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="card">
            <div class="mrli mainli liactive" index="0" len="6">
              <div class="mrtitle">
                <a target="_blank" href="http://edu.qq.com/a/20180719/029331.htm">助力智慧课堂：课堂派成为腾讯微校生态战略伙伴</a>
              </div>
              <div class="mrinfo">7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&amp;A的传统模式，现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。</div>
              <div class="mrbt">
                  <div class="mrdate">2018/07/19</div>
                  <div class="mrlogo"><img src="../assets/picture/tencent.jpg" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="card">
            <div class="mrli mainli" index="1" len="6">
              <div class="mrtitle">
                <a target="_blank" href="https://www.sohu.com/a/228148312_429328">课堂派亮相2018中国“互联网+”数字经济峰会</a>
              </div>
              <div class="mrinfo">4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更具实用性和前瞻性。</div>
              <div class="mrbt">
                  <div class="mrdate">2018/04/23</div>
                  <div class="mrlogo"><img src="../assets/picture/sohu.jpg" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          
          <el-carousel-item class="card">
            <div class="mrli mainli" index="2" len="6">
              <div class="mrtitle">
                <a target="_blank" href="http://edu.qq.com/a/20180627/034766.htm">新时代新青年 课堂派创始人陈杰宾的创业梦</a>
              </div>
              <div class="mrinfo">6月26日，中国共产主义青年团第十八次全国代表大会在人民大会堂开幕。共青团委对福建省驻京团工委点赞，CCTV新闻频道进行了同步报道。分享会上，课堂派创始人陈杰宾作为闽籍创业青年代表，向在京青年创业者分享了课堂派的发展模式以及创业历程。</div>
              <div class="mrbt">
                  <div class="mrdate">2018/06/27</div>
                  <div class="mrlogo"><img src="../assets/picture/tencent.jpg" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          
          <el-carousel-item class="card">
            <div class="mrli mainli" index="3" len="6">
              <div class="mrtitle"><a target="_blank" href="http://news.sina.com.cn/o/2015-08-19/doc-ifxfxrai2235429.shtml">【新浪新闻】课堂派云管理颠覆高校传统实习模式</a></div>
              <div class="mrinfo">用课堂派最大的好处就是在学习的过程中，随时跟老师进行沟通和分享，无论从知识和情感层面都需要倾诉，而课堂派不仅提供跟老师同学交流的机会，还能够获得别人的指导和鼓励，让整个学习过程更加轻松。</div>
              <div class="mrbt">
                  <div class="mrdate">2015/08/19</div>
                  <div class="mrlogo"><img src="../assets/picture/sina.png" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          
          <el-carousel-item class="card">
            <div class="mrli mainli" index="4" len="6">
              <div class="mrtitle"><a target="_blank" href="http://news.ncepu.edu.cn/mthd/76621.htm">【华北电力大学】“互联网+”让教育发现每一个学生</a></div>
              <div class="mrinfo">“课堂上教师要及时了解学生对内容的掌握程度，课下学生也希望教师能对自己的学习困难进行及时的指导。”在以前，这些实现起来比较困难的事情，“课堂派”可以让这一切变得轻而易举。</div>
              <div class="mrbt">
                  <div class="mrdate">2016/04/22</div>
                  <div class="mrlogo"><img src="../assets/picture/huadian.png" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          
          <el-carousel-item class="card">
            <div class="mrli mainli" index="5" len="6">
              <div class="mrtitle"><a target="_blank" href="http://edu.163.com/15/0327/14/ALNHV72O00294MBF.html">【网易教育】课堂派：教师指向型在线教育平台新思路</a></div>
              <div class="mrinfo">目前，教育资源渐趋雷同并竞相抢占市场份额，在线教育发展进入瓶颈期。可喜的是，课堂派的出现打破了这一随大流的现有局面，致力于教师指向型在线教育平台开发，为在线教育市场发展提出新思路。</div>
              <div class="mrbt">
                  <div class="mrdate">2015/03/27</div>
                  <div class="mrlogo"><img src="../assets/picture/wangyi.png" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="card">
            <div class="mrli" index="0" len="6">
              <div class="mrtitle">
                <a target="_blank" href="http://edu.qq.com/a/20180719/029331.htm">助力智慧课堂：课堂派成为腾讯微校生态战略伙伴</a>
                </div>
              <div class="mrinfo">7月18日，腾讯微校发布会在北京船山书院如期举行，正式推出以微信校园卡、腾讯校园码为核心的数字校园解决方案——腾讯微校2.0。本次发布会突破传统Q&amp;A的传统模式，现场模拟校园场景，利用“一款非常好用的应用”课堂派进行了现场互动。作为腾讯微校的生态战略伙伴，互动教学品牌课堂派展现了科技时代，智慧课堂所带来的创新和变化。</div>
              <div class="mrbt">
                  <div class="mrdate">2018/07/19</div>
                  <div class="mrlogo"><img src="../assets/picture/tencent.jpg" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item class="card">
            <div class="mrli" index="1" len="6">
              <div class="mrtitle">
                <a target="_blank" href="https://www.sohu.com/a/228148312_429328">课堂派亮相2018中国“互联网+”数字经济峰会</a>
              </div>
              <div class="mrinfo">4月12日下午教育分论坛，北京大学软件与微电子学院林院长分享了智慧课堂的建设经验：教学资源呈现多样化、课堂形式丰富、如何把学生从玩手机的屏幕聚焦到课堂互动环节等方面。林院长表示，课堂派在研发过程中，学院的一线教师主动参与，把很多丰富的实际教学经验融入研发当中，使整个智慧课堂的建设更具实用性和前瞻性。</div>
              <div class="mrbt">
                  <div class="mrdate">2018/04/23</div>
                  <div class="mrlogo"><img src="../assets/picture/sohu.jpg" alt=""></div>
              </div>
            </div>
          </el-carousel-item>
          
        <!-- </ul> -->
        </el-carousel>
        <!-- <ul class="mrdotul">
          <li class="dot dotactive" index="0" len="6">
          </li>
          
          <li class="dot" index="1" len="6">
          </li>
          
          <li class="dot" index="2" len="6">
          </li>
          
          <li class="dot" index="3" len="6">
          </li>
          
          <li class="dot" index="4" len="6">
          </li>
          
          <li class="dot" index="5" len="6">
          </li>
        </ul> -->
      </div>
      <div class="section7" id="section-cooperation">
        <div class="cWidth">
            <h3>
                <span>6000+ </span>学校正在使用课堂派
            </h3>
            <div class="all">
                <div class="onelogos">
                    <img src="../assets/picture/1(2).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/2 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/3 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/4 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/5 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/6 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/7 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/8 (1).png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/9.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/10.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/11.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/12.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/13.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/14.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/15.png" alt="">
                </div>
                <div class="onelogos">
                    <img src="../assets/picture/16.png" alt="">
                </div>
            </div>
        </div>
    </div>
    </div>
    
    <div class="footer">
    <div class="cWidth">
        <div class="nav-new clearfix">
            <a href="/index/abouts.html">关于我们</a>
            <a href="/index/contact.html">联系我们</a>
            <a href="/index/service.html">服务条款</a>
            <a href="/index/older.html" target="_blank">浏览器下载</a>
            <a href="/index/updateDynamics">更新动态</a>
        </div>
        <p>Copyright © 2014 ketangpai.com All Rights Reserved. 京ICP备14023276号-4</p>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homepage{
  position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    overflow-y: auto;
    background-size: 100% 100%;
    height: 100%;
    width: 100%;
}
.logoimage {
  height: 32px;
  width: 127px;
  margin-top: 12px;
  display: block;
}
.header .nav {
  height: 60px;
  line-height: 60px;
}
.header .nav a {
  float: left;
  color: #fff;
  font-size: 16px;
  padding: 0 20px;
  margin-right: 32px;
}
.header .nav a:hover {
  background-color: #333;
}
.header {
  width: 100%;
  background: #484848;
  height: 60px;
}
.header .logo {
  padding-left: 60px;
  height: 60px;
  margin-right: 52px;
}
.f1 {
  float: left;
}
.header .nav a {
  float: left;
  color: #fff;
  font-size: 16px;
  padding: 0 20px;
  margin-right: 32px;
}
#solutiontop {
  position: relative;
  float: left;
}
#solutionul {
  background: white;
  width: 120px;
  box-shadow: 0px 0px 5px 1px rgba(80, 80, 80, 0.4);
  position: absolute;
  z-index: 20;
  top: 60px;
  left: 0;
  display: none;
}
.solutionli a {
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  color: #333 !important;
  padding: 0 10px !important;
  height: 40px !important;
  line-height: 40px !important;
}
a {
  text-decoration: none;
  outline: 0;
}
.header .log-reg {
  padding-right: 90px;
  margin-top: 10px;
  font-size: 0;
}
.fr {
  float: right;
}
.header .log-reg a.login {
  margin-right: 20px;
  border: 1px solid;
}
.header .log-reg a.login:hover {
  color: #357ae8;
}
.header .log-reg a {
  display: inline-block;
  width: 76px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  color: #fff;
  font-size: 16px;
}
.header .log-reg a.regist {
  margin-left: 30px;
  background: #357ae8;
}
.header .log-reg a.regist:hover {
  background-color: blue;
}
.home-page .section1 {
  height: 520px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.section1 .el-carousel__item:nth-child(2n) {
  background-image: url("../assets/picture/6(2).png");
  height: 520px;
  width: 100%;
}

.section1 .el-carousel__item:nth-child(2n + 1) {
  background-image: url("../assets/picture/8(2).png");
  height: 520px;
  width: 100%;
}
.home-page .section2-1 {
  height: 540px;
  position: relative;
  background-color: #fff;
}
.cWidth {
  width: 1018px;
  margin-left: auto;
  margin-right: auto;
}
.home-page .section2-1 .summaryBox {
  position: absolute;
  top: -80px;
  z-index: 2;
  width: 1018px;
}
.home-page .section2-1 ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.home-page .section2-1 ul li {
  width: 222px;
  height: 260px;
  background-color: #fff;
  box-shadow: 0 0 20px 0 rgba(4, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}
.home-page .section2-1 ul li:not(:nth-child(4n)) {
  margin-right: 30px;
}
.home-page .section2-1 ul li img {
  margin-top: 25px;
  width: 72px;
  height: 72px;
}
.home-page .section2-1 ul li h2 {
  color: #1f2023;
  font-size: 18px;
  margin-top: 16px;
}
.home-page .section2-1 ul li p {
  color: #aab5c2;
  margin-top: 16px;
  font-size: 13px;
  width: 100%;
  word-break: break-all;
}
.home-page {
  letter-spacing: 2px;
}
img {
  border: none;
}
li {
  list-style: none;
}
.el-carousel__indicator--horizontal {
  display: inline-block;
  padding: 30px 4px;
}
.home-page .section3-1 {
  min-height: 1400px;
  width: 100%;
  background-size: cover;
  margin: 0 auto;
}
.home-page .section8 {
  background: #fff;
  height: 590px;
  overflow-x: hidden;
  position: relative;
  width: 100%;
}
.home-page .section8 h3 {
  text-align: center;
  font-size: 30px;
  font-weight: 400;
}
.home-page .section8 p {
  color: #bfbfbf;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
}
.mediareportul {
  overflow: hidden;
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  height: 315px;

}
.mrli {
  width: 720px;
  margin-right: 40px;
  padding: 40px;
  float: left;
  /* opacity: .4; */
  transition: opacity 1s;
  -moz-transition: opacity 1s;
  -webkit-transition: opacity 1s;
  -o-transition: opacity 1s;
  box-shadow: 0 5px 20px 0 rgba(204, 204, 204, 0.5),
    0 -5px 20px 0 rgba(204, 204, 204, 0.5),
    5px 0 20px 0 rgba(204, 204, 204, 0.5),
    -5px 0 20px 0 rgba(204, 204, 204, 0.5);
}
.mrtitle {
  font-size: 26px;
}
.mrbt,
.mrtitle {
  height: 30px;
  line-height: 30px;
}
.mrtitle a {
  color: #333;
}
a {
  text-decoration: none;
  outline: 0;
}
.mrinfo {
  height: 100px;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 25px;
  overflow: hidden;
}
.mrbt,
.mrtitle {
  height: 30px;
  line-height: 30px;
}
.mrdate {
  float: left;
  font-size: 16px;
}
.mrlogo {
  float: right;
}
.mrlogo img {
  max-height: 35px;
}
/* ul.mrdotul {
  width: 980px;
  margin: 0 auto;
  height: 20px;
  text-align: center;
  letter-spacing: 10px;
}
li.dot {
  display: inline-block;
  margin: 0;
  padding: 0;
  height: 10px;
  width: 10px;
  background: #bbb;
  border-radius: 10px;
  transition: width 1s;
  -moz-transition: width 1s;
  -webkit-transition: width 1s;
  -o-transition: width 1s;
} */
/* .dotactive {
  width: 40px !important;
} */
.home-page .section7 {
  background: #fff;
}
.home-page .section7 h3 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #333;
}
.home-page .section7 h3 span {
  color: #32baf0;
}
.home-page .section7 .all {
  margin-top: 75px;
  text-align: center;
}
.onelogos {
  width: 25%;
  height: 120px;
  text-align: center;
  float: left;
  user-select: none;
}
.footer {
  height: 150px;
  margin-top: 550px;
  background: #ececec;
}
.footer .nav-new {
  padding-top: 36px;
  text-align: center;
}
.footer .nav-new a {
  color: #2d2d2d;
  margin-right: 60px;
}
.footer .nav-new a:hover{
  color: blue;
}
.footer p {
  color: #5b5b5b;
  font-size: 12px;
}
.footer p {
  margin-top: 20px;
  text-align: center;
}

.carousel-style /deep/ .el-carousel__indicators--horizontal{
  bottom:50px;
}

/* .section8 .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
ssection8 .el-carousel__item:nth-child(2n+1) {
    background-color: #99a9bf;
  } */

.card{
  height: 315px;
  width: 800px;
  box-shadow:0px 0px  10px 5px #aaa;
  background-color: #fff;
}
</style>
