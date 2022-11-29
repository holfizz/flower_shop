import {createSlice} from "@reduxjs/toolkit";
import {flowers} from "../../data/product";

const initialState = {
    flowers:flowers,
}

const selectSlice = createSlice({
    name:'selectSlice',
    initialState,
    reducers: {
        addSelect(state : any , action: any){

        }

    }
})
export default selectSlice.reducer
export const {addSelect} = selectSlice.actions