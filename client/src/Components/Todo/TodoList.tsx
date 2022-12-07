import styled from "@emotion/styled"
import TodoItem from "./TodoItem"

const TodoList = () => {
	return (
		<>
			<Container>
				<TodoItem />
			</Container>
		</>
	)
}

const Container = styled.ol`
	width: 355px;
	height: 570px;
	border: 1px solid black;
	margin: 15px 15px 15px 0;
	padding: 15px 15px;
`

export default TodoList
