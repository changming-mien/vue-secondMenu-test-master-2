<template>
  <!-- 左侧二级菜单栏的组件封装 -->
  <div class="sidebar" :class="classObj">
    <el-menu
      class="sidebar-el-menu"
      :default-active="toIndex"
      background-color="#fff"
      text-color="#000000"
      :collapse="isCollapse"
      @select="handleOpen"
      router>
      <hamburger :is-active="sidebar.opened"  @toggleClick="toggleSideBar" />
       <menu-tree :menuData="itemList"></menu-tree>
    <!-- <template v-for="(item, index) in itemList">
      <el-submenu :index="item.path" v-if="item.children" :key="index">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item :index="child.path" v-for="(child, i) in item.children" :key="child.path">
          <i :class="child.icon"></i>
          <span slot="title">{{ child.title }}</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item v-else :key="index" :index="item.path" >
        <i :class="item.icon"></i>
        <span slot="title">{{ item.title }}</span>
      </el-menu-item>
    </template> -->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import MenuTree from './MenuTree.vue'
export default {
  components:{
    Hamburger,
    MenuTree
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  props: {
    itemList: {
      type: Array,
      default: () => []
    }
  },
  watch:{
  },
  data(){
    return {
    }
  },
  computed: {
    toIndex(){  // 根据路径绑定到对应的二级菜单，防止页面刷新重新跳回第一个
      console.log(this.$route.path)
      // return this.$route.path.split('/')[2];
      return this.$route.path;
    },
     ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      };
    },
  },
  methods:{
     toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
     handleOpen(key, keyPath) {
      this.$emit('handleOpen',key, keyPath)
      },
  },
  mounted(){
    console.log(this.itemList,'itemList')
  }
}
</script>

<style lang="scss" scoped>
/* 左侧菜单栏定位和位置大小设定 */
/*.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
*/
/* 左侧二级菜单项的样式 */
.el-menu-item{
  font-size: 14px !important;
  padding-left: 35px !important;
}

/* 左侧二级菜单选中时的样式 */
.el-menu-item.is-active {
  color: white !important;
  background: #3989fa !important;
}
.el-menu-item, .el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
}
</style>