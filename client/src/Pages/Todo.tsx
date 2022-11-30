import React from "react"
import TodoInput from "../Components/Todo/TodoInput"
import styled from "@emotion/styled"
import TodoList from "../Components/Todo/TodoList"

const Todo = () => {
	return (
		<>
			<TodoContainer>
				<TodoInput />
				<TodoList />
			</TodoContainer>
		</>
	)
}

const TodoContainer = styled.main`
	display: flex;
	border: 1px solid #212121;
	width: 1200px;
	height: 600px;
	background-color: #fff3d4;
	margin: 30px auto;
`

export default Todo
