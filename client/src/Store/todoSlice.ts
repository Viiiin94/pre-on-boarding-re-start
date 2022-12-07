import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "../Types/todo"

export interface CommonState {
	todoList: Todo[]
}

const initialState: CommonState = {
	todoList: [],
}

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodos: (state, action: PayloadAction<Todo[]>) => {
			state.todoList = action.payload
		},
	},
})

export const { addTodos } = todoSlice.actions

export default todoSlice.reducer
