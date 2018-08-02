<template>
  <div id="chat">
    <el-tabs v-model="activeName">
      <el-tab-pane label="发消息" name="F">
        发消息
      </el-tab-pane>
      <el-tab-pane label="联系人" name="M">
        联系人
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'M'
    }
  }
}
</script>

<style scoped>
#chat {
  height: 100%;
  margin: 0 8px;
}
</style>
