import styled from "@emotion/styled"
import useInput from "../../Hook/useInput"

const AuthCreate = () => {
	return (
		<AuthSection>
			<Input type="email" placeholder="ID" name="email" />
			<Input type="password" placeholder="PassWord" name="password" />
			<Input type="text" placeholder="Name" name="name" />
		</AuthSection>
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

export default AuthCreate
