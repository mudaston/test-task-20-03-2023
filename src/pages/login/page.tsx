import React, { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { useAuth } from '../../hooks'

import { Login as LoginForm } from '../../components/organisms/Forms'
import LoginSection from './LoginSection'

interface HomeProps {}

type Props = HomeProps

const Login: FC<Props> = () => {
	const { isAuthorized } = useAuth()

	const View = isAuthorized ? (
		<Navigate to="/" />
	) : (
		<LoginSection>
			<LoginForm />
		</LoginSection>
	)

	return (
		<>
			<Helmet>
				<title>🗝️</title>
			</Helmet>
			{View}
		</>
	)
}

export default Login
