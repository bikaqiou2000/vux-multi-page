<template>
  <div style="height:100%;" >
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px" >
    <x-header left-options.showBack="false" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
      海马MES-主页
    </x-header>
    <div style="padding: 15px;">
      <button-tab >
        <button-tab-item selected>二工厂</button-tab-item>
        <button-tab-item>三工厂</button-tab-item>
      </button-tab>
      <br/>
      <group-title>消息通知</group-title>
      <grid  :cols="2"  :show-lr-borders="true" :show-vertical-dividers="false">
        <grid-item :lable="'最新通知'">
          <img slot="icon" src="../../assets/msg.png">
          <span slot="label">
            最新通知
            <badge text="8"></badge>
          </span>
        </grid-item>
        <grid-item >
          <img slot="icon" src="../../assets/msgsystem.png">
          <span slot="label">
            最新警告
            <badge text="1"></badge>
          </span>
        </grid-item>
      </grid>
      <br/>
      <group-title>管理数据</group-title>
      <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item >
          <img slot="icon" src="../../assets/data06.png">
          <span slot="label">实时产量</span>
        </grid-item>
        <grid-item >
          <img slot="icon" src="../../assets/car.png">
          <span slot="label">车辆信息</span>
        </grid-item>
        <grid-item >
          <img slot="icon" src="../../assets/database.png">
          <span slot="label">过点信息</span>
        </grid-item>
      </grid>
    </div>
    </view-box>
  </div>
</template>

<script>
import {
  XHeader,XButton,Box,Flexbox,FlexboxItem,
  Grid,GridItem,ButtonTab,ButtonTabItem,
  Badge, ViewBox, Group, GroupTitle,
} from "vux";

export default {
  components: {
    XHeader,XButton,Box,Flexbox,FlexboxItem,
    Grid,GridItem,ButtonTab,ButtonTabItem,
    Badge, ViewBox, Group, GroupTitle, 
  },
  name: "app",
  data() {
    return {};
  },
  methods: {
    processButton001() {
      console.log("click +1!");
    }
  }
};
</script>

<style lang="less" >
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
body {
  background-color: #fbf9fe;
}
group-title {
  color: gray;
}
.weui-grids {
  background-color: #fff;
}
.badge-value {
  display: inline-block !important;
}
.vertical-middle {
  vertical-align: middle;
}
</style>
