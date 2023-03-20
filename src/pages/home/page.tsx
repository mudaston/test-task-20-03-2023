import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { UsersList } from '../../components/organisms'

import UsersSection from './UsersSection'

interface HomeProps {}

type Props = HomeProps

const Home: FC<Props> = () => {
	return (
		<>
			<Helmet>
				<title>🏠</title>
			</Helmet>
			<UsersSection>
				<UsersList />
			</UsersSection>
		</>
	)
}

export default Home
