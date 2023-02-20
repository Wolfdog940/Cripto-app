import { createSlice } from "@reduxjs/toolkit";
//axios
import axios from "axios"


export const coinSlice = createSlice({
    name: "criptoCoins",
    initialState: {
        list: [],
    },
    reducers: {
        setCoinsList:(state,action) => {
            state.list = action.payload;
        }
    },
});

export const { setCoinsList }  = coinSlice.actions

export default coinSlice.reducer



export const fecthAllCoins = () => (dispatch) => {
    axios
    .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => {
        dispatch(setCoinsList(response.data));
      })
      .catch((error) => console.log(error));
  };

