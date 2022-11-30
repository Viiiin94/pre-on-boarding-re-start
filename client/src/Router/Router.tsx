import { BrowserRouter, Routes, Route } from "react-router-dom"
import Create from "../Pages/Create"
import Header from "../Pages/Header"
import Login from "../Pages/Login"
import Todo from "../Pages/Todo"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route path="/login" element={<Login />} />
					<Route path="/create" element={<Create />} />
					<Route path="/todos" element={<Todo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
