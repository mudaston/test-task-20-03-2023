import type { RootState } from '../store'

import { createSelector } from '@reduxjs/toolkit'

const authState = (state: RootState) => state.auth

const authStateSelector = createSelector(authState, (auth) => auth.authorized)

export default authStateSelector
