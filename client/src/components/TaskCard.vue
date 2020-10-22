<template>
<div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-if="category === 'backlog'">
    <div class="card-header bg-info text-white">
      {{ category }}
    </div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <!-- {{allDatas.backlog}} -->
      <TaskTitle
        v-for="task in allDatas.backlog"
        :key="task.id"
        :task="task"
        @changePage="changePage"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-else-if="category === 'todo'">
    <div class="card-header bg-info text-white">
      {{ category }}
    </div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <!-- {{allDatas.backlog}} -->
      <TaskTitle
        v-for="task in allDatas.todo"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-else-if="category === 'doing'">
    <div class="card-header bg-info text-white">
      {{ category }}
    </div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <!-- {{allDatas.backlog}} -->
      <TaskTitle
        v-for="task in allDatas.doing"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
  <div class="card border-secondary mb-3 w-100" style="max-width: 18rem" v-if="category === 'done'">
    <div class="card-header bg-info text-white">
      {{ category }}
    </div>
    <div class="card-body overflow-auto" style="max-height: 18rem">
      <!-- {{allDatas.backlog}} -->
      <TaskTitle
        v-for="task in allDatas.done"
        :key="task.id"
        :task="task"
        @refetchTask="refetchTask"
        @editMe="editMe"
      >
      </TaskTitle>
    </div>
  </div>
</div>

</template>

<script>
import TaskTitle from "./TaskTitle";
export default {
  name: "TaskCard",
  props: ["task", "category"],
  components: {
    TaskTitle,
  },
  methods: {
    refetchTask() {
      this.$emit("refetchTask");
    },
    changePage(data) {
      //console.log('taskcard',data)
      this.$emit("changePage", data);
    },
    editMe(data) {
      // console.log('taskcard',data)
      this.$emit("editMe", data);
    },
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  computed: {
    allDatas() {
      return this.$store.state.allDatas;
    },
  },
};
</script>

<style>
</style>