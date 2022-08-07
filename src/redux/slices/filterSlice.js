import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 'Все',
    activeSorting: {sortType: 'title', value: 'Названию 👇'},
    searchValue: '',
    activePage: 1,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setActiveSorting: (state, action) => {
            state.activeSorting = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setActivePage: (state, action) => {
            state.activePage = action.payload
        },
    }
});

export const {setActiveCategory, setActiveSorting, setSearchValue, setActivePage} = filterSlice.actions;

export default filterSlice.reducer;