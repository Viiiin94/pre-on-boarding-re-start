import styled from "@emotion/styled"
import React from "react"
import { FiCircle, FiCheckCircle } from "react-icons/fi"
import { CgAdd, CgRemove } from "react-icons/cg"

const TodoList = () => {
	return (
		<>
			<Container>
				<TodoLists>
					<div>
						<FiCircle />
					</div>
					<span>투두리스트...</span>
					<div></div>
				</TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
				<TodoLists></TodoLists>
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
