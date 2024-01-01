<template>
  <el-container>
    <el-aside width="auto">
      <SideMenu :itemList="itemList"></SideMenu>
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
    return {
      itemList: [
        { path: 'test3-1', title: '二级菜单3-1' },
        { path: 'test3-2', title: '二级菜单3-2' }
      ]
    }
  }
}
</script>