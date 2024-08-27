<template>
  <div class="login-page">
    <div class="header">
      <h1>跨模态图像文本检索系统</h1>
      <p>让图像和文本连接更紧密</p>
    </div>

    <div class="login-form">
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="text" placeholder="用户名" v-model="username" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="密码" v-model="password" />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';

export default {
  name: 'LoginPage',
  components: {
    FooterComponent
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.username === '123' && this.password === '123') {
        // 跳转到主页面
        this.$router.push('/homepage');
      } else {
        alert('用户名或密码错误');
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  background-color: #1e2a38; /* 改为深色背景 */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeIn 1s ease-out; /* 淡入动画 */
}

.header {
  background-color: #394e6a; /* 更柔和的深蓝色 */
  padding: 20px;
  text-align: center;
  color: #fff;
  animation: slideDown 0.5s ease-out; /* 下滑动画 */
}

.login-form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 300px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #3a475c;
  border-radius: 5px;
  transition: border-color 0.3s ease; /* 动画效果 */
}

input:focus {
  border-color: #4a90e2; /* 聚焦时的边框颜色 */
}

button {
  width: 320px;
  padding: 10px;
  background-color: #4a90e2; /* 亮蓝色按钮 */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease; /* 动画效果 */
}

button:hover {
  background-color: #357ABD; /* 悬停时颜色变化 */
  transform: translateY(-2px); /* 微动效果 */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
