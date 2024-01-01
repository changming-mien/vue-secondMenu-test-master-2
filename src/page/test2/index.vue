<template>
  <el-container>
    <el-aside width="auto">
      <SideMenu :itemList='itemList'></SideMenu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
  components: {
    SideMenu
  },
  data(){
    return{
      itemList: [
        { path: 'test2-1', title: '二级菜单2-1' },
        { path: 'test2-2', title: '二级菜单2-2' },
        { path: 'test2-3', title: '二级菜单2-3' }
      ]
    }
  },
}
</script>