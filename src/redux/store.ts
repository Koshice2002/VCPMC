import { configureStore } from '@reduxjs/toolkit'

import authSlice from './slice/authSlice'
import songSlice from './slice/songSlice'
import exploitContractSlice from './slice/exploitContractSlice'
import authorizedContractSlice from './slice/authorizedContractSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    songs: songSlice,
    exploitContracts: exploitContractSlice,
    authorizedContracts: authorizedContractSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch