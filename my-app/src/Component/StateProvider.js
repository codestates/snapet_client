import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
    { children }
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)




/*  // ! REACT HOOK ! //
*   redux 안쓰고 리액트 상태변화
*   일반적으로 리액트 -> 생태전달: props drilling
*   context API paddling props down when reacts
*   not directly connected 
*/