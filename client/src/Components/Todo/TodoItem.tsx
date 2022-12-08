import styled from "@emotion/styled"
import { useAppDispatch, useAppSelector } from "../../Hook/dispatchhook"
import { CgAdd, CgRemove } from "react-icons/cg"
import { setTodos } from "../../Store/todoSlice"

const TodoItem = () => {
	const { todoList } = useAppSelector((state) => state.todo)
	const dispatch = useAppDispatch()

	const updateTodo = (id: any) => {
		const setTodolist = [...todoList]
		const updateTodoIdx = setTodolist.findIndex(
			(item) => item.id === id.currentTarget.id
		)

		setTodolist.map((item) => {
			if (item.id === todoList[updateTodoIdx].id) {
				item.content = "바뀜"
			}
		})
	}

	const onRemoveTodo = (id: any) => {
		const setTodolist = [...todoList]
		const removeTodoIdx = setTodolist.findIndex(
			(item) => item.id === id.currentTarget.id
		)

		setTodolist.splice(removeTodoIdx, 1)
		dispatch(setTodos(setTodolist))
	}

	const Todolists: JSX.Element[] = todoList.map((todo) => (
		<TodoLists key={`${todo.title}_${todo.id}`}>
			<p>{todo.title}</p>
			<span>{todo.content}</span>
			<div>
				<Button onClick={updateTodo}>
					<CgAdd />
				</Button>
				<Button onClick={onRemoveTodo}>
					<CgRemove />
				</Button>
			</div>
		</TodoLists>
	))
	return <>{Todolists}</>
}

const TodoLists = styled.li`
	width: 325px;
	height: 34px;
	display: flex;
	border: 1px solid black;
	margin-top: 10px;
	display: flex;
	align-items: center;
	div {
		float: right;
		visibility: hidden;
	}
	&:hover {
		div {
			visibility: visible;
		}
	}
`

const Button = styled.button`
	background-color: #fff;
`

export default TodoItem
