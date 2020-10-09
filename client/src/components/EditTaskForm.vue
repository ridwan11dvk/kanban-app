<template>
  <div class="container">
    <h1>Edit Task</h1>
    <form id="btn-add" @submit.prevent="editHandler">
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="form-control" id="title" v-model="title">
      </div>
      <fieldset disabled>
        <div class="form-group">
          <label for="category">Category</label>
          <input
            type="text"
            id="category"
            disabled
            class="form-control"
            placeholder="Backlog"
            v-model="category"
          >
        </div>
      </fieldset>
      <button type="submit" class="btn btn-primary">Save</button>
      <button class="btn btn-danger" @click.prevent="changePage">Back</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditTaskForm",
  props:['tampEdit'],
  data() {
    return {
      title: this.tampEdit.title,
      category: 'backlog',
    };
  },
  methods:{
      changePage(){
          this.$emit('changePage','home')
      },
      editHandler(){
          axios
            .put(`http://localhost:3000/tasks/${this.tampEdit.id}`,{
                title: this.title,
                category: this.category
            },
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          })
          .then(({data})=>{
              this.$emit('refetchTask')
          })
          .catch(err=>{
              console.log(err)
          })
      }
  }
};
</script>

<style>
</style>