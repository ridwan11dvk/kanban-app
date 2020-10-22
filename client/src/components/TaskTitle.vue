<template>
  <div class="card border-success">
    <div class="card-body">
      <h5>{{ task.title }}</h5>
      <button
        class="btn btn-primary fa fa-info"
        v-if="task.category == 'backlog'"
        style="font-size: 20px"
        @click.prevent="editForm(task)"
      ></button>

      <!-- <form class="form-group">
    <label for="exampleFormControlSelect1">Change Status</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Backlog</option>
      <option>Todo</option>
      <option>Doing</option>
      <option>Done</option>
    </select>

  </form> -->
      <!-- <button
        type="button"
        class="btn btn-primary"
        @click.prevent="editForm(task)"
        style="font-size: 20px"
      >
        ℹ
      </button> -->
      <button
        type="button"
        class="btn btn-primary fa fa-arrow-left"
        @click.prevent="moveHandlerLeft(task.id, task.category)"
        style="font-size: 20px"
        v-if="task.category !== 'backlog'"
      ></button>
      <button
        type="button"
        class="btn btn-danger fa fa-trash"
        @click.prevent="deleteHandler(task.id)"
        style="font-size: 20px"
      ></button>
      <button
        type="button"
        class="btn btn-success fa fa-arrow-right"
        @click.prevent="moveHandlerRight(task.id, task.category)"
        style="font-size: 20px"
        v-if="task.category !== 'done'"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskTitle",
  props: ["task"],
  methods: {
    editForm(task) {
      this.$emit("changePage", "editTaskForm");
      // this.$emit("editMe", task);
    },
    deleteHandler(param) {
      this.$store.dispatch("deleteHandler", param);
    },
    moveHandlerLeft(param1, param2) {
      if (param2 == "done") {
        param2 = "doing";
      } else if (param2 == "doing") {
        param2 = "todo";
      } else if (param2 == "todo") {
        param2 = "backlog";
      }
      let obj = {
        id: param1,
        category: param2,
      };

      this.$store.dispatch("patchHandler", obj);
    },
    moveHandlerRight(param1, param2) {
      if (param2 == "backlog") {
        param2 = "todo";
      } else if (param2 == "todo") {
        param2 = "doing";
      } else if (param2 == "doing") {
        param2 = "done";
      }
      let obj = {
        id: param1,
        category: param2,
      };
      this.$store.dispatch("patchHandler", obj);
    },
  },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style>
</style>