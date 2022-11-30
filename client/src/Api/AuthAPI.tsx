import axios, { AxiosResponse } from "axios"
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

const fetchSignUp = (props: User) => {
	return instance.post("create", props)
}

export { fetchSignUp }
