import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const uniCoinSlice = createSlice({
    
    name:"uniCoin",
    initialState:{
        list:[]
    },
    reducers:{
        setUniCoinList:(state,action)=>{
            state.list = action.payload
        }
    }
})

export const { setUniCoinList } = uniCoinSlice.actions;

export default uniCoinSlice.reducer

export const fecthUniCoin =(id)=>(dispatch)=>{

    axios
    .get("https://api.coingecko.com/api/v3/coins/"+id)
    
    .then((response)=>{
        dispatch(setUniCoinList(response.data))
    })
    .catch((error)=>console.log(error))

}