import React, { FC } from 'react'

import PhoneInfo from './PhoneInfo'

interface PhoneProps {
	children: string | number
}

type Props = PhoneProps

const Phone: FC<Props> = ({ children }) => {
	return <PhoneInfo>{children}</PhoneInfo>
}

export default Phone
