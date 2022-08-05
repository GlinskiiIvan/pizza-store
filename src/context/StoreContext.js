import React, {useReducer} from "react";

export const StoreContext = React.createContext();

const initialState = {
    activeSorting: 'title',
    activeCategory: 'Острые'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_SORT_TYPE': {
            return {...state, activeSorting: action.newSortType}
        }
        case 'CHANGE_CATEGORY': {
            return {...state, activeCategory: action.newCategory}
        }
        default: {
            return state;
        }
    }
}

export const StoreContextProvider = (props) => {
    const value = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
}