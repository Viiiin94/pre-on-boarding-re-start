import axios, { AxiosRequestConfig } from "axios"
import { storage } from "../Service/storage"
import { Todo } from "../Types/todo"

const instance = axios.create({
	baseURL: `https://localhost:8080/todos`,
})

instance.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		const token = storage.get({ key: "token" })
		if (!token) throw Error("Nothing token")
		return { ...config, headers: { Authorization: token } }
	},
	(error) => {
		return Promise.reject(error)
	}
)

const fetchGetTodos = () => {
	return instance.get("")
}

const fetchGetTodosId = (id: string) => {
	return instance.get(id)
}

const fetchCreateTodos = (props: Todo) => {
	return instance.post("", props)
}

const fetchDeleteTodos = (id: string) => {
	return instance.delete(id)
}

export default {
	fetchGetTodos,
	fetchGetTodosId,
	fetchCreateTodos,
	fetchDeleteTodos,
}
