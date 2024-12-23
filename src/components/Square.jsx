import { useState } from "react"
import React from 'react'

function Square({value, click, classname}) {
    

    return (
    <button className={`box ${classname}`} onClick={click} >{value}</button>
    )
}
export default Square