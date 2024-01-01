<template>
  <el-container>
    
    <!-- 一级菜单下面所拥有的二级菜单 -->
    <el-aside>
      <SideMenu :itemList='itemList' @handleOpen="handleOpen"></SideMenu>
    </el-aside>
    <!-- 以及二级菜单所对应的页面 -->
    <el-main style="padding-top:0;">
      <Breadcrumb/>
      <router-view> </router-view>
    </el-main>

  </el-container>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
import Breadcrumb from '@/components/Breadcrumb';
export default {
  components: {
    SideMenu,
    Breadcrumb
  },
  data(){
    return{
      itemList: [
        { 
          path: '/test1/test1-1', 
          title: '二级菜单1-1',
        },// 修改菜单数据
        { path: '/test1/test1-2', 
          title: '二级菜单1-2' ,
          children:[{ 
            path: '/test1/test1-2/test1-2-1', 
            title: '三级菜单1-2-1'
          }]
        },
        { path: '/test1/test1-3', title: '二级菜单1-3' },
        { path: '/test1/test1-4', title: '二级菜单1-4' },
        { path: '/test1/test1-5', title: '二级菜单1-5' }
      ],
      keyPath:[]
    }
  },
  methods:{
    handleOpen(key, keyPath){
        this.keyPath=[...keyPath]
        // console.log(this.keyPath);
    }
  }
}
</script>
<style lang="scss">
</style>