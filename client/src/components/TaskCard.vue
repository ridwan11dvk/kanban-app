<template>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem">
    <div class="card-header bg-info text-white">{{task[0].category}}</div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <TaskTitle  
      v-for="task in task" :key="task.id"
      :task = 'task'>
      </TaskTitle>
    </div>
  </div>
</template>

<script>
import TaskTitle from './TaskTitle'
export default {
  name: "TaskCard",
  props:['task','categories'],
  components:{
      TaskTitle
  },
  methods: {},
};
</script>

<style>
</style>