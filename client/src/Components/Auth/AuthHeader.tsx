import styled from "@emotion/styled"
import React from "react"

const AuthHeader = () => {
	return (
		<TitleSection>
			<Title>로그인</Title>
		</TitleSection>
	)
}

const TitleSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Title = styled.h2`
	font-size: 2rem;
`

export default AuthHeader
