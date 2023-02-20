import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { fecthUniCoin } from "../store/slices/infocoins"

//react.map(x => x.id)

function InfoCoin() {

    const { id } = useParams()

    console.log(id)


    const dispatch = useDispatch();

    const { list: coin } = useSelector(state => state.uniCoin)

    useEffect(() => {

        dispatch(fecthUniCoin(id))
    }, [dispatch, id])


    return (



        <div className='h-100'>
            <div className='row d-flex justify-content-center '>
                <div className='col-md-4 '>
                <div className="card mt-5 rounded bg-dark text-center">
                    <div className="mt-2">
                        <img src={coin.image ? coin.image.large : null} />
                    </div>
                    <div className="card-body text-white bg-dark">
                        <h5 className="card-title text-center  text-warning">
                            {coin.name}
                        </h5>
                        <div className="d-flex flex-md-column justify-content-center ">
                            <div className='d-flex justify-content-center'>
                                <p className="me-3 price card-text fs-3">{coin.market_data ? coin.market_data.current_price.eur +"€": null}</p>
                                
                            </div>
                            <div className='d-flex justify-content-center '>
                                <h5 className='me-3 text-warning card-text text-justify'>Cap : </h5>
                                <h5 className="me-3 price card-text text-justify">{coin.market_data ? coin.market_data.market_cap.eur: null}</h5>
                            </div>
                            <div className='d-flex justify-content-center  '>
                                <h5 className='me-3 text-warning card-text text-justify'>Volume : </h5>
                                <h5 className="me-3 price card-text text-justify">{coin.market_data ?coin.market_data.total_volume.eur: null}</h5>
                            </div>
                            <div className='d-flex justify-content-center  '>
                                <h5 className='me-3 text-warning card-text text-justify'>High 24h : </h5>
                                <h5 className="me-3 price card-text text-justify">{coin.market_data ?coin.market_data.high_24h.eur +"€" : null}</h5>
                            </div>
                            <div className='d-flex justify-content-center '>
                                <h5 className='me-3 text-warning card-text text-justify'>Low 24h : </h5>
                                <h5 className="me-3 price card-text text-justify">{coin.market_data ?coin.market_data.low_24h.eur +"€" : null}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </div>






    )


}

export default InfoCoin