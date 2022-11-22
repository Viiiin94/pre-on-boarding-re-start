import styled from "@emotion/styled"
import React from "react"

const AuthButton = () => {
	return (
		<ButtonSection>
			<Button type="submit">
				<span>로그인</span>
			</Button>
		</ButtonSection>
	)
}

const ButtonSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Button = styled.button`
	width: 80px;
	height: 40px;
	border: 1px solid #c0c0c0;
	border-radius: 5px;
	cursor: pointer;
`

export default AuthButton
