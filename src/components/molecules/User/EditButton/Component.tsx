import React, { FC } from 'react'

import { Button } from '../../../atoms'

interface EditButtonProps {}

type Props = EditButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const EditButton: FC<Props> = ({ children, ...props }) => {
	return <Button {...props}>{children}</Button>
}

export default EditButton
