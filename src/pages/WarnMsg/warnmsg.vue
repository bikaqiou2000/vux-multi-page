<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
        二工厂-异常警告
      </x-header>
      <div>
        <button-tab style="padding:12px" >
          <button-tab-item selected>待处理</button-tab-item>
          <button-tab-item>已处理</button-tab-item>
        </button-tab>

        <group>
          <calendar v-model="demo2" title="查看日期" disable-future></calendar>
        </group>

        <card style="padding:12px" v-for="msgitem in list" :key="msgitem.id">
          <div slot="content">
            <flexbox>
              <flexbox-item :span="6"><p class="msg-title">{{msgitem.title}}</p></flexbox-item>
            </flexbox>
            <flexbox>
              <flexbox-item :span="2" ><p class="msg-field-head">内容</p></flexbox-item>
              <flexbox-item><p class="msg-field-content">{{msgitem.desc}}</p></flexbox-item>
            </flexbox>
            <flexbox>
              <flexbox-item :span="2"><p class="msg-field-head">时间</p></flexbox-item>
              <flexbox-item><p class="msg-field-content">{{msgitem.date}}</p></flexbox-item>
            </flexbox>
            <flexbox>
              <flexbox-item :span="2"><p class="msg-field-head">已处理</p></flexbox-item>
              <flexbox-item><check-icon :value.sync="msgitem.isread"></check-icon></flexbox-item>
            </flexbox>
          </div>
        </card>
        <!--
        <panel header="消息列表" :list="list" type="4" ></panel>
        -->
      </div>
      <div slot="bottom"></div>
    </view-box>
  </div>
</template>

<script>
import { 
  XHeader, XButton, Box, Flexbox, FlexboxItem, 
  Grid, GridItem, ButtonTab, ButtonTabItem,Badge,Calendar,
  Panel, Group, ViewBox, Card, CheckIcon
} from 'vux'


export default {
   components: {
    XHeader, XButton, Box, Flexbox, FlexboxItem, 
    Grid, GridItem, ButtonTab, ButtonTabItem,Badge,Calendar,
    Panel,Group, ViewBox, Card, CheckIcon 
   },
  name: 'app',
  data () {
    return {
      demo2: 'TODAY',
      list: [{
        id:1,
        title: 'RFID设备报警',
        desc: '点位PC1 原因：数据校验不符,异常通过。',
        date: '2018-10-01 23:20:00',
        isread:true,
      }, {
        id:2,
        title: '打印机设备报警',
        desc: '点位PC1 原因：设备不响应。',
        date: '2018-10-01 23:20:00',
        isread:false,
      },
     
      ],
    }
  },
  methods: {
    processButton001 () {
        //console.log("click +1!")
    }
  }
}
</script>

<style lang="less" >
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color: #fbf9fe;
}

group-title{
  color: rgb(128, 127, 127);
}
.weui-grids {
  background-color: #fff;
}
.badge-value {
  display: inline-block!important;
}
.vertical-middle {
  vertical-align: middle;
}
.msg-title{
  padding: 5px;
  font-weight:800;
  font-size: +1.2em;
  color: rgb(90, 0, 0);
}
.msg-field-head{
  padding: 2px;
  color: rgb(128, 127, 127);
}
.msg-field-content{
  padding: 2px;
  color: rgb(128, 127, 127);
}
</style>
