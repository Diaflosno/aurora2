import React from 'react'
import App from '../App.jsx'

function Body({data}) {
    return(
        <>
      <h1>Color: {data.nuevo ? data.nuevo.Color: 'Color not available'}</h1>
        </>
        )

}
    export {Body} 
