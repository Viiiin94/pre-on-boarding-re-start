import styled from "@emotion/styled"
import useInput from "../../Hook/useInput"

const AuthCreate = () => {
	const inputEmail = useInput("")
	const inputPassword = useInput("")
	const inputName = useInput("")

	return (
		<>
			<AuthSection>
				<Input type="email" {...inputEmail} placeholder="ID" name="email" />
				<Input
					type="password"
					{...inputPassword}
					placeholder="PassWord"
					name="password"
				/>
				<Input type="text" {...inputName} placeholder="Name" name="name" />
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
	max-width: 200px;

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

export default AuthCreate
