<template>
  <div class="layoutcontent">
    <!-- banner -->
    <div class="jumbotron banner">
      <div class="container banner">
        <h2 class="bannerinfo text-center" style="color:#cfb07b">投票上币，由你做主</h2>
        <p class="banner_times text-light text-center">每投 1 票需支付0.1 HT，每次可以投多票，可以多次投票。投票支付的HT不予退还。<br>以每期投票截止时间为准，票数榜排名靠前(同时参考人气榜排名)的项目可上线HADAX。</p>
      </div>
      <p class="text-center">
        <a href="https://support.huobipro.com/hc/zh-cn/articles/360000754171" class="btn btn-outline-warning btn-lg" role="button">
          投币上币规则</a>
      </p>
    </div>

    <!-- body -->
    <!-- 倒计时 -->
    <div class="container infobar" style="background-color:#181b2a;">
      <div class="nextime">
        <span>下期投票开始时间</span>
        :
        <em>{{nextime.beginTime}}</em>
        <br>
        <span class="nextimeInfo">本期投票已结束，投票结果请关注公告</span>
        <a href="https://support.huobipro.com/hc/zh-cn/articles/360000754211-HADAX%E4%B8%8A%E5%B8%81%E7%94%B3%E8%AF%B7%E8%AF%B4%E6%98%8E"><img src="../assets/hand.svg">上币申请</a>
      </div>
    </div>

    <div class="container ">
      <!-- 币种排名 -->
      <b-card no-body style="background-color:#181b2a;">
        <b-tabs pills card>
          <b-tab title="票数榜" active>

            <div v-for="(item,index) in ByTicket" :key="index" class="content">

              <div class="checkinfoticket d-flex justify-content-between">
                <div class="left d-flex align-items-center">
                  <div class="crownbg">
                    <p class="crown text-center">{{index+1}}</p>
                  </div>

                  <div class="right">
                    <h3 class="text-light">{{item.title}}</h3>
                    <span class="text-info">{{item.name}}</span>
                  </div>
                </div>

                <div class="d-flex d-flex align-items-center">
                  <b-btn class="btn btn-outline-info " @click="toggle(index)">查看介绍</b-btn>
                </div>

                <div class="totalTicket d-flex align-items-center">
                  <div class="vote d-flex flex-column">
                    <b class="text-light" style="font-size:24px;">{{item.totalTicket}}
                      <strong class="text-danger">票</strong>
                    </b>
                    <span class="text-secondary">{{item.totalPeople}}
                      <strong class="text-warning">人支持</strong>
                    </span>
                  </div>
                </div>

                <div class="votebutton d-flex align-items-center">
                  <b-modal class="modelcontent" id="modal-center" centered title="扫码投票">
                    <p class="my-4 d-flex justify-content-around">
                      <img src="../assets/qq.svg">
                      <img src="../assets/weibo.svg">
                      <img src="../assets/wechat.svg">
                    </p>
                  </b-modal>
                  <b-btn v-b-modal.modal-center class="btn-outline-success">为他拉票</b-btn>
                  <b-button href="#" disabled variant="secondary">暂停投票</b-button>
                </div>
              </div>
              <div class="checkinfo">
                <div v-show="index==isShow" class="showinfo ">
                  <b-card>
                    <p class="card-text text-light">{{item.resume}}</p>
                    <a href="#">前往官网</a>
                    <a href="#">查看白皮书</a>
                  </b-card>
                </div>
              </div>

            </div>
          </b-tab>

          <!-- 人数榜 -->
          <b-tab title="人数榜">
            <div v-for="(post,index) in PeopleData" :key="index" class="content">

              <div class="checkinfoticket d-flex justify-content-between">
                <div class="left d-flex align-items-center">
                  <div class="crownbg">
                    <p class="crown text-center">{{index+1}}</p>
                  </div>

                  <div class="right">
                    <h3 class="text-light">{{post.title}}</h3>
                    <span class="text-info">{{post.name}}</span>
                  </div>
                  <div>
                  </div>
                </div>

                <div class="d-flex d-flex align-items-center">
                  <b-btn class="btn btn-outline-info " @click="toggle(index)">查看介绍</b-btn>
                </div>

                <div class="totalTicket d-flex align-items-center">
                  <div class="vote d-flex flex-column">
                    <b class="text-light" style="font-size:24px;">{{post.totalTicket}}
                      <strong class="text-danger">票</strong>
                    </b>
                    <span class="text-secondary">{{post.totalPeople}}
                      <strong class="text-warning">人支持</strong>
                    </span>
                  </div>
                </div>

                <div class="votebutton d-flex align-items-center">
                  <b-modal class="modelcontent" id="modal-center" centered title="扫码投票">
                    <p class="my-4 d-flex justify-content-around">
                      <img src="../assets/qq.svg">
                      <img src="../assets/weibo.svg">
                      <img src="../assets/wechat.svg">
                    </p>
                  </b-modal>
                  <b-btn v-b-modal.modal-center class="btn-outline-success">为他拉票</b-btn>
                  <b-button href="#" disabled variant="secondary">暂停投票</b-button>
                </div>
              </div>
              <div class="checkinfo">
                <div v-show="index==isShow" class="showinfo ">
                  <b-card>
                    <p class="card-text text-light">{{post.resume}}</p>
                    <a href="#">前往官网</a>
                    <a href="#">查看白皮书</a>
                  </b-card>
                </div>
              </div>

            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>

</template>


<script>
import axios from "axios";
import common from "../common/common";

export default {
  name: "app",

  data() {
    return {
      ByTicket: {},
      PeopleData: {},
      nextime: {},
      isShow: 0
    };
  },
  ready() {},
  created() {
    this.getByPeopleData();
    this.getByTicket();
    this.getScheduleList();
  },
  methods: {
    toggle(index) {
      if (this.isShow == index) {
        this.isShow = -1;
      } else {
        this.isShow = index;
      }
    },

    getByPeopleData() {
      // 获取人数排行榜
      const url = `${
        common.apihost
      }vote/getVoteCandidateCoinListOrderByPeople.o`;

      axios.get(url).then(
        response => {
          this.PeopleData = response.data.result;
          console.log(response);
        },
        err => {}
      );
    },

    getScheduleList() {
      //获取下次投票开始时间
      const url = `${common.apihost}vote/getVoteScheduleList.o`;

      axios.get(url).then(
        response => {
          this.nextime = response.data.result[0];
          console.log(response);
        },
        err => {}
      );
    },

    getByTicket() {
      // 获取票数排名
      const url = `${
        common.apihost
      }vote/getVoteCandidateCoinListOrderByTicket.o`;

      axios.get(url).then(
        response => {
          this.ByTicket = response.data.result;
          console.log(response);
        },
        err => {}
      );
    }
  },

  mounted() {}
};
</script>


<style lang="stylus" scoped>
ul, li {
  padding: 0;
  margin: 0;
  list-style: none;
}

div.layoutcontent {
  background-color: #262a42;
}

div.jumbotron.banner {
  background: url('../assets/banner.jpg') no-repeat center center;
  height: 650px;
  margin-top: -2px;
  margin-bottom: 0px;
}

.bannerinfo {
  font-size: 50px;
  font-weight: 400;
  margin-top: 200px;
}

div.nextime {
  padding-top: 40px;
  margin-left: 70px;
  color: pink;
}

.checkinfoticket {
  height: 130px;

  .left {
    padding-left: 20px;
    width: 150px;
  }

  .crownbg {
    height: 50px;
    width: 50px;
    background: url('../assets/glod.svg');
    background-size: cover;
    display: block;
    margin-left: 20px;
    float: left;

    p.crown {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      color: black;
      font-weight: bold;
    }
  }

  .right {
    padding-left: 60px;
  }
}

div.card-body {
  background-color: #181b2a;
}
</style>

