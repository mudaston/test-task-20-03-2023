import React, { FC, InputHTMLAttributes } from 'react'

import Input from './Input'

interface InputProps {}

type Props = InputProps & InputHTMLAttributes<HTMLInputElement>

const Component: FC<Props> = ({ ...props }) => {
	return <Input {...props} />
}

export default Component
