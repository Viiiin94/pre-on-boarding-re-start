import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../Pages/Header"
import Login from "../Pages/Login"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
