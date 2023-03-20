import { Routes, Route, Navigate } from 'react-router-dom'

import { RootLayout, ProtectedLayout } from './layouts'
import { Home, Login, Page404, EditUser } from './pages'

function App() {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}>
				<Route path="*" element={<ProtectedLayout />}>
					<Route index element={<Navigate to="users" />} />
					<Route path="users" element={<Home />} />
					<Route path="edit/:id" element={<EditUser />} />
					<Route path="*" element={<Page404 />} />
				</Route>
				<Route path="login" element={<Login />} />
			</Route>
		</Routes>
	)
}

export default App
