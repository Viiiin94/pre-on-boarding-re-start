import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginUser, AuthResponse } from "../Types/auth"

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
