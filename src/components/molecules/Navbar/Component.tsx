import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { useAuth } from '../../../hooks'

import { Navbar } from './Navbar'

interface NavbarProps {}

type Props = NavbarProps

const Component: FC<Props> = () => {
	const { isAuthorized, unauthorize } = useAuth()

	const LoginLink = !isAuthorized && (
		<li>
			<NavLink to={'/login'}>Login</NavLink>
		</li>
	)

	const LogoutLink = isAuthorized && (
		<li>
			<NavLink onClick={() => unauthorize()} to="/">
				Logout
			</NavLink>
		</li>
	)

	return (
		<Navbar>
			<ul>
				<li>
					<NavLink to={'/users'}>Users</NavLink>
				</li>
				{LoginLink}
				{LogoutLink}
			</ul>
		</Navbar>
	)
}

export default Component
