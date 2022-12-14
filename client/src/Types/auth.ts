export interface User {
	id: string
	email: string
	password: string
	createdAt: string
}

export interface AuthResponse {
	message: string
	token: string
}

export type CreateUser = Pick<User, "id" | "password">

export type LoginUser = Pick<User, "email" | "password">
