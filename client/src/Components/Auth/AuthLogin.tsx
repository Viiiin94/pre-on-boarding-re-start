import React from "react"
import useInput from "../../Hook/useInput"
import styled from "@emotion/styled"

const AuthLogin = () => {
	const inputEmail = useInput("")
	const inputPassword = useInput("")
	return (
		<>
			<AuthSection>
				<Input type="email" {...inputEmail} placeholder="ID" />
				<Input type="password" {...inputPassword} placeholder="PassWord" />
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

export default AuthLogin
