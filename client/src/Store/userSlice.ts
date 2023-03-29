import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { LoginUser, AuthResponse, CreateUser } from "../Types/auth"

export const addCreateUser = createAsyncThunk(
	"Create",
	async (user: CreateUser) => {
		const response = await axios.post("http://localhost:8080/user", user)
		return response.data
	}
)

export interface LoginType {
	email: string
	password: string
}

const initialState: LoginType = {
	email: "",
	password: "",
}

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<LoginType>) => {
			state.email = action.payload.email
			state.password = action.payload.password
		},
		logout: (state) => {
			state.email = ""
			state.password = ""
		},
	},
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
