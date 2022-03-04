import React, { useState, useReducer, useContext } from 'react'

import { DISPLAY_ALERT,CLEAR_ALERT } from './actions'
import reducer from './reducer'

export const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: '',
  alertType: '',
}
const AppContext = React.createContext()
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,initialState)

  const displayAlert=()=>{
      dispatch({type:DISPLAY_ALERT})
      clearAlert()
  }
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      })
    }, 3000)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,displayAlert
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
 const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider,useAppContext}