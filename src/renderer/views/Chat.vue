<template>
  <div id="chat">
    <el-tabs v-model="activeName">
      <el-tab-pane label="发消息" name="F">
        发消息
      </el-tab-pane>
      <el-tab-pane label="联系人" name="M">
        <chat-list></chat-list>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ChatList from '@/components/ChatList.vue'
export default {
  components: {
    'chat-list': ChatList
  },
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
