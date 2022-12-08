import styled from "@emotion/styled"
import { ChangeEvent, FormEvent, useState } from "react"
import { setTodos } from "../../Store/todoSlice"
import { useAppDispatch, useAppSelector } from "../../Hook/dispatchhook"
import { Todo } from "../../Types/todo"

const TodoInput = () => {
	const [title, setTitle] = useState("")
	const [content, setContent] = useState("")

	const { todoList } = useAppSelector((state) => state.todo)
	const dispatch = useAppDispatch()

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event
		setTitle(value)
	}
	const onTextAreaChange = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event
		setContent(value)
	}

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		const insertItem: Todo = {
			id: `${new Date()}`,
			title: title,
			content: content,
			createdAt: `${new Date()}`,
			updatedAt: `${new Date()}`,
		}
		const setTodoList = [...todoList, insertItem]

		dispatch(setTodos(setTodoList))
		setTitle("")
		setContent("")
	}

	return (
		<>
			<Container onSubmit={handleSubmit}>
				<InputTitleSection>
					<Input
						type="text"
						name="title"
						placeholder="제목"
						value={title}
						onChange={onInputChange}
					/>
				</InputTitleSection>
				<InputContentsSection>
					<TextArea
						type="textarea"
						name="content"
						placeholder="내용"
						value={content}
						onChange={onTextAreaChange}
					/>
					<Button disabled={!title || !content}>
						<span>작성</span>
					</Button>
				</InputContentsSection>
			</Container>
		</>
	)
}

const Container = styled.form`
	width: 800px;
	height: 570px;
	border: 1px solid black;
	margin: 15px 15px;
`

const InputTitleSection = styled.section`
	width: 770px;
	height: 70px;
	margin: 15px 15px;
`

const Input = styled.input`
	width: 770px;
	height: 70px;
	font-size: 40px;
`

const InputContentsSection = styled.section`
	width: 770px;
	height: 455px;
	margin: 0 15px 15px 15px;
`

const TextArea = styled.input`
	width: 770px;
	height: 405px;
	font-size: 20px;
`

const Button = styled.button`
	background-color: #fff;
	float: right;
	margin: 10px 0 0 0;
	width: 80px;
	height: 40px;
	border: 1px solid #c0c0c0;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #f56360;
		color: #fff;
		border: 1px solid #fff;
		transition-duration: 0.5s;
	}
`

export default TodoInput
