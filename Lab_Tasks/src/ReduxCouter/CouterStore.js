import React from 'react'
import { createStore } from 'redux'
import CouterReducer from './CouterReducer'

const CouterStore = createStore(CouterReducer)

export default CouterStore
