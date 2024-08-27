<template>
  <div class="home-page">
    <header class="header">
      <div class="logo">系统Logo</div>
      <input type="text" placeholder="搜索..." class="search-bar" />
      <div class="profile-icon"></div>
    </header>
    <div class="main-content">
      <aside class="sidebar">
        <ul>
          <li>结果排序</li>
          <li>结果筛选</li>
          <li>我的收藏</li>
          <li>我的历史记录</li>
        </ul>
      </aside>
      <div class="chat-area">
        <!-- Placeholder for chat content -->
      </div>
    </div>
    <footer class="footer">
      <div class="message-input">
        <button class="upload-button">上传</button>
        <input type="text" placeholder="输入内容..." class="input-field" />
        <button class="submit-button">提交</button>
      </div>
      <p>© 2024 侦查不严谨 | 版权所有 | 原则方式 | 隐私政策</p>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
});
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #2a2d34; /* 背景色调整为深灰色 */
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #1e1f24; /* 深色背景 */
  color: #ffffff; /* 白色文字 */
  animation: slideDown 0.5s ease-out; /* 下滑动画 */
}

.logo {
  font-size: 1.5em;
  color: #ffcf33; /* 金黄色 */
  font-weight: bold; /* 加粗 */
}

.search-bar {
  width: 400px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #444; /* 深灰色边框 */
  background-color: #333; /* 深灰色背景 */
  color: #fff; /* 白色文字 */
  transition: border-color 0.3s ease; /* 边框颜色过渡 */
}

.search-bar::placeholder {
  color: #888; /* 占位符颜色 */
}

.search-bar:focus {
  border-color: #ffcf33; /* 聚焦时的边框颜色 */
}

.profile-icon {
  width: 40px;
  height: 40px;
  background-color: #555; /* 深灰色 */
  border-radius: 50%;
  transition: background-color 0.3s ease; /* 背景颜色过渡 */
}

.profile-icon:hover {
  background-color: #ffcf33; /* 悬停时的背景颜色 */
}

.main-content {
  display: flex;
  flex-grow: 1;
  background-color: #2a2d34; /* 匹配背景色 */
}

.sidebar {
  width: 200px;
  background-color: #1e1f24; /* 深色背景 */
  padding: 20px;
  color: #bbb; /* 浅灰色文字 */
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
  color: #ffcf33; /* 金黄色 */
  cursor: pointer; /* 鼠标指针 */
  transition: color 0.3s ease; /* 颜色过渡 */
}

.sidebar li:hover {
  color: #fff; /* 悬停时白色 */
}

.chat-area {
  flex-grow: 1;
  background-color: #333; /* 深灰色背景 */
  padding: 20px;
  color: #fff; /* 白色文字 */
}

.footer {
  padding: 10px 20px;
  background-color: #1e1f24; /* 深色背景 */
  text-align: center;
  font-size: 0.8em;
  color: #8c8c8c;
}

.message-input {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.upload-button,
.submit-button {
  padding: 8px 15px;
  margin: 0 5px;
  background-color: #ffcf33; /* 金黄色 */
  border: none;
  border-radius: 4px;
  color: #1e1f24; /* 深色文字 */
  font-weight: bold; /* 加粗 */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease; /* 背景颜色和微动效果 */
}

.upload-button:hover,
.submit-button:hover {
  background-color: #e6b800; /* 悬停时的颜色 */
  transform: translateY(-2px); /* 悬停时微动 */
}

.input-field {
  flex-grow: 1;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #444; /* 深灰色边框 */
  background-color: #333; /* 深灰色背景 */
  color: #fff; /* 白色文字 */
  margin: 0 10px;
  transition: border-color 0.3s ease; /* 边框颜色过渡 */
}

.input-field::placeholder {
  color: #888; /* 占位符颜色 */
}

.input-field:focus {
  border-color: #ffcf33; /* 聚焦时的边框颜色 */
}

/* 动画效果 */
@keyframes slideDown {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>
