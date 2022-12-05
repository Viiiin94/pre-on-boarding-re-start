import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CreateUser } from "../Types/auth"
import { Todo } from "../Types/todo"

const todoInitial: Todo = {
	id: "",
	title: "",
	content: "",
	createdAt: "",
	updatedAt: "",
}

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		todos: [],
		todoInitial,
	},
	reducers: {
		addTodos: (state, action: PayloadAction) => {
			const addTodo = {
				id: `${state.todoInitial.title}_${state.todoInitial.id}`,
				title: state.todoInitial.title,
				content: state.todoInitial.content,
				createdAt: state.todoInitial.createdAt,
				updatedAt: state.todoInitial.updatedAt,
			}
			state.todos.push(addTodo)
		},
	},
})
