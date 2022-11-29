import {Dispatch} from "redux";
import {flowers} from "../../data/product";
import {addSelect} from "../reducers/select";

export const fetchFlowers=()=>{
    return (dispatch: Dispatch<any>)=>{
        const response:any  = flowers
        dispatch(addSelect({payload:response}))
    }
}