import styled from "@emotion/styled"
import { FormEvent } from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {
	const onSubmit = (event: FormEvent) => {
		event.preventDefault()
	}
	return (
		<>
			<Form onSubmit={onSubmit}>
				<Container>
					<TodoItem />
				</Container>
			</Form>
		</>
	)
}

const Form = styled.form``

const Container = styled.ol`
	width: 355px;
	height: 570px;
	border: 1px solid black;
	margin: 15px 15px 15px 0;
	padding: 15px 15px;
`

export default TodoList
