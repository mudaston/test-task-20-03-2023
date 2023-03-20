import { Outlet, Navigate } from 'react-router-dom'

import { useAuth } from '../../hooks'

const ProtectedLayout = () => {
	const { authorize, isAuthorized } = useAuth()

	return <>{isAuthorized ? <Outlet /> : <Navigate to={'/login'} />}</>
}

export default ProtectedLayout
