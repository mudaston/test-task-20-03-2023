import { z } from 'zod'

import { ukrainianPhoneRegex } from '../../../../helpers/regexes'

const UserValidation = z.object({
	name: z
		.string()
		.min(5, { message: 'Name must contain at least 5 characters!' }),
	phone: z.string().regex(ukrainianPhoneRegex, {
		message: 'Incorrect phone. Example: +380961302841',
	}),
	email: z.string().email(),
	company: z.string(),
})

type UserInfo = z.infer<typeof UserValidation>

export { UserValidation }
export type { UserInfo }
