
<template>
  <div class="todo">
    <h1 class="title">todos</h1>
    
    <div class="todoapp">
      <input 
        class="new-todo"
        autofocus
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo(newTodo)"
      >
      <section class="main">
        <input class="toggle-all" id="toggle-all"
        type="checkbox">
        <label for="toggle-all"></label>
        <ul class="todo-list">
          <TodoItem
            v-for="(item,index) in todos"
            :key="index"
            :todo = 'item'
          ></TodoItem>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import TodoItem from './TodoItem'
export default {
  name: 'todo',
  data(){
    return{
      newTodo:''
    }
  },
  components:{
    TodoItem
  },
  methods:{
    ...mapActions([
      'addTodo'
    ])
    // addTodo(){
    //   this.$store.commit('addTodo',{id:4,text:'测试',done:false})
    // }
  },
  computed:{
    todos(){
      console.log('todos',this.$store)
      return this.$store.getters.todos;
    }
  }
}
</script>
<style scoped>
@import 'todomvc-app-css/index.css';

#app{
  margin-top:0;
}
.todo{
  margin:0 auto;
  width:700px;
}
.title{
  color:rgba(175, 47, 47, 0.15);
  font-size: 100px;
  font-weight:100;
  text-align: center;
}
.new-todo{
  text-align: left;
  padding:16px 16px 16px 60px;
  background-color: rgba(0,0,0,0.003);
  border:none;
  box-shadow:inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
