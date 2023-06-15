<template>
  <div class="source">
    <div class="topflow">
      <el-button type="primary" @click="toAddList">新增</el-button>
    </div>
    
    <div class="tabBox">
        <el-table :data="tabData" 
            :header-cell-style="{ 'text-align': 'center', background: '#06395B' }"
            :cell-style="{ 'text-align': 'center' }" border style="width: 100%">
            <el-table-column label="序号">
                <template  #default="scope" >
                    {{ scope.$index +1 }}
                </template>
            </el-table-column>
            <el-table-column prop="title" label="标题名称"></el-table-column>
            <el-table-column prop="tags" label="标签"></el-table-column>
            <el-table-column prop="watchNum" label="查看次数"></el-table-column>
            <el-table-column prop="createTime" label="创建时间"></el-table-column>
            <el-table-column width="220" label="操作">
                <template slot-scope="scope">
                    <!-- <el-button @click="pro_see(scope.row)"  size="mini">下载查看</el-button>
                    <el-button @click="pro_del(scope.row.id)" type="danger" size="mini">删除</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getList } from '../../api/code'

import {ref,onMounted} from "vue"

import { useRouter } from 'vue-router'
const route = useRouter()
const a = ref(0)
const tabData =ref([])


const getData = ()=>{
  getList({}).then(res=>{
    console.log(res)
    let data = res.data
    tabData.value = data;
  })
}

const toAddList = () =>{
  route.push({
    path: '/add'
  })
}



onMounted(()=>{
  getData();
})



</script>

<style lang="scss" scoped>

.source {
    width: 100%;
    height: 100%;
    background-color: #09407a;
    padding: 6px 10px;
    .topflow{
      width: 98%;
      margin: 0 auto;
      display: flex;
    }
}
</style>
