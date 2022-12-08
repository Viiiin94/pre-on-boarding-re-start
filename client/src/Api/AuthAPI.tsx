import axios, { AxiosResponse } from "axios"
import {} from "@reduxjs/toolkit/query/react"
import { User } from "../Types/auth"
import { storage } from "../Service/storage"

const instance = axios.create({
	baseURL: `http://localhost:8080/users`,
	headers: {
		Authorization: `Bearer ${storage.get({ key: "token" })}`,
	},
})

instance.interceptors.response.use(
	(res: AxiosResponse) => {
		const { token } = res.data
		storage.set({ key: "token", value: token })
		return res
	},
	(error) => {
		return Promise.reject(error)
	}
)

const fetchLogin = (props: User) => {
	return instance.post("login", props)
}

const fetchSignUp = (props: User) => {
	return instance.post("create", props)
}

export { fetchLogin, fetchSignUp }
