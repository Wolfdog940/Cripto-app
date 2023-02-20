import React, { useState ,useEffect} from 'react'
import {Autocomplete, Card, CardContent, TextField ,Box ,Button} from "@mui/material"
import { fecthAllCoins } from "../store/slices/criptocoins";
import {useDispatch ,useSelector} from "react-redux";
import { Link } from "react-router-dom";



function AutoComplete() {

  
  const[ coin , setCoin ] = useState()



  console.log(coin)

  const dispatch = useDispatch();

  const { list :coins } = useSelector(state => state.criptoCoins)

  useEffect(() => {
  
    dispatch(fecthAllCoins())
  
    
  }, [dispatch])



  const defaultOptions ={

    options : coins.length > 0 ? coins : [],
    getOptionLabel:(options)=>options.id

  }
  

  return (
    <div className='d-flex justify-content-center mt-5'>
      <Box  sx={{width:"30%"}}>
      <Card  sx={{borderRadius:"20px" ,backgroundColor:"transparent" , boxShadow:"none"}}>
            <CardContent sx={{backgroundColor:" rgba(122, 59, 200, 0.4)" , borderRadius:"20px" ,border:" 3px solid rgb(99, 53, 170)"}} >
                <Autocomplete
                
                {...defaultOptions}
                multiple={false}
                id="coin-selector"
                value={coin}
                
                getOptionLabel={(option) => option.id}
                onChange={(event ,newValue)=>{
                  setCoin(newValue)
                  console.log(newValue.id)
                }}
                
                
                renderInput={(params)=>(
                  <TextField {...params} label="Coins" variant='outlined'/>
                  
                )}
                

                />
                <div className='d-flex justify-content-center mt-2'>
                  
                  <Link className="link" to={`/coins/${coin?.id}`}>
                    <Button variant="outlined">Coin</Button>
                    </Link></div>
            </CardContent>
        </Card>
      </Box>
        
    </div>
  )
}

export default AutoComplete