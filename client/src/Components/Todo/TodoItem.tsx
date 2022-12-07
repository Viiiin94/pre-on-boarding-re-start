import styled from "@emotion/styled"
import React from "react"
import { useAppSelector } from "../../Hook/dispatchhook"
import { CgAdd, CgRemove } from "react-icons/cg"

const TodoItem = () => {
	const { todoList } = useAppSelector((state) => state.todo)

	const Todolists: JSX.Element[] = todoList.map((todo) => (
		<TodoLists key={`${todo.title}_${todo.id}`}>
			<p>{todo.title}</p>
			<span>{todo.content}</span>
			<CgAdd />
			<CgRemove />
		</TodoLists>
	))
	return <>{Todolists}</>
}

const TodoLists = styled.li`
	width: 325px;
	height: 34px;
	border: 1px solid black;
	margin-top: 10px;
	display: flex;
	align-items: center;
	div {
		visibility: hidden;
	}
	&:hover {
		div {
			visibility: visible;
		}
	}
`

export default TodoItem
