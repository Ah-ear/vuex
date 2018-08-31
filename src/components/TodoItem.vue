<template>
  <li class="todo" :class="{editing:editing}">
    <div class="view">
      <input 
        type="checkbox"
        class="toggle"
        :checked="todo.done"
      >
      <label v-text="todo.text" @dblclick="editing=true"></label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input type="text"
      class="edit"
      v-model="todo.text"
      v-show="editing"
      v-focus="editing"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    >
  </li>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'TodoItem',
  props:['todo'],
  data () {
    return {
      editing:false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  directives: {
    focus (el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => {
          el.focus()
        })
      }
    }
  },
  methods:{
    ...mapActions([
      'removeTodo'
    ]),
    cancelEdit(){

    },
    doneEdit(){
        this.editing = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import 'todomvc-app-css/index.css';
#app{
  margin-top:0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
}
a {
  color: #42b983;
}
</style>
