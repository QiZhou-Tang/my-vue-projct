<template>
  <modal name="conditional-modal" :adaptive="true" :max-width="500" :max-height="300" width="80%" height="50%">
    <div class="bgcolor" style="padding:30px; text-align: center">
      <p class="text-light" href="javascript:void(0)" onMouseOut="hideImg()" onmouseover="showImg()">扫码分享拉票</p>
      <!-- <div id="wxImg" style="height:50px;back-ground:#f00;position:absolute;">这里是微信图片</div> -->
    </div>
    <div class="container">
      <!-- <div @mouseover="overShow" @mouseout="outHide">
        <el-menu>
          <el-submenu index="checkbatch">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span :class="{show:showText,hide:hideText}">批次信息</span>
            </template>
            <el-menu-item>全部批次信息查看</el-menu-item>
            <el-menu-item>接受中批次信息查看</el-menu-item>
            <el-menu-item>审核中批次信息查看</el-menu-item>
            <el-menu-item>已完成批次信息查看</el-menu-item>
          </el-submenu>
        </el-menu>
      </div> -->
      <p class=" d-flex justify-content-around">
        <img src="../assets/qq.svg">
        <img src="../assets/weibo.svg">
        <img src="../assets/wechat.svg">
      </p>
      <p class="d-flex justify-content-around">
        <img class="qrcode" src="../assets/QR.png">
        <img class="qrcode" src="../assets/QR.png">
        <img class="qrcode" src="../assets/QR.png">
      </p>
    </div>
  </modal>
</template>
<script>
export default {
  name: "ConditionalModal",

  data() {
    return {
      showText: false,
      hideText: true
    };
  },
  methods: {
    // beforeOpen(event) {
    //   console.log('Event:', event)
    //   console.log('Params:', event.params)
    //   if (event.params.show === false) {
    //     event.stop()
    //   }
    // }
    // showImg() {
    //   $("wxImg").style.display = "block";
    // },
    // hideImg() {
    //   $("wxImg").style.display = "none";
    // }
  },
  overShow() {
    this.showText = !this.showText;
    this.hideText = !this.hideText;
  },
  outHide() {
    this.showText = !this.showText;
    this.hideText = !this.hideText;
  }
};
</script>


<style lang="stylus" scoped>
.bgcolor {
  background-color: #262a42;
}

.container {
  width: 100%;
  height: 100%;
  background-color: #262a42;

  img {
    width: 50px;
    height: 50px;
  }

  .qrcode {
    width: 100px;
    height 100px;
  }
}
</style>
