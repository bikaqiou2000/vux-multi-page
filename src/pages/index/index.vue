<template>
  <div>
    <x-header>海马生产协同平台</x-header>
    <box gap="10px 10px">
      <P>Click Me</P>
      <x-button>submit</x-button>
      <x-button type="primary" @click.native="processButton001">primary</x-button>
      <x-button type="warn">Delete</x-button>
    </box>
  </div>
</template>

<script>
import { XHeader, XButton, Box, Flexbox, FlexboxItem, } from 'vux'

export default {
   components: {
    XHeader,
    XButton,
    Box,
    Flexbox,
    FlexboxItem,
   },
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    processButton001 () {
        console.log("click +1!")
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body {
  background-color: #fbf9fe;
}
</style>
