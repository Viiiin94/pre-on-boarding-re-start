import styled from "@emotion/styled"

const AuthButton = () => {
	return (
		<ButtonSection>
			<Button type="submit">
				<span>확인</span>
			</Button>
		</ButtonSection>
	)
}

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

export default AuthButton
