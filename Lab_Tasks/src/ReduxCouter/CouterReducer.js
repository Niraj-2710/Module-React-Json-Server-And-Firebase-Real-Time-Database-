import React from 'react'
import { A, M } from './CouterAction'

const initialState = {
    count: 0,
    data:[]
}
const CouterReducer = (state=initialState,action) => {
  switch (action.type) {
    case A:{
        return {
            ...state,
            count: state.count + 10
        }
    }
    case M:{
        return {
            ...state,
            count: state.count - 10 
        }
    }
    default: return state
  }
}

export default CouterReducer
