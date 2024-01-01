<template>
  <div>
    <template v-for="(menu,index) in menuData">
      <el-submenu :key="index" :index="menu.path" v-if="menu.children">
          <template slot="title">
              <i :class="menu.icon"></i>
              <span slot="title">{{menu.title}}</span>
          </template>
          <menu-tree :menuData="menu.children"></menu-tree>
      </el-submenu>
      <el-menu-item :key="index" :index="menu.path" v-else>
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
 
<script>
export default {
  props: ['menuData'],
  name: 'MenuTree',
  data(){
    return{
    }
  },
  watch:{
    menuData:{
        handler(newValue,oldValue){
        },
        immediate:true,
        deep:true
    }
  },
  mounted(){
  }
}
</script>
