import React, { useState } from "react"
import styled from "@emotion/styled"
import { Link, Outlet } from "react-router-dom"

const Header = () => {
	const isLoggined = useState(false)
	return (
		<>
			<Head>
				<Title>
					<Link to="/Todos">투두리스트</Link>
				</Title>
				<AuthContainer>
					{isLoggined ? (
						<>
							<StyledLink to="Login">로그아웃</StyledLink>
							<StyledLink to="Create">나의 투두</StyledLink>
						</>
					) : (
						<>
							<StyledLink to="Login">로그인</StyledLink>
							<StyledLink to="Create">회원가입</StyledLink>
						</>
					)}
				</AuthContainer>
			</Head>
			<Outlet />
		</>
	)
}

const Head = styled.nav`
	display: flex;
	justify-content: center;
	height: 70px;
	border-bottom: 1px solid #c0c0c0;
	border-radius: 15px;
	box-shadow: 0 4px 4px -4px #212121;
	padding: 0 30px;
	background-color: #f5f5f5;
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
