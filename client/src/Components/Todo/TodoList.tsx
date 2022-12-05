import styled from "@emotion/styled"
import React from "react"
import { FiCircle, FiCheckCircle } from "react-icons/fi"
import { CgAdd, CgRemove } from "react-icons/cg"

const TodoList = () => {
	const todos = [
		{ id: 1, title: "todos1", content: "금쪽이" },
		{ id: 2, title: "todos2", content: "쪽쪽이" },
		{ id: 3, title: "todos3", content: "반쪽이" },
		{ id: 4, title: "todos4", content: "은쪽이" },
		{ id: 5, title: "todos5", content: "동쪽이" },
	]

	const Todolists: JSX.Element[] = todos.map((todo) => (
		<TodoLists key={`${todo.title}_${todo.id}`}>
			<FiCircle />
			<p>{todo.title}</p>
			<span>{todo.content}</span>
			<CgAdd />
			<CgRemove />
		</TodoLists>
	))

	return (
		<>
			<Container>{Todolists}</Container>
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

export default TodoList
