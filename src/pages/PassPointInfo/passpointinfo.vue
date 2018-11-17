<template>
  <div style="height:100%;">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <!-- 抬头 -->
      <x-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" >
        二工厂-过点信息
      </x-header>
      <!-- 主内容 -->
      <div>
        <group>
          <x-input title="管理号" v-model="value1" placeholder="6位管理号" type="text" ></x-input>
        </group>

        <group label-width="6em" title="车辆信息">
          <cell title="车型" align-items="flex-start" >E3</cell>
          <cell title="配置" align-items="flex-start" >QAB</cell>
          <cell title="颜色" align-items="flex-start" >雪山白</cell>
          <cell title="VIN" align-items="flex-start" >LHM12389273947392</cell>
          <cell title="管理号" align-items="flex-start" >045392</cell>
        </group>

        <flow>
          <flow-state state="1" is-done>
            <span slot="title">焊装</span>
          </flow-state>
          <flow-line :is-done="true"></flow-line>

          <flow-state state="2" is-done>
            <span slot="title">涂装</span>
          </flow-state>
          <flow-line :tip="'pbs'"></flow-line>

          <flow-state state="3">
            <span slot="title">总装</span>
          </flow-state>
          <flow-line></flow-line>

          <flow-state state="4" >
            <span slot="title">完成</span>
          </flow-state>
        </flow>


        <div>
          <x-table>
            <thead>
              <tr>
                <th>点位</th>
                <th>时间</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>点位1</td>
                <td>2018-10-01 09:20:30</td>
              </tr>
              <tr>
                <td>点位2</td>
                <td>2018-10-01 12:20:30</td>
              </tr>
              <tr>
                <td>点位3</td>
                <td>2018-10-01 15:20:00</td>
              </tr>
              <tr>
                <td>点位4</td>
                <td>2018-10-01 17:40:10</td>
              </tr>
              <tr>
                <td>点位5</td>
                <td>2018-10-01 17:40:10</td>
              </tr>
              <tr>
                <td>点位6</td>
                <td>2018-10-01 17:40:10</td>
              </tr>
              <tr>
                <td>点位7</td>
                <td>2018-10-01 17:40:10</td>
              </tr>
              <tr>
                <td>点位8</td>
                <td>2018-10-01 17:40:10</td>
              </tr>
            </tbody>
          </x-table>
        </div>

      </div>
      <!-- 底部 -->
      <div slot="bottom"></div>
    </view-box>
  </div>
</template>

<script>
import { 
  XHeader, XButton, Box, Flexbox, FlexboxItem, 
  Grid, GridItem, ButtonTab, ButtonTabItem,Badge,Calendar,
  Panel, Group, ViewBox, Card, CheckIcon, PopupRadio, 
  XInput, Cell, CellBox, Flow, FlowState, FlowLine,XTable 
} from 'vux'


export default {
   components: {
    XHeader, XButton, Box, Flexbox, FlexboxItem, 
    Grid, GridItem, ButtonTab, ButtonTabItem,Badge,Calendar,
    Panel, Group, ViewBox, Card, CheckIcon, PopupRadio, 
    XInput, Cell, CellBox, Flow, FlowState, FlowLine,XTable
   },
  name: 'app',
  data () {
    return {
      value1: '123456',
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
