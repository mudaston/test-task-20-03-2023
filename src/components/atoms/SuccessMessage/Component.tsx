import React, { FC } from 'react'

import SuccessMessage from './SuccessMessage'

interface ErrorMessageProps {
	children: React.ReactNode
}

type Props = ErrorMessageProps

const Component: FC<Props> = ({ children }) => {
	return <SuccessMessage>{children}</SuccessMessage>
}

export default Component
