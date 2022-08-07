import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeCategory: 'Все',
    activeSorting: {sortType: 'title', value: 'Названию 👇'},
    searchValue: '',
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
    }
});

export const {setActiveCategory, setActiveSorting, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;