
<template>
  <div id="login">
    <div id="card">
      <div id="code-img">
        <img src="">
      </div>
      <p id="msg">使用手机微信扫码登录</p>
    </div>
  </div>
</template>

<style scoped>
#login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(../assets/login-bg.jpg) no-repeat 50%;
  background-size: cover;
}

#card {
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  background: white;
}

#code-img {
  width: 270px;
  height: 270px;
  margin: 20px auto 10px;
}

#code-img img {
  width: 270px;
  height: 270px;
}

#msg {
  text-align: center;
}
</style>

