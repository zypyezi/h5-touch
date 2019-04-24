<template>
  <div id="app">
    <!--<button @click="demo1">demo1</button>-->

    <!--<Demo1 v-if="showdemo1"></Demo1>-->

    <Touch></Touch>



  </div>
</template>

<script>
// import Demo1 from './components/Demo1'
import Touch from "./components/Touch";

export default {
  name: 'app',
  data(){
    return {
        showdemo1 : false
    }
  },
  components: {
      Touch,

  },

  methods:{
      demo1(){
          this.showdemo1 = !this.showdemo1
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;


}


</style>
