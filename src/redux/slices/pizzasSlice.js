import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {LOADING, SUCCESS, ERROR} from '../../constants';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async (params) => {
    const {sort, order, category, search, activePage} = params;
    const res = await axios.get(`https://62e8efe1249bb1284eb6be90.mockapi.io/pizzas?page=${activePage}&limit=4&sortBy=${sort}&order=${order}&${category}&${search}`);
    return res.data;
});

const initialState = {
    items: [],
    status: 'loading'
}

export const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = LOADING;
            state.items = [];
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = SUCCESS;
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = ERROR;
            state.items = [];
        },
    }
});

export const {setItems} = pizzasSlice.actions;

export default pizzasSlice.reducer;