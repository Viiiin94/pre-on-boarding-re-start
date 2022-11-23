import styled from "@emotion/styled"
import { FormEvent, useState } from "react"
import AuthHeader from "../Components/Auth/AuthHeader"
import AuthButton from "../Components/Common/AuthButton"
import AuthCreate from "../Components/Auth/AuthCreate"

const Create = () => {
	const [first, setfirst] = useState("")

	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
	}

	return (
		<AuthContainer>
			<AuthHeader />
			<Form onSubmit={onSubmit}>
				<AuthCreate />
				<AuthButton />
			</Form>
		</AuthContainer>
	)
}

const AuthContainer = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 500px;
	height: 500px;
	border: 1px solid #c9c9c9;
	border-radius: 10px;
	box-shadow: 2px 2px 6px -1px #212121;
`

const Form = styled.form``

export default Create
