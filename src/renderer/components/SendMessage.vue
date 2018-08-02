
<template>
  <div id="send-message">
    <el-input
      type="textarea"
      :rows="10"
      placeholder="输入文本消息"></el-input>
    
    <div id="buttons">
      <el-button
        id="send-text-btn"
        type="primary">发送文本消息</el-button>
    </div>
  </div>
</template>

<style scoped>
#buttons {
  margin-top: 8px;
}
</style>
