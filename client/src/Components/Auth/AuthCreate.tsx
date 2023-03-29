import styled from "@emotion/styled"
import { ChangeEvent, useCallback, useState } from "react"
import { useAppSelector, useAppDispatch } from "../../Hook/dispatchhook"
import { User } from "../../Types/auth"

const AuthCreate = () => {
	// const { email, password } = useAppSelector((state) => state.user)
	// const dispatch = useAppDispatch()

	const [users, setUsers] = useState<User>({
		id: "",
		email: "",
		password: "",
	})

	const { id, email, password } = users

	const handleChangeUser = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target
			setUsers({ ...users, [name]: value })
		},
		[users]
	)

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
				<Input
					type="text"
					placeholder="이름"
					name="id"
					value={id}
					onChange={handleChangeUser}
				/>
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
