import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import UserReducer from './CrudReducer'

const UserStore = configureStore({
    reducer: {
        User:UserReducer
    }
})

export default UserStore
