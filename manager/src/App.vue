<template>
  <div id="app">
    <MHeader />
    <SideBar />
    <PageBoard />
  </div>
</template>

<script>
import MHeader from "@/components/MHeader.vue";
import SideBar from "@/components/SideBar.vue";
import PageBoard from "@/components/PageBoard.vue";
export default {
  name: "App",
  components: {
    MHeader,
    SideBar,
    PageBoard,
  },
};
</script>
<style>
  #app{
    height: 100%;
  }
</style>
