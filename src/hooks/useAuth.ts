import React from 'react'
import useCookies from 'react-cookie/cjs/useCookies'
import { useAppSelector } from './useAppSelector'
import { useAppDispatch } from './useAppDispatch'
import { authorizeUser, unauthorizeUser } from '../redux/slices/auth'
import { authStateSelector } from '../redux/selectors'

const useAuth = () => {
	const [cookies, setCookie, removeCookie] = useCookies()
	const dispatch = useAppDispatch()
	const isAuthorized = useAppSelector(authStateSelector)

	const authorize = () => {
		setCookie('auth', true, { maxAge: 600 })

		dispatch(authorizeUser())
	}

	const unauthorize = () => {
		removeCookie('auth')

		dispatch(unauthorizeUser())
	}

	React.useLayoutEffect(() => {
		const authCookie = cookies['auth']

		if(!authCookie) return

		dispatch(authorizeUser())

	}, [])

	return {
		authorize,
		unauthorize,
		isAuthorized,
	}
}

export default useAuth
