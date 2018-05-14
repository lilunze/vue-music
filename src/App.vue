<template>
  <div id="app">
    <m-header />
    <tab />
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import mHeader from '@/components/header/header'
import tab from '@/components/tab/tab'
export default {
  name: 'App',
  components:{
    mHeader,
    tab
  }
}
</script>

<style>
  html
  {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  body
  {
    margin: 0;
    padding: 0;
    background: #f7f7f7;
  }
  p,h1,h2,h3,h4,h5,h6
  {
    margin: 0;
    padding: 0;
  }
</style>
