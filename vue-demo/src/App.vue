<template>
  <div id="app">
    <v-hearder></v-hearder>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <v-footer></v-footer>
    
  </div>
</template>

<script>
import hearder from './components/hearder';
import footer from './components/footer';

export default {
  name: 'App',
  data () {
      return {
          menus: [
            {
                title: '首页',
                href: '/',
                active: true
            },
            {
                title: '频道1',
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
  },
  components: {
    'v-hearder': hearder,
    'v-footer': footer
  }
}
</script>

<style>
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}
h1,h2,h3,h4,h5,h6,em,i {
    font-weight: 100;
    font-style: normal
}
ul,ol,li {
    list-style-type: none
}
a {
    color: #666;
    text-decoration: none;
    outline: 0
}
a:hover {
    text-decoration: none
}　
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
  font-size: 16px;
}
/* 以下是常用样式 */
/* 左浮动 */
.pull-left{
  float: left;
}
/* 右浮动 */
.pull-right {
  float: right;
}
.content {
  width: 100%;
  height: calc(100% – 160px);
}
</style>
