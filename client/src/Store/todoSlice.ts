import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Todo } from "../Types/todo"

export type commonState = {
	TodoList: Todo[]
}

const initialState: commonState = {
	TodoList: [],
}

export const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTodos: (state, action: PayloadAction<Todo[]>) => {
			state.TodoList = action.payload
		},
	},
})

export const { setTodos } = todoSlice.actions

export default todoSlice.reducer
