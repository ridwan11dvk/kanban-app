<template>
  <div>
    <div class="container contain">
    <TaskCard  
    v-for="(task,i) in tasks" :key="i"
    :task = 'task'>
    </TaskCard>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import TaskCard from './TaskCard'
export default {
  name: "HomePage",
  props: ['tasks','categories'],
  components: {
    Navbar,
    TaskCard
  },
  data(){
      return{
          isPage:'home'
      }
  },
  methods:{
      logoutHandler(){
            localStorage.clear()
            this.$emit('changePage','login')
        }
  }
};
</script>

<style>
</style>