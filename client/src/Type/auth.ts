export interface input {
	id: string
	password: string
}

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
