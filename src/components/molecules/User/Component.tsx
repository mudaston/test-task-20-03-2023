import React, { FC } from 'react'

import Wrapper from './Wrapper'

interface UserProps {
	children: React.ReactNode
}

type Props = UserProps

const User: FC<Props> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default User
