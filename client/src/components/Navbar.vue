<template>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand">Kanban App</a>
      <form class="form-inline">
        <button class="btn btn-outline-danger my-2 my-sm-0 logout" type="submit" @click.prevent="logoutHandler">Logout</button>
      </form>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    methods:{
        logoutHandler(){
            console.log()
            localStorage.clear()
            this.$emit('changePage','login')
        },
    }
}
</script>

<style>

</style>