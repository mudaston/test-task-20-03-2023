import React, { FC } from 'react'

import BoldText from './BoldText'

interface BoldTextProps {
	children: string
}

type Props = BoldTextProps

const Component: FC<Props> = ({ children }) => {
	return <BoldText>{children}</BoldText>
}

export default Component
