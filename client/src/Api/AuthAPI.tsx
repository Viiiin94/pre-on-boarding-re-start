import axios, { AxiosResponse } from "axios"
import { User } from "../Types/auth"
import { storage } from "../Service/storage"
import { createAsyncThunk } from "@reduxjs/toolkit"

// const instance = axios.create({
// 	baseURL: `http://localhost:8080/users`,
// 	headers: {
// 		Authorization: `Bearer ${storage.get({ key: "token" })}`,
// 	},
// })

// instance.interceptors.response.use(
// 	(res: AxiosResponse) => {
// 		const { token } = res.data
// 		storage.set({ key: "token", value: token })
// 		return res
// 	},
// 	(error) => {
// 		return Promise.reject(error)
// 	}
// )

// const fetchLogin = (props: User) => {
// 	return instance.post("login", props)
// }

// const fetchSignUp = (props: User) => {
// 	return instance.post("create", props)
// }

// export { fetchLogin, fetchSignUp }

export const join = createAsyncThunk("users", async (data: User, thunkAPI) => {
	const result = await axios.post("https://localhost:8080/users", {
		email: data.email,
		password: data.password
	})
	return result
})