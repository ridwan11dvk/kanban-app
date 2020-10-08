<template>
  <div>
      <Navbar
        v-show="isPage =='home'"
        @changePage = 'changePage'>
        </Navbar>
      <LoginForm 
        v-if="isPage == 'login'"
        @changePage = 'changePage'
        >
      </LoginForm>
      <RegisterForm
        v-else-if="isPage == 'register'"
        @changePage = 'changePage'>  
      </RegisterForm>
      <HomePage
        v-else-if="isPage == 'home'"
        @changePage = 'changePage'
        :tasks = 'tasks' 
        :categories = 'categories'>  
      </HomePage>
      <AddTaskForm
        v-show="isPage == 'home'"
        @refetchTask = 'fetchCard'></AddTaskForm>


  </div>
</template>

<script>
import axios from 'axios'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import HomePage from './components/Task'
import Navbar from './components/Navbar'
import AddTaskForm from './components/AddTaskForm'

export default {
    components:{
        RegisterForm,
        LoginForm,
        HomePage,
        Navbar,
        AddTaskForm
        
    },
    data(){
        return{
            isPage: 'login',
            tasks: [],
            categories: ['Backlog','To-Do','Doing','Done'],
        }
    },
    methods:{
        changePage(data){
            console.log(data)
            this.isPage = data
        },
        fetchCard(){
            axios
                .get('http://localhost:3000/tasks',{
                    headers:{
                        access_token: localStorage.getItem('access_token')
                    }
                })
                .then(({data})=>{
                    this.tasks = data
                })
                .catch(err=>{
                    console.log(err)
                })
        },
        
    },
    created(){
        if (localStorage.getItem('access_token')){
            this.isPage = 'home'
            this.fetchCard()
        }
    }
}
</script>

<style>

</style>