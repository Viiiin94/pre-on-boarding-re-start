import React from "react"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<>
			<Head>
				<Title>
					<Link to="/">투두리스트</Link>
				</Title>
				<AuthContainer>
					<StyledLink to="/login">로그인</StyledLink>
					<StyledLink to="/create">회원가입</StyledLink>
				</AuthContainer>
			</Head>
		</>
	)
}

const Head = styled.nav`
	display: flex;
	justify-content: center;
	height: 70px;
	border-bottom: 1px solid #c0c0c0;
	box-shadow: 0 4px 4px -4px #212121;
`

const Title = styled.h1`
	font-weight: 500;
`

const AuthContainer = styled.section`
	margin-left: auto;
	display: flex;
	justify-content: center;
`

const StyledLink = styled(Link)`
	margin: auto 10px;
`

export default Header
