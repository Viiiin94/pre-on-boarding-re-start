import styled from "@emotion/styled"
import AuthLogin from "../Components/Auth/AuthLogin"
import AuthHeader from "../Components/Auth/AuthHeader"
import AuthButton from "../Components/common/AuthButton"

const Login = () => {
	return (
		<AuthContainer>
			<AuthHeader />
			<AuthLogin />
			<AuthButton />
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

export default Login
