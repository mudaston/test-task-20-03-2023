import React, { FC } from 'react'

import Button from './Button'

interface ButtonProps {}

type Props = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const Component: FC<Props> = ({ children, ...props }) => {
	return <Button {...props}>{children}</Button>
}

export default Component
