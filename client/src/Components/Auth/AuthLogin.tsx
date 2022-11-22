import React from "react"
import styled from "@emotion/styled"

const Login = () => {
	return (
		<>
			<AuthSection>
				<Input type="text" placeholder="ID" />
				<Input type="password" placeholder="PassWord" />
			</AuthSection>
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
	max-width: 200px;

	border: 1px solid #c0c0c0;
	border-radius: 15px;

	&::placeholder {
		align-items: center;
	}
`

export default Login
