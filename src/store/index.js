import { configureStore } from "@reduxjs/toolkit"
//reducer
import criptoCoins from "./slices/criptocoins"
import uniCoin from "./slices/infocoins"

export default configureStore({
    reducer:{
        criptoCoins,
        uniCoin

    }

});