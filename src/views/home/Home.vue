<template>
    <div>
      <el-header class="menu-top">
        <div class="projectName">ZIY后台管理</div>
        <div class="userInfo">
          <div>欢迎您，<span style="color: #f3b01e"> admin </span></div>
          <div>丨</div>
          <div class="loginOut" @click="back">返回上一页</div>
          <div class="iNotice" @click="toHome">首页</div>
          <div class="iNotice" @click="logout">退出</div>
        </div>
      </el-header>
  
      <el-container>
        <el-aside width="220px"><MenuList></MenuList></el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import MenuList from '../../components/MenuList/index.vue'
  
  const router = useRouter()
  
  // 退出
  const logout = () => {
    sessionStorage.clear()
    localStorage.clear()
    router.go(0)
  }
  
  //  返回
  const back = () => {
    router.go(-1)
  }
  
  const toHome = () => {
    router.push({
      path: '/',
    })
  }
  </script>
  
  <style lang="scss" scoped>
  .menu-top {
    height: 90px !important;
    border-bottom: 1px solid #1e1f33;
    background-color: $themeColorBlue;
    color: $themeFontBlue;
    display: flex;
    justify-content: space-between;
    .projectName {
      height: 90px;
      font-size: 36px;
      line-height: 90px;
    }
  
    .icontainer {
      min-width: 980px;
      box-sizing: border-box;
      padding: 10px;
      background-color: #08213d;
    }
    .userInfo {
      display: flex;
      font-size: 16px;
      align-items: center;
      > div {
        margin: 0 10px;
      }
      .loginOut {
        &:hover {
          cursor: pointer;
        }
      }
      .iNotice {
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  :deep(.el-main) {
    --el-main-padding: 0px;
    width: 100%;
    overflow: auto;
  }
  
  </style>
  