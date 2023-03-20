import { z } from 'zod'

import { passwordRegex } from '../../../../helpers/regexes'

const LoginValidation = z.object({
	login: z.string().min(3),
	password: z.string().min(6).regex(passwordRegex, {
		message: 'Password must contain at least one special character !@#$%^&*()',
	}),
})

type LoginData = z.infer<typeof LoginValidation>

export { LoginValidation }
export type { LoginData }
