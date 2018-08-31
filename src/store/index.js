import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		todos:[
			{text:'今天的任务是什么呢。。。',done:false},
			{text:'又下雨了',done:true},
			{text:'天气晴朗',done:false}
		]
	},

	getters:{
		todos:state =>{
			return state.todos
		}
		
	},

	mutations:{
		addTodo:(state,todo) => {
		  state.todos.push(todo)
		},
		removeTodo:(state,todo) => {
			console.log('state.todos.indexOf(todo)',typeof todo,state.todos.indexOf(todo),todo,state.todos)
			 state.todos.splice(state.todos.indexOf(todo),1)
		}
	},

	actions:{
		removeTodo: ({commit},todo) => {
			console.log('sss');
			commit('removeTodo',todo)
		},
		addTodo:({commit},txt) => {
			
			commit('addTodo',{
				text:txt,
				done:false
			})
		}
	}
})
export default store