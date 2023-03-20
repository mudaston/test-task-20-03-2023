import React, { FC } from 'react'

import { Logo } from '../../atoms'
import { Navbar } from '../../molecules'

import { Header } from './Header'

interface HeaderProps {}

type Props = HeaderProps

const Component: FC<Props> = ({}) => {
	return (
		<Header>
			<Logo />
			<Navbar />
		</Header>
	)
}

export default Component
