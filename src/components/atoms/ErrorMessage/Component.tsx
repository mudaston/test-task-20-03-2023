import React, { FC } from 'react'

import ErrorMessage from './ErrorMessage'

interface ErrorMessageProps {
	children: React.ReactNode
}

type Props = ErrorMessageProps

const Component: FC<Props> = ({ children }) => {
	return <ErrorMessage>{children}</ErrorMessage>
}

export default Component
