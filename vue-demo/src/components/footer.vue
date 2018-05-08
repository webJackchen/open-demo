<template>
  <div class="footer">
      <div class="footer-body">

      </div>
  </div>
</template>
<script>
export default {
  name: 'footer',
//   props: ['menu'],
  data () {
      return {

      }
  }
}
</script>
<style scoped>
.footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #0845ce;
}
.footer-body {
    width: 1200px;
    height: 80px;
    line-height: 80px;
    background: red;
    margin: 0 auto;
}
</style>
