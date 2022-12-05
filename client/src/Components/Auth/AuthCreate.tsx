import styled from "@emotion/styled"
import { ChangeEvent, useState } from "react"
import { User } from "../../Types/auth"

const initialValue = {
	id: "",
	email: "",
	password: "",
	createdAt: "",
}

const AuthCreate = () => {
	const [user, setUser] = useState<User>(initialValue)

	const { id, email, password, createdAt } = user

	const handleChangeUser = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
	}

	return (
		<>
			<AuthSection>
				<Input
					type="email"
					placeholder="아이디"
					name="email"
					value={email}
					onChange={handleChangeUser}
				/>
				<Input
					type="password"
					placeholder="비밀번호"
					name="password"
					value={password}
					onChange={handleChangeUser}
				/>
				<Input type="text" placeholder="이름" name="name" />
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
	max-width: 300px;

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
