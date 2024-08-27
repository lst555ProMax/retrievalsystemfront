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
        if(this.username == '123' && this.password=='123') {
          // 跳转到主页面
          this.$router.push('/home'); 
        }
        else {
          alert('用户名或密码错误');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-page {
    background-color: #002d47;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .header {
    background-color: #00695c;
    padding: 20px;
    text-align: center;
    color: #fff;
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
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 320px;
    padding: 10px;
    background-color: #00695c;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #004d40;
  }
  </style>
  