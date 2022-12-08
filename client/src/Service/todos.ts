import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Todo } from "../Types/todo"

export const todoApi = createApi({
	reducerPath: "todosApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:8080/todos" }),
	endpoints: (builder) => ({
		getTodos: builder.query<Todo, string>({
			query: (id) => `/:${id}`,
		}),
	}),
})
