import styled from "@emotion/styled"
import React, { useState } from "react"

const AuthHeader = () => {
	const [first, setfirst] = useState(false)
	return (
		<TitleSection>
			{first ? (
				<>
					<Title>로그인</Title>
				</>
			) : (
				<>
					<Title>회원가입</Title>
				</>
			)}
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
