import React, { ChangeEvent, FormEvent, useState } from "react"
import styled from "@emotion/styled"
import { useAppSelector, useAppDispatch } from "../../Hook/dispatchhook"
import { LoginUser } from "../../Types/auth"

const AuthLogin = () => {
	const [useremail, setUserEmail] = useState("")
	const [userpassword, setUserPassword] = useState("")

	const {email, password} = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()

	const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
		setUserEmail(event.currentTarget.value)
	}
	const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
		setUserPassword(event.currentTarget.value)
	}

	return (
		<>
			<AuthSection>
				<Input
					type="email"
					placeholder="ID"
					value={useremail}
					onChange={onChangeEmail}
				/>
				<Input
					type="password"
					placeholder="PassWord"
					value={userpassword}
					onChange={onChangePassword}
				/>
			</AuthSection>
			<ButtonSection>
				<Button type="submit">
					<span>확인</span>
				</Button>
			</ButtonSection>
		</>
	)
}

const AuthSection = styled.section`
	display: flex;
	justify-content: center;
	flex-direction: column;
`

const Input = styled.input`
	margin: 10px auto;
	padding: 0 10px;
	font-size: 30px;
	max-width: 300px;

	border: 1px solid #c0c0c0;
	border-radius: 15px;

	&::placeholder {
		align-items: center;
	}
`

const ButtonSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
`

const Button = styled.button`
	width: 80px;
	height: 40px;
	border: 1px solid #c0c0c0;
	border-radius: 5px;
	cursor: pointer;
`

export default AuthLogin
