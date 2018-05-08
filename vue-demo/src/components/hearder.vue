<template>
  <div class="hearder">
      <div class="logo-wrap pull-left">
          <img class="pull-left" :src="logo" :alt="logo">
          <span>fewwfwefw</span>
      </div>
      <ul class="menu pull-right">
          <li v-for="(item, index) in menus" @click="setMenu(item.hrf, index)">
              <a :class="{ 'active': !!item.active }" :href="'#'+item.href">
                  <span>{{ item.title }}</span>
              </a>
          </li>
      </ul>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'hearder',
  props: { 
      menus:  {
          default: () => {
            return [
            {
                title: '首页',
                href: '/',
                active: true
            },
            {
                title: '频道',
                href: '/channel'
            },
            {
                title: '栏目',
                href: '/clomn'
            },
            {
                title: '新闻列表',
                href: '/news'
            },
            {
                title: '模板中心',
                href: '/template'
            }
        ]
        }
      }
  },
  data () {
      return {
          logo: 'http://g.hiphotos.baidu.com/image/pic/item/37d3d539b6003af37401eb21392ac65c1038b633.jpg'
      }
  },
  created (){
      this.setMenu(this.$route.path);
  },
  methods: {
      setMenu (url, index) {
          let __index = '';
          this.menus.forEach((element, _index) => {
              if(element.href == url && !index){
                element.active = true;
                __index = _index;
              } else {
                element.active = false;
              }
          });
          let activeItem = typeof index === 'number' ? this.menus[index] : this.menus[__index];
          activeItem.active = true; 
          Vue.set(this.menus, index, activeItem);
        console.log(this.menus)
      }
  }
}
</script>
<style scoped>
.hearder {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #0845ce;
}
.logo-wrap {
    width: auto;
    height: 80px;
    line-height: 80px;
}
.logo-wrap img {
    width: 120px;
    height: 80px;
    margin-right: 10px;
}
.menu {
    display:inline-block;
    width: auto;
    height: 80px;
    line-height: 80px;
}
.menu li {
    display: inline-block;

}
.menu li a{
    display: inline-block;
    padding: 0 10px;
    height: 80px;
    line-height: 80px;
}
.menu li a.active {
    border-bottom:2px solid red;
}
</style>
