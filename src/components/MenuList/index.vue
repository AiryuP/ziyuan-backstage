<template>
  <el-menu
    :default-active="menuActive"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1" @click="onMenuItemClick('/index',  $event)">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>

    <!--   -->
    <el-sub-menu index="2">
      <template #title>
        <!-- <el-icon></el-icon> -->
        <el-icon style="color: #fff"><Edit /></el-icon>
        <span>资源管理</span>
      </template>
      <el-menu-item index="2-1" @click="onMenuItemClick('/code',  $event)">网站源码</el-menu-item>
      <el-menu-item index="2-2" @click="onMenuItemClick('/',  $event)">软件工具</el-menu-item>
      <el-menu-item index="2-3" @click="onMenuItemClick('/',  $event)">高清壁纸</el-menu-item>
      <el-menu-item index="2-4" @click="onMenuItemClick('/',  $event)">综合资源</el-menu-item>
    </el-sub-menu>

    
    <el-sub-menu index="3">
      <template #title>
        
        <el-icon style="color: #fff"><MagicStick /></el-icon>
        <span>广告管理</span>
      </template>
      <el-menu-item index="3-1" @click="onMenuItemClick('/',  $event)">网站源码</el-menu-item>
      <el-menu-item index="3-2" @click="onMenuItemClick('/',  $event)">软件工具</el-menu-item>
      <el-menu-item index="3-3" @click="onMenuItemClick('/',  $event)">高清壁纸</el-menu-item>
      <el-menu-item index="3-4" @click="onMenuItemClick('/',  $event)">综合资源</el-menu-item>
    </el-sub-menu>
 
    

  </el-menu>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import moment from 'moment'

const router = useRouter()
const isCollapse = ref(true)

const menuActive = ref<string | null>('')

onMounted(() => {
  menuActive.value = window.localStorage.getItem('MENU_INDEX')
})

interface MenuEvent extends Event {
  index: string
}
const onMenuItemClick = (item: string, e: MenuEvent) => {
  window.localStorage.setItem('MENU_INDEX', e.index)
  router.push(item)
}

const mm = ref<number>()
onMounted(() => {
  // 除掉警告 
  moment.suppressDeprecationWarnings = true
  mm.value = Number(moment().format('MM'))
})
</script>

<style lang="scss" scoped>


.el-menu {
  width: 220px;
  height: calc(100vh - 90px);
  overflow: auto;
  background-color: $themeColorBlue;
  border-right: none;
  color: #fff;
  :deep(.el-menu-item:hover){
      background-color: #225893 !important;
  }
  .el-menu-item {
    // &:hover {
    //   background-color: #ffffff01;
    // }
    background-color: #08376a;
    color: $themeFontBlue;
    .is-active {
      color: #f3b01e;
    }
  }
  // .el-sub-menu__title:hover
  .el-sub-menu {
    &:hover {
      // background-color: #ffffff30;
      // background-color: #148ba057;
    }
    .el-sub-menu__title {
      &:hover{
        background-color: #08376a
      }
      span {
        color: $themeFontBlue;
      }
    }
    .el-sub-menu__title:hover {
        background-color: #225893 !important;
    }
  }

  .is-active {
    color: #f3b01e;
  }
}

:deep(.el-sub-menu .el-sub-menu__icon-arrow) {
  color: $themeFontBlue;
}

.el-menu::-webkit-scrollbar {/*滚动条整体样式*/
    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 8px;
    // display: none;
    background: #08376a;
}

.el-menu::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 2px;
    -webkit-box-shadow: inset 0 0 2px #020608;
    background: #3886b9;
    scrollbar-arrow-color:red;
}
.el-menu::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 2px #06395B;
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
:deep(.el-sub-menu__title:hover) {
    background-color: #225893 !important;
}

</style>
