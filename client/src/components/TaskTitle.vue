<template>
    <div class="card border-success" v-if="task.category == 'backlog'">
        <div class="card-body">
          <h5>{{task.title}}</h5>
          <button type="button" class="btn btn-primary" @click.prevent style="font-size:20px">ℹ</button>
          <button type="button" class="btn btn-danger" @click.prevent="deleteHandler" style="font-size:20px">&#10006;</button>
          <button type="button" class="btn btn-success" style="font-size:20px">➡</button>
        </div>
    </div>
    <div class="card border-success" v-else-if="task.category == 'todo'">
        <div class="card-body">
          <h5>{{task.title}}</h5>
          <button type="button" class="btn btn-primary" @click.prevent style="font-size:20px">⬅</button>
          <button type="button" class="btn btn-danger" @click.prevent="deleteHandler" style="font-size:20px">&#10006;</button>
          <button type="button" class="btn btn-success" style="font-size:20px">➡</button>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'TaskTitle',
    props:['task'],
    methods:{

    }

}
</script>

<style>

</style>