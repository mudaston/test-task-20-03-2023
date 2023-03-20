import React, { FC } from 'react'

import NameInfo from './NameInfo'

interface NameProps {
	children: string | number
}

type Props = NameProps

const Name: FC<Props> = ({ children }) => {
	return <NameInfo>{children}</NameInfo>
}

export default Name
