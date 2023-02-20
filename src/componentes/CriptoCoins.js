import React,{ useEffect} from "react";
import "../css/CriptoCoins.css";

import { fecthAllCoins } from "../store/slices/criptocoins";
import {useDispatch ,useSelector} from "react-redux";
import { Link } from "react-router-dom";


export const  CriptoCoins= () => {

const dispatch = useDispatch();

const { list :coins } = useSelector(state => state.criptoCoins)





useEffect(() => {
  
  dispatch(fecthAllCoins())

  
}, [dispatch])


useEffect(() => {
  
  const arrayListId =coins.map(coin =>coin.id)
  console.log(arrayListId) 
  
  
}, [coins])



  return (
    <div className="container">
      <div className="row">
        {coins.map((coin, index) => (
          <div key={index} className="col-md-3">
            <Link className="link" to={`/coins/${coin.id}`}>
            <div className="card mt-5 rounded  text-center">
              <div className="mt-2">
                <img className="bg-dark" src={coin.image} alt={coin.name} />
              </div>
              <div className="card-body ">
                <h5 className="card-title text-center  text-warning">
                  {coin.name}
                </h5>
                <div className="d-flex flex-md-row justify-content-center">
                  <h5 className="me-3 price card-text">{coin.current_price}</h5>
                  <h5 className="card-text text-warning">€</h5>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CriptoCoins;
