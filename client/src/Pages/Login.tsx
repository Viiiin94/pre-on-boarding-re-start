import styled from "@emotion/styled"
import { useState } from "react"
import AuthLogin from "../Components/Auth/AuthLogin"
import AuthHeader from "../Components/Auth/AuthHeader"
import AuthButton from "../Components/Common/AuthButton"

const Login = () => {
	const [first, setfirst] = useState("")

	return (
		<AuthContainer>
			<AuthHeader />
			<Form>
				<AuthLogin />
				<AuthButton />
			</Form>
		</AuthContainer>
	)
}

const AuthContainer = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 500px;
	height: 500px;
	border: 1px solid #c9c9c9;
	border-radius: 10px;
	box-shadow: 2px 2px 6px -1px #212121;
`

const Form = styled.form``

export default Login
