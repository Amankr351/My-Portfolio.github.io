import React from 'react'

import { Typography, Button } from '@material-ui/core';


const Aman = ({value}) => {
    return (
        <>
            {
                value.map((current)=>{
                    console.log(current)
                    return(
                       <>
                       <div key={current.id} >
                       <Typography  variant="h1" >colour: {current.color}</Typography>
                        <h2>my tpe : {current.type}</h2>
                        <h2>my registration : {current.registration}</h2>
                        <h2>my capacity :</h2>
                        <Button variant="outlined" color="green[500]">
                           Errorkkklhhccc
                        </Button>
                        
                        <Button size="small">Smalhjkkoool</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>

                        <Button variant="contained" className='bgh'>Contained</Button>
                        
                       
                        </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Aman
