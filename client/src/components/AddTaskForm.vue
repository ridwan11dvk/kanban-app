<template>
  <div>
    <div class="container">
      <h1>Add Task</h1>
      <form id="btn-add" @submit.prevent="addTaskHandler">
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>
        <fieldset disabled>
          <div class="form-group">
            <label for="disabledTextInput">Category</label>
            <input
              type="text"
              id="disabledTextInput"
              class="form-control"
              placeholder="Backlog"
              v-model="category"
            />
          </div>
        </fieldset>
        <button type="submit" class="btn btn-primary btn-save">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTaskForm",
  data() {
    return {
      title: "",
      category: "backlog",
    };
  },
  methods: {
    addTaskHandler() {
      axios
        .post("http://localhost:3000/tasks", {
          title: this.title,
          category: this.category
        },
        {
        headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        .then(({ data }) => {
          this.resetForm()
          this.$emit('refetchTask')
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.title = "";
          this.category = "backlog";
        });
    },
    resetForm(){
      this.title = ''
    }
  },
  created () {
    this.$store.dispatch('fetchData')
  }
};
</script>

<style>
</style>