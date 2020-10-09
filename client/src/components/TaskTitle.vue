<template>
  <div class="card border-success" v-if="task.category == 'backlog'">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="editForm(task)"
        style="font-size: 20px"
      >
        ℹ
      </button>
      <button
        type="button"
        class="btn btn-danger"
        @click.prevent="deleteHandler(task.id)"
        style="font-size: 20px"
      >
        &#10006;
      </button>
      <button
        type="button"
        class="btn btn-success"
        @click.prevent="moveHandler(task.id,task.category = 'todo')"
        style="font-size: 20px"
      >
        ➡
      </button>
    </div>
  </div>
  <div class="card border-success" v-else-if="task.category == 'todo'">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="moveHandler(task.id,task.category = 'backlog')"
        style="font-size: 20px"
      >
        ⬅
      </button>
      <button
        type="button"
        class="btn btn-danger"
        @click.prevent="deleteHandler(task.id)"
        style="font-size: 20px"
      >
        &#10006;
      </button>
      <button
        type="button"
        class="btn btn-success"
        @click.prevent="moveHandler(task.id,task.category = 'doing')"
        style="font-size: 20px"
      >
        ➡
      </button>
    </div>
  </div>
  <div class="card border-success" v-else-if="task.category == 'doing'">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <button
        type="button"
        class="btn btn-primary"
         @click.prevent="moveHandler(task.id,task.category = 'todo')"
        style="font-size: 20px"
      >
        ⬅
      </button>
      <button
        type="button"
        class="btn btn-danger"
        @click.prevent="deleteHandler(task.id)"
        style="font-size: 20px"
      >
        &#10006;
      </button>
      <button
        type="button"
        class="btn btn-success"
        @click.prevent="moveHandler(task.id,task.category = 'done')"
        style="font-size: 20px"
      >
        ➡
      </button>
    </div>
  </div>
  <div class="card border-success" v-else-if="task.category == 'done'">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <button
        type="button"
        class="btn btn-primary"
         @click.prevent="moveHandler(task.id,task.category = 'doing')"
        style="font-size: 20px"
      >
        ⬅
      </button>
      <button
        type="button"
        class="btn btn-danger"
        @click.prevent="deleteHandler(task.id)"
        style="font-size: 20px"
      >
        &#10006;
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TaskTitle",
  props: ["task"],
  methods: {
    editForm(task){
     // this.$emit('changePage','editTaskForm')
      this.$emit('editMe',task)
    },
    deleteHandler(param) {
      axios
        .delete(
          `http://localhost:3000/tasks/${param}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        )
        .then(({ data }) => {
          this.$emit("refetchTask");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    moveHandler(param1,param2){
      axios
        .patch(
          `http://localhost:3000/tasks/${param1}`,{
          category: param2
        },
        {
        headers: {
            access_token: localStorage.getItem("access_token"),
          }
        })
        .then(({ data }) => {
          this.$emit("refetchTask");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>
</style>